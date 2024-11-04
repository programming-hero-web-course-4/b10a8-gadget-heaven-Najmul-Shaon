import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gadgets from "../Gadgets/Gadgets";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto">
        <Banner></Banner>
        <h3 className="font-bold text-4xl text-black_color text-center my-12">
          Explore Cutting-Edge Gadgets
        </h3>
        <div className="grid grid-cols-12 gap-6">
          <Category></Category>
          <Gadgets></Gadgets>
        </div>
      </div>
    </div>
  );
};

export default Home;
