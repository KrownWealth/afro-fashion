import { UserContext } from "../../../contexts/user.context";
import Button from "../../buttons/button.component";
import { useState, useContext } from 'react';
import {  UserProfileCard } from "./profile-card";

import "../seller/seller.styles.scss";

const date = new Date();
const today = date.toLocaleString().split(",")[0];

const UserProfile = () => {
  const [ createItem, setCreateItem ] = useState(false);
  const [ editItem, setEditItem]  = useState(false);
  const { currentUser } = useContext(UserContext);
  const { bio, displayName, email, phone, address, imageUrl } = currentUser

  const toggleCreateItem = () => {
    setCreateItem(!createItem);
  }

  const toggleEditItem = () => {
    setEditItem(!editItem);
  }

   return (
    <>
      <div className="card container p-2 bg-trans">
        <div className="card col-md-6 mx-auto bg-gray">
          <div className="card-title mt-3 mb-3">
            <span className="-welcome">Welcome, {displayName}</span>
            <span className="-date">{today}</span>
          </div>
          <section>
            <UserProfileCard 
              bio={bio}
              name={displayName} 
              email={email} 
              phone={phone} 
              address={address} 
              imageUrl={imageUrl}/>
          </section>
          <section id="upload">
            <Button onClick={toggleCreateItem}>
              See your orders
            </Button>
            {/* <div className="p-1">{createItem && <SellerCreateCard/>}</div> */}
          </section>
          <section id="edit">
            <Button onClick={toggleEditItem}>
              Saved Items
            </Button>
            <div className="p-1">
              {/* {editItem && <SellerProducts sellerName={displayName} />} */}
            </div>
          </section>
        </div>
      <div className="lg-div"></div>
     </div>
    </>
  )
}

export default UserProfile;