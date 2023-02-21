/** @format */

import React from "react";

const ProjectItem = ({ id, title, github, content, urlImage }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>
        <p className="project-name">{title}</p>
      </td>
      <td>
        <p className="project-git">{github}</p>
      </td>
      <td>
        <p className="project-content">{content}</p>
      </td>
      <td className="project-img">
        <img src={urlImage} alt="project" width={80} height={80} />
      </td>
      <td>
        <i className="bi bi-pencil-square text-warning fs-5 me-2 pointer"></i>
        <i className="bi bi-trash3 text-danger fs-5 pointer"></i>
      </td>
    </tr>
  );
};

export default ProjectItem;
