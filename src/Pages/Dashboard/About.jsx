/** @format */

import React, { useState } from "react";
import { Row, Col, FloatingLabel, Button, Form } from "react-bootstrap";

import styles from "../../components/About/about.module.scss";
export const About = () => {
  const [content, setContent] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem mollitia architecto eos, accusamus assumenda dolorum qui quisquam. In, magni voluptate. Animi iusto, illo dignissimos sit autem ut sequi dicta.",
  );
  const [validated, setValidated] = useState(true);
  const handleChangContentAbout = () => {
    if (content) {
      console.log(content);
      setValidated(true);
    } else {
      setValidated(false);
    }
  };
  return (
    <div>
      <Row className="p-2">
        <Col sx={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="mb-3">
          <FloatingLabel controlId="floatingTextarea2" label="Edit about">
            <Form.Control
              as="textarea"
              style={{ height: "200px" }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mb-3"
              required
              isInvalid={validated ? false : true}
            />
            <Button variant="dark" onClick={handleChangContentAbout}>
              Save
            </Button>
          </FloatingLabel>
        </Col>
        <Col sx={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="mb-3">
          <div className={`${styles["box"]} position-relative `}>
            <img
              className={`${styles["img"]} w-100`}
              src="https://images.unsplash.com/photo-1644329968124-4c68f17c21e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1319&q=80"
              alt="About image"
            />
            <div
              className={`${styles["add"]} position-absolute start-0 botton-0 top-0 end-0 w-100 h-100 d-flex justify-content-center align-items-center px-4`}
            >
              <i className="bi bi-plus-circle fs-1 text-white"></i>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
