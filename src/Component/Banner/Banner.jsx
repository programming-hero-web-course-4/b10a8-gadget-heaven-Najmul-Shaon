import React from "react";
import img from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="text-center bg-primary_color rounded-b-xl flex flex-col items-center">
      <div className="">
        <h1 className="font-bold text-2xl md:text-5xl text-white w-11/12 md:w-9/12 mx-auto">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="font-normal text-white text-base mt-3 md:mt-6 w-9/12 md:w-6/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn mt-4 md:mt-8 rounded-3xl font-bold text-xl text-primary_color">
          <Link to="dashboard">Shop Now</Link>
        </button>
      </div>

      <figure className="w-6/12 p-3 bg-white/30 rounded-xl border">
        <img className="w-full rounded-xl h-96" src={img} alt="banner image" />
      </figure>
    </div>
  );
};

export default Banner;
