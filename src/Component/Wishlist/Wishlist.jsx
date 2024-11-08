import React, { useEffect, useState } from "react";
import { getWishtItems } from "../Utility/Utility";
import WishlistCard from "../WishlistCard/WishlistCard";

const Wishlist = () => {
  const [wishProducts, setWishProducts] = useState([]);
  useEffect(() => {
    const wishItems = getWishtItems();
    setWishProducts(wishItems);
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between my-12">
        <h5 className="font-bold text-2xl text-black_color">Wishlist</h5>
      </div>
      <div className="flex flex-col gap-6">
        {wishProducts.map((wishProduct,i) => (
          <WishlistCard key={i} wishProduct={wishProduct}></WishlistCard>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
