import React from "react";
import "./TopNav.css";
import { BsPersonFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";

const TopNav = () => {
  return (
    <div className='top-nav'>
      <div>
        <ul className='logo'>
          <li>ribbon</li>
        </ul>
      </div>
      <div className='top-nav-links'>
        <ul>
          <li className='mx-2'>
            <BsPersonFill className='person' />
          </li>
          <li>
            <BsBellFill className='bell' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
