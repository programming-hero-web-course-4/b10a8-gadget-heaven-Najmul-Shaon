import React from "react";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_id, product_title, product_image, price } = gadget;
  return (
    <div className="card bg-white">
      <figure className="p-5 w-3/4 mx-auto">
        <img src={product_image} alt="Shoes" className="rounded-xl w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold text-2xl text-black_color">
          {product_title}
        </h2>
        <p className="font-medium text-xl text-black_color/60">
          Price: {price}
        </p>
        <div className="card-actions">
          <Link to={`/${product_id}`}>
            <button className="btn btn-outline text-primary_color rounded-3xl">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
