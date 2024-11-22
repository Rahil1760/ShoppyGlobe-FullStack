import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cartItemCounter } from "./Redux/cartSlice";
import { useDispatch } from "react-redux";

function ProductItem({ single }) {
  const [add2cart, setAdd2Cart] = useState("Add to Cart");
  const dispatch = useDispatch();
  let length = single.images[2];
 
  function handleAddtoCart() {
    if (add2cart == "added") {
      return 0;
    } else if (add2cart == "Add to Cart") {
      fetch('/api/addToCart', {
    method: 'POST',
    headers: {
          'Content-Type': 'application/json'
    },
  body: JSON.stringify({
    "title": single.title,
    "description": single.description,
    "brand" : single.brand,
    "rating" : single.rating,
    "price" : single.price,
    "images" : single.images,
    "reviews": single.reviews,
    "qty" : 1   
  })
})
      setAdd2Cart("Added");
       dispatch(cartItemCounter());
    }
  }
  return (
    <div className="w-[47%] h-[400px] md:w-1/5 bg-slate-100 mt-10 rounded-md pb-4">
      <div className="h-1/2 w-full bg-slate-100">
        <Link to={`ProductItem/${single._id}`}>
        
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
            className="bg-purple-600 px-4 rounded-md mt-2 cursor-pointer "
            onClick={handleAddtoCart}
            value={add2cart}
            type="button"
          />
        </div>
      </div>
    </div>
  );
}
export default ProductItem;