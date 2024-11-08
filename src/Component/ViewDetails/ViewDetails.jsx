import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../DetailsCard/DetailsCard";
import { useEffect, useState } from "react";
import { getWishtItems } from "../Utility/Utility";

const ViewDetails = () => {
  const producstDetails = useLoaderData();
  const { product_id } = useParams();
  // const [singleProduct, SetSingleProduct] = useState({});
  const [isInWish, setIsInWish] = useState(false);
  const details = producstDetails.find(
    (singleProductDetails) => singleProductDetails.product_id === product_id
  );
  useEffect(() => {
    const wishItems = getWishtItems();
    const isExist = wishItems.find((g) => g.product_id === details.product_id);
    if (isExist) {
      setIsInWish(true);
    }
  }, []);

  // SetSingleProduct(details);

  // console.log(details);
  return (
    <>
      <div className="container mx-auto bg-primary_color pt-8 pb-32 mb-48">
        <div className="text-center space-y-6 mb-8">
          <h3 className="font-bold text-3xl text-white">Product Details</h3>
          <p className="font-normal text-white text-base w-7/12 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      <DetailsCard
        details={details}
        isInWish={isInWish}
        setIsInWish={setIsInWish}
      ></DetailsCard>
    </>
  );
};

export default ViewDetails;
