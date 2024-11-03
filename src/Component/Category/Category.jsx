import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="flex flex-col gap-4 col-span-2">
      <button className="btn">
        <Link>All Category</Link>
      </button>
      <button className="btn">
        <Link>Laptop</Link>
      </button>
      <button className="btn">
        <Link>Tablet</Link>
      </button>
      <button className="btn">
        <Link>Accessories</Link>
      </button>
    </div>
  );
};

export default Category;
