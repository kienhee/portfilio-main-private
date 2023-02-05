/** @format */

import React from "react";
import "./skills.scss";
import { Heading } from "../Heading/Heading";
import { v4 as uuidv4 } from "uuid";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css3.png";
import sass from "../../assets/images/sass.png";
import bootstrap from "../../assets/images/bootstrap.png";
import js from "../../assets/images/javascript.png";
import react from "../../assets/images/react.png";
import nodejs from "../../assets/images/nodejs.png";
import express from "../../assets/images/express.png";
import mongodb from "../../assets/images/mongodb.png";
import mysql from "../../assets/images/mysql.png";
import git from "../../assets/images/git.png";
import figma from "../../assets/images/figma.png";
const Skills = () => {
  let skills = [
    { id: uuidv4(), url: html },
    { id: uuidv4(), url: css },
    { id: uuidv4(), url: sass },
    { id: uuidv4(), url: bootstrap },
    { id: uuidv4(), url: js },
    { id: uuidv4(), url: react },
    { id: uuidv4(), url: nodejs },
    { id: uuidv4(), url: express },
    { id: uuidv4(), url: mysql },
    { id: uuidv4(), url: mongodb },
    { id: uuidv4(), url: git },
    { id: uuidv4(), url: figma },
  ];
  return (
    <section id="skills" className="skill wrap-app" style={{ marginBottom: 100 }}>
      <div className="skill__container">
        <div>
          <div className="heading__main">
            <Heading heading={"My skills"} />
            <p className="title__small fw-bold mb-1">What My Programming Skills Included?</p>
          </div>
          <div className="about__skills__container">
            <div className="about__skills__description">
              <p>
                "I am skilled in using various programming languages such as JavaScript, ReactJS, and NodeJS. I have
                gained experience and knowledge in these languages through self-study and practical application. My
                expertise in these technologies allows me to develop and deliver efficient and effective solutions to
                meet project requirements. I am dedicated to continually improving my skills and staying up-to-date with
                industry advancements in these areas."
              </p>
            </div>
            <div className="about__skills__icons">
              {skills.map((skill) => (
                <div className="about__skills__item" key={skill.id}>
                  <img src={skill.url} alt={skill.url} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
