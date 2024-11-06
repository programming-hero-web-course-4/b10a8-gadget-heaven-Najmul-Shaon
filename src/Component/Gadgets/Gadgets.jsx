// import React, { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = ({ categoryData }) => {
  //   const [gadgets, setGadgets] = useState([]);

  //   useEffect(() => {
  //     fetch("products.json")
  //       .then((res) => res.json())
  //       .then((data) => setGadgets(data));
  //   }, []);

  return (
    <>
      <div className="col-span-10">
        <div className="grid grid-cols-3 gap-6">
          {categoryData.map((category, i) => (
            <Gadget category={category} key={i}></Gadget>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gadgets;
