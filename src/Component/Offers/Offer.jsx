import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "../Gadget/Gadget";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Offer = () => {
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
      <Helmet>
        <title>Offers</title>
        <meta name="description" content="This is a description of my page" />
        <meta name="keywords" content="React, Helmet, SEO" />
      </Helmet>
      <div className="my-12">
        <div className="grid grid-cols-3 gap-6">
          {gadget.map((gadget, i) => (
            <Gadget gadget={gadget} key={i}></Gadget>
          ))}
        </div>
      </div>
    </>
  );
};

export default Offer;
