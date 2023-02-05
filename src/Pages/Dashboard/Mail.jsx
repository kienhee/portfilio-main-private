import React from 'react'
import Table from "react-bootstrap/Table";
const Mail = () => {
  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr className="fw-bolder">
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Mail