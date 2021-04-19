import React from "react";
import "./BottomNav.css";
import { BsHouseDoorFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className='bottom-nav'>
      <ul>
        <li>
          <NavLink to='/'>
            <BsHouseDoorFill /> Home
          </NavLink>
        </li>
        <li><NavLink to='/activity'>Activity</NavLink></li>
        <li><NavLink to='/wallet'>Wallet</NavLink></li>
        <li><NavLink to='/market'>Market</NavLink></li>
        <li><NavLink to='/earn'>Earn</NavLink></li>
      </ul>
    </div>
  );
};

export default BottomNav;
