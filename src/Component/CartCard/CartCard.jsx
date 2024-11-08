import { TiDeleteOutline } from "react-icons/ti";

const CartCard = ({ cartProduct }) => {
  const { product_image, description, price, product_title } = cartProduct;

  return (
    <div className="flex justify-between p-8 bg-base-200 rounded-xl">
      <div className="flex gap-6">
        <figure className="w-64">
          <img className="w-full rounded-xl" src={product_image} alt="" />
        </figure>
        <div className="flex flex-col justify-evenly">
          <h3 className="font-semibold text-black_color text-2xl">
            {product_title}
          </h3>
          <p className="font-normal text-lg text-black_color/60">
            {description}
          </p>
          <p className="font-semibold text-xl text-black_color/80">
            Price: {price}
          </p>
        </div>
      </div>
      <div className="flex text-3xl text-orange-400">
        <TiDeleteOutline></TiDeleteOutline>
      </div>
    </div>
  );
};

export default CartCard;
