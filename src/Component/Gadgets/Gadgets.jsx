import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "../Gadget/Gadget";
import { useEffect, useState } from "react";

const Gadgets = () => {
  const { category } = useParams();
  const gadgets = useLoaderData();
  const [gadget, setGadget] = useState([gadgets]);
  useEffect(() => {
    if (category) {
      const filetedGadget = [...gadgets].filter(
        (gadget) => gadget.category === category
      );
      setGadget(filetedGadget);
    } else {
      setGadget(gadgets);
    }
  }, [gadgets, category]);

  return (
    <>
      <div className="col-span-10">
        <div className="grid grid-cols-3 gap-6">
          {gadget.map((gadget, i) => (
            <Gadget gadget={gadget} key={i}></Gadget>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gadgets;
