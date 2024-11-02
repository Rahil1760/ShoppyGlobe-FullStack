import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FullCart from "./FullCart";
import EmptyCart from "./EmptyCart";
export const ShowCart = () => {
  const selector = useSelector((store) => store.cart.cartItems);
  console.log("S", selector);
  return <div>{selector.length == 0 ? <EmptyCart /> : <FullCart />}</div>;
};

export default ShowCart;
