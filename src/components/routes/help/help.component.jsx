import React from "react";
import {
  Form,
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./help.styles.scss";
import { HelpList } from "./helplist.component";
import { HelpListCard } from "./help-list-card.component";

export const Help = () => {
  return (
    <Container className="no-padding-container">
      <div className="card container help-container">
        <div className="p-4 text-center">
          <section className="help-heading">
            <h3>Welcome to Afro Fashion Support</h3>
            <p>We're here to help</p>
            <Form className="formWidth">
              <InputGroup className="mb-4 mt-4">
                <FormControl
                  placeholder="Search for help..."
                  aria-label="Search for support"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  <FaSearch />
                </Button>
              </InputGroup>
            </Form>
          </section>
          <section className="helpCenter">
            <Row>
              <Col>
                <Button variant="outline-secondary" className="fixed-width-button">
                  Products
                </Button>
              </Col>
              <Col>
                <Button variant="outline-secondary" className="fixed-width-button">
                  Subscription
                </Button>
              </Col>
              <Col>
                <Button variant="outline-secondary" className="fixed-width-button">
                  Contact Us
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="outline-secondary" className="fixed-width-button">
                  Get Help With Your Order
                </Button>
              </Col>
              <Col>
                <Button variant="outline-secondary" className="fixed-width-button">
                  Shopping and Delivery
                </Button>
              </Col>
              <Col>
                <Button variant="outline-secondary" className="fixed-width-button">
                  Shopping and Delivery
                </Button>
              </Col>
            </Row>
          </section>
        </div>
        <hr />
        <div className="d-lg-flex mt-4">
          <HelpList />
          <HelpListCard />
        </div>
      </div>
    </Container>
  );
};
