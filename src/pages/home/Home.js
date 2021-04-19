import React from "react";
import Card from "../../components/Card";
import FormContainer from "../../components/FormContainer";
import BottomNav from "../../navigation/bottomNav/BottomNav";
import TopNav from "../../navigation/topNav/TopNav";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <TopNav />
      <Card />
      <FormContainer />
      <BottomNav />
    </div>
  );
};

export default Home;
