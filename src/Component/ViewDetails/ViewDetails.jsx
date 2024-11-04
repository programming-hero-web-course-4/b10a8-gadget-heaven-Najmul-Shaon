import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const producstDetails = useLoaderData();
  const { product_id } = useParams();
  const productIdInt = parseInt(product_id);
  console.log(producstDetails, product_id, productIdInt);
  const productDetails = producstDetails.find(
    (jobDetails) => jobDetails.product_id === product_id
  );
  const {
    product_title,
    product_image,
    price,
    description,
    availability,
    Specification,
    rating,
  } = productDetails;
  return (
    <div className="container mx-auto bg-primary_color">
      <div className="text-center space-y-6 mb-8">
        <h3 className="font-bold text-3xl text-white">Product Details</h3>
        <p className="font-normal text-white text-base w-7/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="hero w-8/12 mx-auto border bg-white rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <figure className="w-1/2">
            <img src={product_image} className="w-full rounded-lg border" />
          </figure>
          <div>
            <h1 className="text-5xl font-bold">{product_title}</h1>
            <p>Price: {price}</p>
            <p>{availability ? "In Stock" : "Stock Out"}</p>
                      <p className="py-6">{description}</p>
                      
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
