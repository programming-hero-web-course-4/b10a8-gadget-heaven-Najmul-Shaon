import React from "react";
import img from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="text-center bg-primary_color rounded-b-xl">
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

      <figure className="w-8/12  mx-auto mt-12 md:mt-24 p-3 bg-white/30 rounded-xl ">
        <img className="w-full rounded-xl" src={img} alt="banner image" />
      </figure>
    </div>
  );
};

export default Banner;
