import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import { Outlet, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const categories = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This is a description of my page" />
        <meta name="keywords" content="React, Helmet, SEO" />
      </Helmet>
      <div className="static max-h-[600px]">
        <Banner></Banner>
      </div>
      <div className="mt-96 mb-16">
        <h3 className="font-bold text-4xl text-center text-black_color">
          Explore Cutting-Edge Gadgets
        </h3>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-2">
          <Category categories={categories}></Category>
        </div>
        <div className="col-span-10">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Home;
