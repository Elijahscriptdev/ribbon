import React from "react";
import { Table } from "reactstrap";

const Recent = () => {
  return (
    <div className="recent">
      <h3>Recent Activity</h3>
      <Table>
        <tbody>
          <tr>
            <th scope='row'>LOGO</th>
            <td>HIV Draw blood Test</td>
            <td>A100</td>
          </tr>
          <tr>
            <th scope='row'>LOGO</th>
            <td>TB Radiology Xray</td>
            <td>A30</td>
          </tr>
          <tr>
            <th scope='row'>LOGO</th>
            <td>Blood Pressure Check</td>
            <td>A10</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Recent;
