import React from "react";
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./help.styles.scss";
import { HelpList } from "./help-list.component";
import { HelpListCard } from "./help-list-card.component";

export const Help = () => {
  return (
    <div className="card p-2 mb-2">
      <div className="card-title">
        <h3 className="text-center mx-auto mt-2 bg-ws p-3">Help Desk</h3>
      </div>
      <div className="card container help-container">
        <div className="p-3 text-center">
          <section className="help-heading -mt2">
            <h3>Welcome to Afro Fashion Docs</h3>
            <p>We are here to guide you</p>
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
                  Track Your Order
                </Button>
              </Col>
              <Col>
                <Button variant="outline-secondary" className="fixed-width-button">
                  Shopping and Delivery
                </Button>
              </Col>
              <Col>
                <Button variant="outline-secondary" className="fixed-width-button">
                  Speak With An Agent 
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
    </div>
  );
};
