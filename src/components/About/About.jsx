/** @format */

import React from "react";
import styles from "./about.module.scss";
import { Row, Col } from "react-bootstrap";
import { Heading } from "../Heading/Heading";
import about from "../../assets/images/about.jpg"
const About = () => {
  return (
    <section className={`wrap-app ${styles["about"]}`}>
      <Row>
        <Col sx={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="mb-3">
          <Heading heading={"About Trung Kien"} />

          <p className="mb-3">
            "Hello. My name is Tran Trung Kien, my alias is <strong>Kienhee</strong>, and I'm a full-stack developer
            from Vietnam. I have been a technology enthusiast since high school and aspire to become a software
            engineer. I possess the ability to research and self-teach anything I can find on the internet. I find joy
            in transforming ideas into tangible realities through innovative solutions. I'm constantly eager to acquire
            new skills, tools, and concepts. I hope to make a substantial income through my creative thinking."
          </p>
        </Col>
        <Col sx={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="mb-3">
          <img
            className={`${styles["img"]} w-100`}
            src={about}
            alt="About image"
          />
        </Col>
      </Row>
    </section>
  );
};

export default About;
