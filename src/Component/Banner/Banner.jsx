import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "../BannerImg/BannerImg";

const Banner = () => {
  return (
    <>
      <div className="text-center bg-primary_color rounded-b-xl flex flex-col items-center container mx-auto pt-8 pb-28">
        <div className="">
          <h1 className="font-bold text-2xl md:text-5xl text-white w-11/12 md:w-9/12 mx-auto">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="font-normal text-white text-base mt-3 md:mt-6 w-9/12 md:w-6/12 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn mt-4 md:mt-8 rounded-3xl font-bold text-xl text-primary_color">
            <Link to="/dashboard">Shop Now</Link>
          </button>
        </div>
      </div>
      <BannerImg></BannerImg>
    </>
  );
};

export default Banner;
