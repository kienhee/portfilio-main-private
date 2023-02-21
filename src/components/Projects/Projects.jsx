/** @format */

import React, { useState ,useEffect} from "react";
import { v4 as uuid } from "uuid";
import { Row, Col, Button } from "react-bootstrap";
import { Heading } from "../Heading/Heading";
import { getallProject } from "../../redux/projectSlice"
import { useDispatch, useSelector } from "react-redux";

import styles from "./project.module.scss";
const Projects = () => {
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.project);
    useEffect(() => {
      dispatch(getallProject());
    }, []);


  return (
    <section className={`${styles["project"]} wrap-app`}>
      <Heading heading={"My projects"} />
      <Row>
        {projects.projects?.data.map((project) => (
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} key={project.id} className={`${styles["project__item"]}`}>
            <div className="position-relative w-100 h-100">
              <img src={project.urlImage} alt="Project" className={`${styles["project__image"]}`} tooltip="click" />
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
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
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
