import React from "react";
import { Table } from "reactstrap";

const Recent = () => {
  return (
    <div className='recent'>
      <h3>Recent Activity</h3>
      <Table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>1/1/21</td>
            <td>Sent</td>
            <td>N100.00</td>
          </tr>
          <tr>
            <td>2/2/21</td>
            <td>Received</td>
            <td>N200.00</td>
          </tr>
          <tr>
            <td>3/3/121</td>
            <td>Sent</td>
            <td>N300.00</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Recent;
