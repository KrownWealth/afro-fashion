import React from "react";
import { Row, Col, Card, ListGroup, Container } from "react-bootstrap"; 
import { SellerEditIcon } from "./edit-icon/s-edit-icon";

import "./s-profile.styles.scss"

export const SellerProfileCard = ({ sellerName, email, phone, address, avatarUrl, badge }) => {
  // input fields state variables
  // onClick-to-edit functions 
  // write to db
  // avatarUrl

  let blankAvi = "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"

  return (
    <Container className="no-padding-container">            
      <div className="card container each-sell-container">
        <div className="p-3">
        <Row className="mx-auto">
          <Col className="flex-just-center mb-2 info-card avatar"> 
            <img
              src={avatarUrl || blankAvi}
              className="rounded-circle flex-just-center"
              alt="profile avatar"
            />
          </Col>
          <Col className="info-card"> 
            <Card>
              <Card.Header>Personal Information</Card.Header>
              <ListGroup variant="flush">
        
                <ListGroup.Item className="d-flex justify-content-between ">
                  <span>Name: {sellerName} </span> 
                  <SellerEditIcon />
                </ListGroup.Item>
          
                <ListGroup.Item className="d-flex justify-content-between ">
                  <span>Email: {email}</span> 
                  <SellerEditIcon />
                </ListGroup.Item>
          
                <ListGroup.Item className="d-flex justify-content-between ">
                  <span>Phone: {phone}</span> 
                  <SellerEditIcon />
                </ListGroup.Item>
          
                <ListGroup.Item className="d-flex justify-content-between ">
                  <span>Address: {address}</span> 
                  <SellerEditIcon />
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        </div>
      </div>
    </Container>
  );
};