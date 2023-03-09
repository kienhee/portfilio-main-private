/** @format */

import React, { useState } from "react";
import { Row, Col, Form, FloatingLabel } from "react-bootstrap";
import contactImage from "../../assets/images/contact.jpg"
import styles from "./contact.module.scss";
export const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      console.log(email, name, message);
    }
  };

  return (
    <section className={`${styles["contact"]} wrap-app`} id="contact">
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="mb-4">
          <img
            className={`${styles["contact__image"]}`}
            src={contactImage}
            alt="Contact Image"
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="mb-4">
          <Form className={`${styles["contact__form"]}`} noValidate validated={validated} onSubmit={handleSubmit}>
            <FloatingLabel label="What your name" className="mb-4">
              <Form.Control
                type="text"
                placeholder="What your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Email address" className="mb-4">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FloatingLabel>

            <FloatingLabel label="Message" className="mb-4">
              <Form.Control
                as="textarea"
                placeholder="Message"
                style={{ height: "180px" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </FloatingLabel>

            <button type="submit" className="btn btn-main text-white">
              Submit
            </button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};
