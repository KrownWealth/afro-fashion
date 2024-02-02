import { createContext, useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { onAuthStateChangedListener } from '../utils/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ userId, setUserId ] = useState("");

  useEffect(() => {
    const fetchData = async (user) => {
      if (!user) {
        setCurrentUser(null);
        setLoading(false);
        return;
      }
    
      try {
        const userData = await fetchUserData(user.uid, 'users');
        
        if (userData) {
          setCurrentUser({
            displayName: userData.displayName,
            email: user.email,
            userType: userData.userType,
            phone: userData?.phone || "",
            address: userData?.address || "",
            imageUrl: userData?.imageUrl || "",
            // add other properties if needed
          });
          setUserId(user.uid);
        } else {
          const sellerData = await fetchUserData(user.uid, 'sellers');
    
          if (sellerData) {
            setCurrentUser({
              displayName: sellerData.displayName,
              email: user.email,
              userType: sellerData.userType,
              brandName: sellerData?.brandName || "",
              phone: sellerData?.phone || "",
              address: sellerData?.address || "",
              bankAcct: sellerData?.bankAcct || "",
              imageUrl: sellerData?.imageUrl || "",
              // add other properties if needed
            });
            setUserId(user.uid);
          } else {
            setCurrentUser(null);
          }
        }
    
        setLoading(false);
      } catch (error) {
        setCurrentUser(null);
        setLoading(false);
      }
    };
    
    const unsubscribe = onAuthStateChangedListener(fetchData);
    return unsubscribe;
  }, []);

  const fetchUserData = async (uid, collection) => {
    const firestore = getFirestore();
    const userDocRef = doc(firestore, collection, uid);

    try {
      const userSnapshot = await getDoc(userDocRef);
      return userSnapshot.exists() ? userSnapshot.data() : null;
    } catch (error) {
      // console.log(`Error fetching user data from "${collection}" collection`, error);
      return null;
    }
  };

  if (loading) {
    return null;
  }

  const value = { currentUser, setCurrentUser, userId };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};