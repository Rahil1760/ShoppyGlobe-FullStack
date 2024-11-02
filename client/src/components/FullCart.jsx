import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export const FullCart = () => {
  const [total, setTotal] = useState(0);
  const selector = useSelector((store) => store.cart.cartItems);
  // getting total of all the product inside cart

  useEffect(() => {
    const totalPrice = selector.reduce((total, obj) => {
      return (total = total + obj.price * obj.qty);
    }, 0);
    setTotal(totalPrice);
  }, [selector]);

  return (
    <div className="h-20 bg-slate-500 flex items-center justify-around mt-5">
      <div>
        <p className="font-bold md:text-xl">
          Total Count : {total.toString().slice(0, 6)} $
        </p>
      </div>
      <div>
        <button className="bg-yellow-500 px-7 py-4">Place Order</button>
      </div>
    </div>
  );
};

export default FullCart;
