/** @format */

import React from "react";
import { Spinner } from "react-bootstrap";

function LoadingPage(props) {
  return (
    <div
      style={{
        background: "rgba(250,250,250,0.3)",
        backdropFilter: "blur(4px)",
        position: "fixed",
        inset: 0,
      }}
      className={`${props.show ? "d-flex" : "d-none"} align-items-center justify-content-center`}
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default LoadingPage;
