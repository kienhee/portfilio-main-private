/** @format */

import React from "react";

const ProjectItem = () => {
  return (
    <tr>
      <td>1</td>
      <td>
        <p className="project-name">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sit cumque eveniet quidem eaque? Ratione,
          odit, ut reiciendis deserunt iure, facere tempora animi soluta nemo cum temporibus possimus. Dicta, tempora.
        </p>
      </td>
      <td>
        <p className="project-git">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ea laudantium ducimus! Numquam praesentium
          cumque cum, at doloribus dolore ab, rem ipsum ullam architecto incidunt iusto ex rerum ea natus!
        </p>
      </td>
      <td>
        <p className="project-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt porro molestias esse expedita quod iure
          modi libero sit reiciendis atque eaque odit, veritatis fugiat dolores tempore, soluta excepturi! Mollitia,
          accusamus!
        </p>
      </td>
      <td className="project-img">
        <img
          src="https://images.unsplash.com/photo-1675446340536-46f629dcb858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt="project"
          width={80}
          height={80}
        />
      </td>
      <td>
        <i class="bi bi-pencil-square text-warning fs-5 me-2 pointer"></i>
        <i className="bi bi-trash3 text-danger fs-5 pointer"></i>
      </td>
    </tr>
  );
};

export default ProjectItem;
