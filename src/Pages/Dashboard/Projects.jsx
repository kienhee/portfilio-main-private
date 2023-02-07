/** @format */

import { useState } from "react";
import { Row, Col, FloatingLabel, Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../redux/projectSlice";
import { ImageUpload } from "cloudinary-react";
import axios from "../../api/axios";
import ProjectItem from "./ProjectItem";
export const Projects = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [github, setGithub] = useState("");



 
  return (
    <>
      <section className="p-2">
        <Row>
          <Col sx={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="mb-3">
            <div className="sticky-top" style={{ top: 15 }}>
              <FloatingLabel label="Title" className="mb-4 ">
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              </FloatingLabel>
              <FloatingLabel label="Link Git" className="mb-4">
                <Form.Control type="text" value={github} onChange={(e) => setGithub(e.target.value)} />
              </FloatingLabel>
              <FloatingLabel label="Content" className="mb-4">
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </FloatingLabel>
              <Button variant="dark">Add new project 📂</Button>
            </div>
          </Col>
          <Col sx={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="mb-3">
           upload
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
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </tbody>
        </Table>
      </section>
    </>
  );
};
