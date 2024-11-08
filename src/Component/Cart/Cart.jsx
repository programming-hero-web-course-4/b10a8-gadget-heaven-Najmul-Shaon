import React, { useEffect, useState } from "react";
import { getCartItems } from "../Utility/Utility";
import { LuArrowUpDown } from "react-icons/lu";
import CartCard from "../CartCard/CartCard";
import { LuBadgeCheck } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sort, setSort] = useState(cartProducts);
  const [maintainSort, setMaintainSort] = useState(false);
  console.log(sort);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
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
  useEffect(() => {
    toggleButton();
  }, []);

  const handleSort = () => {
    console.log("sorted");
    const sorted = [...cartProducts].sort((a, b) => b.price - a.price);
    setSort(sorted);
    setMaintainSort(true);
  };

  const toggleButton = () => {
    setIsButtonEnabled(localStorage.length > 0);
  };

  const navigate = useNavigate();
  const hanleToHome = () => {
    localStorage.clear();
    toggleButton();
    navigate("/");
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

          <button
            id="purchase"
            disabled={!isButtonEnabled}
            className="btn bg-primary_color rounded-2xl text-white"
            onClick={() =>
              document.getElementById("purchase_modal").showModal()
            }
          >
            Purchase
          </button>
          <dialog
            id="purchase_modal"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box flex flex-col items-center space-y-6">
              <p className="text-6xl text-green-400">
                <LuBadgeCheck></LuBadgeCheck>
              </p>
              <h3 className="font-bold text-2xl">Payment Successfull!</h3>
              <p className="py-4">Thanks for purchasing.</p>
              <p className="py-4">Total : {totalPrice}</p>
              <div className="modal-action">
                <form method="dialog">
                  <button onClick={hanleToHome} className="btn w-full">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {cartProducts.map((cartProduct, i) => (
          <CartCard key={i} cartProduct={cartProduct}></CartCard>
        ))}
      </div>
    </div>
  );
};

export default Cart;
