import ReactStars from "react-rating-stars-component";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";

const DetailsCard = ({ productDetails }) => {
  const {
    product_title,
    product_image,
    price,
    description,
    availability,
    Specification,
    rating,
  } = productDetails;

  const ratings = {
    size: 40,
    count: 5,
    isHalf: false,
    value: `${Math.floor(rating)}`,
    activeColor: "gold",
  };

  return (
    <>
      <div className="hero w-6/12 mx-auto border bg-white rounded-xl absolute top-[260px] left-[25%]">
        <div className="hero-content flex-col lg:flex-row">
          <figure className="w-1/2">
            <img src={product_image} className="w-full rounded-lg border" />
          </figure>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-black_color">
              {product_title}
            </h1>
            <p className="font-semibold text-xl text-black_color/80">
              Price: {price}
            </p>
            <button
              className={
                availability
                  ? "btn btn-outline rounded-2xl text-green-400"
                  : "btn btn-outline rounded-2xl text-red-400"
              }
            >
              {availability ? "In Stock" : "Stock Out"}
            </button>
            <p className="font-normal text-lg text-black_color/80">
              {description}
            </p>
            <h4 className="font-bold text-lg text-black_color">
              Specification:
            </h4>
            <ol className="list-decimal">
              {Specification.map((spec, i) => (
                <li
                  key={i}
                  className="ms-6 font-normal text-black_color/80 text-lg"
                >
                  {spec}
                </li>
              ))}
            </ol>
            <h4>
              Rating <span className="px-2 ms-2 bg-black"></span>
            </h4>
            <div className="flex items-center gap-4">
              <ReactStars {...ratings} />
              <p className="px-4 rounded-2xl py-1 bg-gray-100">{rating}</p>
            </div>
            <div className="flex items-center gap-6">
              <button className="btn bg-primary_color rounded-3xl text-white text-lg font-bold">
                Add to Cart
                <span className="text-2xl text-white font-bold">
                  <IoCartOutline></IoCartOutline>
                </span>
              </button>
              {/* <button
                onClick={() => handleCartCount(productDetails)}
                className="btn bg-primary_color rounded-3xl text-white text-lg font-bold"
              >
                Add to Cart
                <span className="text-2xl text-white font-bold">
                  <IoCartOutline></IoCartOutline>
                </span>
              </button> */}
              <button
                className="
            btn btn-outline rounded-full text-3xl"
              >
                <FaRegHeart></FaRegHeart>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
