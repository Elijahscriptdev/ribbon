import React from "react";
import "./BottomNav.css";
import { BsHouseDoorFill } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { SiMarketo } from "react-icons/si";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className='bottom-nav'>
      <ul>
        <li>
          <NavLink to='/' activeClassName='active'>
            <div className='icon'>
              <BsHouseDoorFill />
            </div>
            <div>Home</div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/activity' activeClassName='active'>
            <div className='icon'>
              <GiWallet />
            </div>

            <div>Activity</div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/wallet' activeClassName='active'>
            <div className='icon'>
              <GiWallet />
            </div>
            <div>Wallet</div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/market' activeClassName='active'>
            <div className='icon'>
              <SiMarketo />
            </div>
            <div>Market</div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/earn' activeClassName='active'>
            <div className='icon'>
              <GiWallet />
            </div>
            <div>Earn</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BottomNav;
