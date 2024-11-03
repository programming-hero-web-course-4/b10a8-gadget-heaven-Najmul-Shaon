import React from "react";
import NavBar from "../Root/NavBar/NavBar";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="bg-indigo-600 container mx-auto rounded-xl">
      <NavBar></NavBar>

      <Banner></Banner>
    </div>
  );
};

export default Home;
