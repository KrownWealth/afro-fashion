import {  SellerProfileCard } from "./s-profile/s-profile-card"
import { UserContext } from "../../../contexts/user.context";
import { SellerCreateCard } from "./s-profile/s-create-card";
import { SellerProducts } from "./s-profile/s-products-card";
import Button from "../../buttons/button.component";
import { useState, useContext } from 'react';
import { Container } from "react-bootstrap";

import "./seller.styles.scss";

const date = new Date();
const today = date.toLocaleString().split(",")[0];

const Seller = () => {
  const [ createItem, setCreateItem ] = useState(false);
  const [ editItem, setEditItem]  = useState(false);
  const { currentUser } = useContext(UserContext);
  const { displayName, brandName, phone, address, bankAcct, imageUrl } = currentUser

  const toggleCreateItem = () => {
    setCreateItem(!createItem);
  }
  
  const toggleEditItem = () => {
    setEditItem(!editItem);
  }

   return (
    <>
     <Container className="mt-2">
        <div className="card p-1 col-md-6 mx-auto bg-gray">
          <div className="card-title mt-3 mb-3">
            <span className="-welcome">Welcome, {displayName}</span>
            <span className="-date">{today}</span>
          </div>
          <section>
            <SellerProfileCard 
              sellerName={brandName || displayName} 
              phone={phone} 
              address={address} 
              bankAcct={bankAcct}
              imageUrl={imageUrl}
            />
          </section>
          <section id="upload">
            <Button onClick={toggleCreateItem}>
              Upload a new Product!
            </Button>
            <div className="p-1">{createItem && <SellerCreateCard/>}</div>
          </section>
          <section id="edit">
            <Button onClick={toggleEditItem}>
              Edit an existing Product!
            </Button>
            <div className="p-1">
              {editItem && <SellerProducts sellerName={displayName} />}
            </div>
          </section>
        </div>
      <div className="lg-div"></div>
     </Container>
    </>
  )
}

export default Seller;