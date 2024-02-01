import React from "react";
import { Row, Col, Card, ListGroup, Container } from "react-bootstrap"; 
import { SellerEditIcon } from "./edit-icon/s-edit-icon";
import "./sprofile.styles.scss"


export const SellerProfileCard = ({ sellerName, email, phone, shopName, badge }) => {
  return (
    <Container className="no-padding-container">            
      <div className="card container each-sell-container">
        <div className="p-4">
        <Row>
        <Col> 
        <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        className="rounded-circle"
        alt="Avatar"
      /></Col>
        <Col> 
        <Card style={{ width: '18rem', padding: '4px'}}>
      <Card.Header>Personal Information</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex justify-content-between ">
          <span>Name: {sellerName} </span> 
          <SellerEditIcon />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between ">
          <span>Email: </span> 
          <SellerEditIcon />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between ">
          <span>Phone Number: </span> 
          <SellerEditIcon />
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between ">
          <span>Address: </span> 
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


