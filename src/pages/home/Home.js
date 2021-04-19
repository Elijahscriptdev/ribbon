import React from "react";
import Card from "../../components/Card";
import FormContainer from "../../components/FormContainer";
import Recent from "../../components/Recent";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Card />
      <FormContainer />
      <Recent />
    </div>
  );
};

export default Home;
