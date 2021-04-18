import React from "react";
import "./BottomNav.css";
import { BsHouseDoorFill } from "react-icons/bs";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <ul>
        <li><BsHouseDoorFill />Home</li>
        <li>Activity</li>
        <li>Wallet</li>
        <li>Market</li>
        <li>Earn</li>
      </ul>
    </div>
  );
};

export default BottomNav;
