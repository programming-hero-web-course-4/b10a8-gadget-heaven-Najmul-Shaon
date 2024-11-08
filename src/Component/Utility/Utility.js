import toast from "react-hot-toast";

const getCartItems = () => {
  const cartItemsJson = localStorage.getItem("cart");
  if (cartItemsJson) {
    const cartItems = JSON.parse(cartItemsJson);
    return cartItems;
  } else {
    return [];
  }
};

const addToCart = (gadet) => {
  const cartItems = getCartItems();
  //   const isExist = cartItems.find((g) => g.product_id === gadet.product_id);
  //   if (isExist) {
  //     toast.error("Already Added to Your Cart!!");
  //   } else {
  cartItems.push(gadet);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  toast.success("Successfully Added to Cart!!");
  //   }
};

// add to wishlist
const getWishtItems = () => {
  const wishItemsJson = localStorage.getItem("wish");
  if (wishItemsJson) {
    const wishItems = JSON.parse(wishItemsJson);
    return wishItems;
  } else {
    return [];
  }
};

const addToWish = (gadet) => {
  const wishItems = getWishtItems();
  const isExist = wishItems.find((g) => g.product_id === gadet.product_id);
  if (isExist) {
    toast.error("Already Added to Your Wishlist!!");
  } else {
    wishItems.push(gadet);
    localStorage.setItem("wish", JSON.stringify(wishItems));
    toast.success("Successfully Added to Wishlist!!");
  }
};

export { addToCart, getCartItems, addToWish, getWishtItems };
