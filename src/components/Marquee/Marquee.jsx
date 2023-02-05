/** @format */

import React from "react";
import styles from "./marquee.module.scss";
const Marquee = ({ Skills }) => {
  return (
    <>
      <section className={` ${styles["container"]}  py-3 overflow-hidden bg-white text-black`}>
        <div className={`${styles["marquee"]} d-flex gap-4`}>
          {Skills?.map((skill, index) => (
            <div key={index} className="d-flex gap-4">
              <span>{skill}</span> 
              <i className="bi bi-asterisk text-main"></i>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Marquee;
