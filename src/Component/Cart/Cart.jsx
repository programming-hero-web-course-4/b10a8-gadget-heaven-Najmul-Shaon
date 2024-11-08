import React, { useEffect, useState } from "react";
import { getCartItems } from "../Utility/Utility";
import { LuArrowUpDown } from "react-icons/lu";
import CartCard from "../CartCard/CartCard";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sort, setSort] = useState(cartProducts);
  useEffect(() => {
    const cartItems = getCartItems();
    setCartProducts(cartItems);
  }, []);
  useEffect(() => {
    const totalCostCalc = cartProducts.reduce(
      (sum, product) => sum + product.price,
      0
    );
    setTotalPrice(totalCostCalc);
  }, [cartProducts]);

  const handleSort = () => {
    console.log("sorted");
    const sorted = [...cartProducts].sort((a, b) => b.price - a.price);
    setSort(sorted);
  };
  return (
    <div>
      <div className="flex items-center justify-between my-12">
        <h5 className="font-bold text-2xl text-black_color">Cart</h5>
        <div className="flex items-center space-x-12">
          <h5 className="text-black_color text-2xl font-bold">
            Total Cost: {totalPrice}
          </h5>
          <button onClick={handleSort} className="btn btn-outline rounded-2xl">
            Sort by Price <LuArrowUpDown></LuArrowUpDown>
          </button>
          <button className="btn bg-primary_color rounded-2xl text-white">
            Purchase
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {sort.map((cartProduct, i) => (
          <CartCard key={i} cartProduct={cartProduct}></CartCard>
        ))}
      </div>
    </div>
  );
};

export default Cart;
