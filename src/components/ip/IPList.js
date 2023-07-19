import React from 'react';
import { useSelector } from "react-redux";
import { selectIPs } from "./ipsSlice";

export default function IPList() {
  const ips = useSelector(selectIPs);
  if (Object.keys(ips).length !== 0) {
    return (
      <table className="conatiner">
        <tr>
          <th>IP Address</th>
          <th>Base36 code</th>
          <th>Date</th>
        </tr>
        {Object.values(ips).map((ip) => (
          <tr>
            <td>{ip.address}</td>
            <td>{ip.code}</td>
            <td>{ip.date}</td>
          </tr>
        ))}
      </table>
    );
  } else {
    return (
      <br />
    );
  }
}