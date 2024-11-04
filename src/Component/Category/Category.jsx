import React from "react";
import { Link } from "react-router-dom";

const Category = ({ handleCategory }) => {
  return (
    <div className="flex flex-col gap-4 col-span-2 bg-white p-6 rounded-2xl self-start">
      <button onClick={() => handleCategory("all")} className="btn">
        <Link>All Category</Link>
      </button>
      <button onClick={() => handleCategory("Laptop")} className="btn">
        <Link>Laptop</Link>
      </button>
      <button onClick={() => handleCategory("Tablet")} className="btn">
        <Link>Tablet</Link>
      </button>
      <button onClick={() => handleCategory("Accessories")} className="btn">
        <Link>Accessories</Link>
      </button>
    </div>
  );
};

export default Category;
