import { UserContext } from "../../../contexts/user.context";
import Button from "../../buttons/button.component";
import { SellerCreateCard } from "./s-create-card";
import { Container } from "react-bootstrap";
import { useState, useContext } from 'react';

import "./seller.styles.scss";
const date = new Date();
const today = date.toLocaleString().split(",")[0];

const Seller = () => {
  const [ createItem, setCreateItem ] = useState(false);
  const [ editItem, setEditItem]  = useState(false);
  const { currentUser } = useContext(UserContext);

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
          <div className="card-title mt-3 mb-2">
            <span className="-welcome">Welcome, {currentUser?.displayName}</span>
            <span className="-date">{today}</span>
          </div>
          <hr/>
  
          <div className="profile-card">
            {/* <SellerProfileCard /> */}
          </div>

          <section id="upload">
            <Button onClick={toggleCreateItem}>
              Upload a new Product!
            </Button>
            <div className="p-1">{createItem && <SellerCreateCard/>}</div>
          </section>

          <br/>
          <Button onClick={toggleEditItem}>
            Edit an existing Product!
          </Button>
        </div>
      <div className="lg-div"></div>
     </Container>
    </>
  )
}

// user info, contact info, category,  isVerified
// profile card, CRUD card -- create (C) -- edit & delete (RUD)

export default Seller;