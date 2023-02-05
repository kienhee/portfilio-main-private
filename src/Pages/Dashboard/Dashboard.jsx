/** @format */

import React from "react";
import { Container, Row, Col, Card, ListGroup, Tab, Nav } from "react-bootstrap";
import { About } from "./About";
import "./dashboard.scss";
import Mail from "./Mail";
import { Projects } from "./Projects";
function Dashboard() {
  return (
    <Container className=" pt-5 text-dark" fluid>
      <Row>
        <Col md={3} className="profile-menu d-flex flex-column align-items-center">
          <img
            src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/319694582_712904400141830_9220117224681003804_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qSUtQHPGPAIAX_1tVWi&_nc_ht=scontent.fhan2-5.fna&oh=00_AfB_aW4Yk2bfIBMs3i4kY2f2pvt7iU3LyDMtRxdR8CTLiA&oe=63E3F008"
            alt="Avatar"
            className="rounded-circle mb-3"
            width={150}
            height={150}
          />
          <h2 className="username mb-3 fw-bolder fs-5 text-white">Trần Trung Kiên 👨‍💻</h2>
          <p className="location mb-3 text-white">Hà nội 🌏</p>
          <Card className="menu-container w-100 mb-5">
            <ListGroup variant="flush">
              <ListGroup.Item>About</ListGroup.Item>
              <ListGroup.Item>Friends</ListGroup.Item>
              <ListGroup.Item>Photos</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={9} className="profile-content">
          <Tab.Container id="profile-tabs" defaultActiveKey="about">
            <Row>
              <Col md={12}>
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="about">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="projects">Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="mail">Mail</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="about">
                    <Card className="about-container">
                      <About />
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="projects">
                    <Card className="posts-container">
                      <Projects />
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="mail">
                    <Card className="posts-container">
                      <Mail />
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
