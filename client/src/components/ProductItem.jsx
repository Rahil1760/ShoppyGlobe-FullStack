import { LazyLoadImage } from "react-lazy-load-image-component";
import { addToCart } from "./Redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductItem({ single }) {
  const [add2cart, setAdd2Cart] = useState("Add to Cart");
  let length = single.images[2];
  const dispatch = useDispatch();
  const select = useSelector((store) => store.cart.isInCart);
  useEffect(() => {
    select ? alert("In the Cart") : "";
  }, [select]);
  function handleAddtoCart(product) {
    if (add2cart == "added") {
      return 0;
    } else if (add2cart == "Add to Cart") {
      dispatch(addToCart({ ...product, qty: 1 }));
      setAdd2Cart("Added");
    }
  }
  return (
    <div className="w-[47%] h-[400px] md:w-1/5 bg-slate-100 mt-10 rounded-md pb-4">
      <div className="h-1/2 w-full bg-slate-100">
        <Link to={`ProductItem/${single?.id}`}>
          <LazyLoadImage src={length ? single.images[2] : single.images[0]} />
        </Link>
      </div>
      <div className="h-1/2 w-full bg-slate-100 flex flex-col justify-end">
        <h4 className="text-slate-700 font-bold">{single?.title}</h4>
        <p className="text-black font-bold">Price{single?.price}$</p>
        <p className="line-through font-bold text-slate-700">
          Price {Math.floor(single.price + 10)} $
        </p>
        <div>
          <input
            className="bg-yellow-600 px-4 rounded-md mt-2 cursor-pointer "
            onClick={(e) => handleAddtoCart(single)}
            value={add2cart}
            type="button"
          />
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
