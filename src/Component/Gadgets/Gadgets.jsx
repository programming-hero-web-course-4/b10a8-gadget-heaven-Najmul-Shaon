import React, { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  return (
    <>
      <div className="col-span-10">
        <div className="grid grid-cols-3 gap-6">
          {gadgets.map((gadget) => (
            <Gadget gadget={gadget}></Gadget>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gadgets;
