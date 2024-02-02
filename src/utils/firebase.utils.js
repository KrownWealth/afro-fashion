import {
  signOut,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  doc,
  getDoc,
  setDoc,
  collection,
  getFirestore,
  getDocs,
  query,
} from 'firebase/firestore'

import { firebaseConfig } from './config';
import { initializeApp } from "firebase/app";

const createdAt = new Date();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
export const db = getFirestore(firebaseApp);

// Sign in user with Google Provider
export const signInWithGoogle = async () => {
  return await signInWithPopup(auth, googleProvider)
};

// Sign in user with Email and Password
export const signInWithEmail = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

// Sign out user
export const SignOutUser = () => signOut(auth)

// Sign up user with Email and Password
export const customCreateUserWithEmail = async (
  email, 
  password, 
  displayName, 
  phone,
  userType
  ) => {
  try {
    // create user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // check if user is a seller...
    if (userType === 'seller') {
      const sellerId = userCredential.user.uid;
      const sellerDocRef = doc(db, 'sellers', sellerId);
      const SellerSnapshot = await getDoc(sellerDocRef);

      if (!SellerSnapshot.exists()) {
        try {
          await setDoc(sellerDocRef, {
            email,
            createdAt,
            displayName,
            phone,
            userType,
          }); // ... store sellerDocRef in firestore
        } catch (error) {
          console.error("Error writing seller document: ", error);
        }
      }
    } else
    if (userType === "buyer") { 
      const userId = userCredential.user.uid;
      const userDocRef = doc(db, 'users', userId);
      const UserSnapshot = await getDoc(userDocRef);

      if (!UserSnapshot.exists()) {
        try {
          await setDoc(userDocRef, {
            email,
            createdAt,
            displayName,
            phone,
            userType,
          }); // ... store userDocRef in firestore
        } catch (error) {
          console.error("Error writing document: ", error);
        }
      }
    }

    return userCredential;
  } catch (error) { 
    // console.error('Error creating user:', error.message);
    throw new Error(error.message);
  }
}

// Get snapshot and collection data with query
export const getCollectionAndDocuments = async () => {
  const myQuery = query(collection(db, "categories"));
  const querySnapshot = await getDocs(myQuery);

  const categoryMap = querySnapshot.docs.reduce(
    (acc, docSnapshot) => {
      const data = docSnapshot.data();

      if (data.title) {
        const { title, items } = data;
        acc[title.toLowerCase()] = items;
      }
      return acc;
    }, {}
  );

  return categoryMap;
}

// Get snapshot and collection data with sellers query
export const getItemsBySellers = async () => {
  const categoriesQuery = query(collection(db, "categories"));
  const categoriesSnapshot = await getDocs(categoriesQuery);

  const itemsBySeller = {};

  categoriesSnapshot.forEach((categoryDoc) => {
    const categoryData = categoryDoc.data();
    const categoryName = categoryData.title.toLowerCase();

    if (categoryData.items) {
      categoryData.items.forEach((item) => {
        const { seller, ...restOfItem } = item;

        if (seller) {
          const sellerKey = seller.toLowerCase(); // Ensure consistent case

          if (!itemsBySeller[sellerKey]) {
            itemsBySeller[sellerKey] = {};
          }
          if (!itemsBySeller[sellerKey][categoryName]) {
            itemsBySeller[sellerKey][categoryName] = [];
          }
          itemsBySeller[sellerKey][categoryName].push(restOfItem);
        }
      });
    }
  });

  return itemsBySeller;
};