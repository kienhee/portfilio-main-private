/** @format */

import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Row, Col, Button } from "react-bootstrap";
import { Heading } from "../Heading/Heading";

import styles from "./project.module.scss";
const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: uuid(),
      title: "Dota 2",
      content:
        " Can you please show me how the menu will look like? after clicking the burger menu icon, thank you. Also, is it possible if i can get the background image? I want to try making this web design",
      linkGit: "test",
      thumbnail: "https://i.pinimg.com/564x/24/1b/93/241b932ada9310bef1d3ae5a03b12ac9.jpg",
    },
    {
      id: uuid(),
      title: "Aurora programme",
      content:
        "Aurora Programme is an Astronomy public awareness programme of Argentina with the primary objectives of creating, and then implementing, an argentinian long-term plan for bringing this discipline to…",
      linkGit: "test",
      thumbnail: "https://i.pinimg.com/564x/03/f5/3e/03f53e98facaa33842fb635453f29be1.jpg",
    },
    {
      id: uuid(),
      title: "Macaron",
      content:
        "Download Desktop and Mobile Website Layout for a Gym and Salon Stock Template and explore similar templates at Adobe Stock.",
      linkGit: "test",
      thumbnail: "https://i.pinimg.com/564x/c8/43/70/c84370842b48baf199e961a965933b36.jpg",
    },
    {
      id: uuid(),
      title: "Landing page for a school of foreign languages",
      content:
        "Bright and modern landing page with a quiz for a language school. Яркая и современная посадочная страница с реализованным на ней функционалом квиза для языковой школы",
      linkGit: "test",
      thumbnail: "https://i.pinimg.com/564x/ee/68/e9/ee68e920ff0eea1c7b870b70e64a271c.jpg",
    },
    {
      id: uuid(),
      title: "Landing page for Web-studio - Design",
      content: "Graphic Design,Interaction Design,Product Design",
      linkGit: "test",
      thumbnail: "https://i.pinimg.com/564x/85/09/a0/8509a086e3a7cc731cf9c22c93d3a63b.jpg",
    },
    {
      id: uuid(),
      title: "Landing page for Web-studio - Design",
      content: "Graphic Design,Interaction Design,Product Design",
      linkGit: "test",
      thumbnail: "https://i.pinimg.com/564x/9f/a6/4d/9fa64d6e3667f5c9e5f70d76fea2e782.jpg",
    },
  ]);

  return (
    <section className={`${styles["project"]} wrap-app`}>
      <Heading heading={"My projects"} />
      <Row>
        {projects.map((project) => (
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} key={project.id} className={`${styles["project__item"]}`}>
            <div className="position-relative w-100 h-100">
              <img src={project.thumbnail} alt="Project" className={`${styles["project__image"]}`} tooltip="click" />
              <div className={`${styles["project__info"]} d-flex flex-column`}>
                <p className={`${styles["project__title"]} fw-bolder fs-4`}>{project.title}</p>
                <p className={`${styles["project__content"]} mb-3`}>{project.content}</p>
                <div className={`${styles["project__technology"]}`}>
                  <p className="mb-3">Technology</p>
                  <div className="d-flex gap-2 flex-wrap mb-4 justify-content-between">
                    <span>
                      <img
                        src="https://img.shields.io/badge/JavaScript-282C34?logo=javascript&logoColor=F7DF1E"
                        alt="JavaScript logo"
                        title="JavaScript"
                        height="25"
                      />
                    </span>
                    <span>
                      <img
                        src="https://img.shields.io/badge/TypeScript-282C34?logo=typescript&logoColor=3178C6"
                        alt="TypeScript logo"
                        title="TypeScript"
                        height="25"
                      />
                    </span>
                    <span>
                      <img
                        src="https://img.shields.io/badge/JavaScript-282C34?logo=javascript&logoColor=F7DF1E"
                        alt="JavaScript logo"
                        title="JavaScript"
                        height="25"
                      />
                    </span>
                    <span>
                      <img
                        src="https://img.shields.io/badge/TypeScript-282C34?logo=typescript&logoColor=3178C6"
                        alt="TypeScript logo"
                        title="TypeScript"
                        height="25"
                      />
                    </span>
                    <span>
                      <img
                        src="https://img.shields.io/badge/JavaScript-282C34?logo=javascript&logoColor=F7DF1E"
                        alt="JavaScript logo"
                        title="JavaScript"
                        height="25"
                      />
                    </span>
                    <span>
                      <img
                        src="https://img.shields.io/badge/TypeScript-282C34?logo=typescript&logoColor=3178C6"
                        alt="TypeScript logo"
                        title="TypeScript"
                        height="25"
                      />
                    </span>
                  </div>
                </div>
                <Button variant="outline-light">
                  <a href={project.linkGit} target="_blank" rel="noopener noreferrer">
                    Live demo <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </Button>{" "}
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center">
        {projects.length >= 6 && <button className="btn btn-main text-white">Load more</button>}
      </div>
    </section>
  );
};

export default Projects;
