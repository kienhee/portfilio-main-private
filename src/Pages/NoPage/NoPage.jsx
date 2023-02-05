import React from 'react'
import "./nopage.scss"
const NoPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 nopage">
      <div className="text-center " style={{zIndex:100}}>
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          {" "}
          <span className="text-danger">Opps!</span> Page not found.
        </p>
        <p className="lead mb-3">The page you're looking for doesn't exist.</p>
        <a href="/" className="btn btn-main text-white">
         Go Home <i className="bi bi-house"></i>
        </a>
      </div>
    </div>
  );
}

export default NoPage