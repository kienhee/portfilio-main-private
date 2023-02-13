/** @format */

import { useState } from "react";
import { Row, Col, FloatingLabel, Button, Form, Table, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../redux/projectSlice";
import axios from "axios";
import notify from "../../utils/notify"
import ProjectItem from "./ProjectItem";
export const Projects = () => {
  const dispatch = useDispatch();
  const project = useSelector(state => state.project)
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [github, setGithub] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const handleImageChange = async (e) => {
    setLoading(true);

    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', 'w4k7gq7v');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/djl238ddb/image/upload',
        formData
      );
      if (response.data && response.data?.secure_url) {
        notify(true, "Upload Thành công")

        setImage(response.data.secure_url);
        setLoading(false);
      }

    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  const handleCreateProject = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      if (image) {
        dispatch(createProject({ title, content, github, urlImage: image }))
        setContent("");
        setTitle("")
        setImage("")
        setGithub("")
      }
      else {
        notify(false, "Vui lòng upload hình ảnh")
      }
    }

  }



  return (
    <>
      <section className="p-2">
        <Row>
          <Col sx={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="mb-3">
            <Form className="sticky-top" style={{ top: 15 }} noValidate validated={validated} onSubmit={handleCreateProject}>

              <FloatingLabel label="Title" className="mb-4 ">
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </FloatingLabel>
              <FloatingLabel label="Link Git" className="mb-4">
                <Form.Control type="text" value={github} onChange={(e) => setGithub(e.target.value)} required />
              </FloatingLabel>
              <FloatingLabel label="Content" className="mb-4">
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  value={content}
                  onChange={(e) => setContent(e.target.value)} required
                />
              </FloatingLabel>

              <Button variant="dark" type="submit" disabled={loading || !title || !content || !github || !image}>   <Spinner animation="border" size="sm" variant="light" className={!project.loading && "d-none"} /> Add new project 📂</Button>

            </Form>
          </Col>
          <Col sx={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="mb-3">
            <div>
              <div className="mb-3">

                <input className={`form-control form-control-sm`} type="file" onChange={handleImageChange} />
              </div>
              {loading && <p>Loading...</p>}
              {image && <img src={image} className="w-100" style={{ borderRadius: 20 }} alt="Uploaded image" />}
            </div>
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
