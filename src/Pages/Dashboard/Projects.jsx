/** @format */

import React from "react";
import { Row, Col, FloatingLabel, Button, Form, Table } from "react-bootstrap";
import ProjectItem from "./ProjectItem";
export const Projects = () => {
  return (
    <>
      <section className="p-2">
        <Row>
          <Col sx={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="mb-3">
            <FloatingLabel label="Title" className="mb-4 ">
              <Form.Control type="text" />
            </FloatingLabel>
            <FloatingLabel label="Link Git" className="mb-4">
              <Form.Control type="text" />
            </FloatingLabel>
            <FloatingLabel label="Content" className="mb-4">
              <Form.Control as="textarea" style={{ height: "100px" }} />
            </FloatingLabel>
            <Button variant="dark">Add new project 📂</Button>
          </Col>
          <Col sx={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="mb-3">
            Add
          </Col>
        </Row>
      </section>
      <section className="p-2">
        <Table striped bordered hover responsive>
          <thead>
            <tr className="fw-bolder">
              <th>#</th>
              <th>Title</th>
              <th>Git</th>
              <th>Content</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          <ProjectItem/>
          <ProjectItem/>
          <ProjectItem/>
          </tbody>
        </Table>
      </section>
    </>
  );
};
