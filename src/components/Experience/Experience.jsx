/** @format */

import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./experience.module.scss";
const Experience = () => {
  return (
    <section className={`${styles["experience"]} wrap-app`}>
      <Row>
        <Col sx={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <p className="fs-1 fw-bolder mb-4">Education 🎓</p>
          <div className="d-flex align-items-end justify-content-between mb-4 flex-wrap">
            <div>
              <p className=" fs-5 fw-bold">T3h Academy</p>
              <span>Web Programming</span>
            </div>
            <span>
              2020 - 2023 &nbsp;
              <i className="bi bi-calendar3"></i>
            </span>
          </div>
        </Col>
        <Col sx={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <p className="fs-1 fw-bolder mb-4">Professional Experience 💼</p>
          <div className="d-flex align-items-end justify-content-between mb-4 flex-wrap">
            <div>
              <p className=" fs-5 fw-bold">Rikkei Soft</p>
              <span>Software Enginer</span>
            </div>
            <span>
              2022 - Now &nbsp;
              <i className="bi bi-calendar3"></i>
            </span>
          </div>
         
        </Col>
      </Row>
    </section>
  );
};

export default Experience;
