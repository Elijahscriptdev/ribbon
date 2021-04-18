import React from "react";
import BottomNav from "../../navigation/bottomNav/BottomNav";
import TopNav from "../../navigation/topNav/TopNav";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <TopNav />
      <div className='cards pt-2'>
        <div>
          <div className='circle-container'>
            <div className='circle'>AFYA</div>
          </div>
          <div className='font'>
            <p>143.00</p>
          </div>
          <div className='bal'>
            <p>Balance</p>{" "}
          </div>
        </div>
        <span></span>
        <div>
          <div className='circle-container'>
            <div className='circle blue'>ZAR</div>
          </div>
          <div className='font'>
            <p>R21.00</p>{" "}
          </div>
          <div className='bal'>
            <p>Equivalent</p>{" "}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Home;
