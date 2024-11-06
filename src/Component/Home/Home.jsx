import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gadgets from "../Gadgets/Gadgets";

const Home = () => {
  const [categoryData, SetCategoryData] = useState([]);
  const [filterCategory, SetFilterCategory] = useState([]);

//   const allCategoryProducts = useLoaderData();
  //   SetFilterCategory(allCategoryProducts);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => SetCategoryData(data));
  }, []);
  //   SetFilterCategory(categoryData);
  const handleCategory = (category) => {
    if (category === "Laptop") {
      const laptopsProduct = categoryData.filter(
        (laptop) => laptop.category === "Laptop"
      );

      SetFilterCategory(laptopsProduct);
    } else if (category === "Tablet") {
      const tabletsProducts = categoryData.filter(
        (tablet) => tablet.category === "Tablet"
      );
      SetFilterCategory(tabletsProducts);
    } else if (category === "Accessories") {
      const accessoriesProducts = categoryData.filter(
        (accessories) => accessories.category === "Accessories"
      );
      SetFilterCategory(accessoriesProducts);
    } else {
      SetFilterCategory(categoryData);
    }
  };

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto">
        <Banner></Banner>
        <h3 className="font-bold text-4xl text-black_color text-center my-12">
          Explore Cutting-Edge Gadgets
        </h3>
        <div className="grid grid-cols-12 gap-6 relative">
          <Category handleCategory={handleCategory}></Category>
          <Gadgets categoryData={categoryData}></Gadgets>
        </div>
      </div>
    </div>
  );
};

export default Home;
