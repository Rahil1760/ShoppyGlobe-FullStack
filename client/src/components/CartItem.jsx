import { useState } from "react";
import { showCartItemCounter, cartItemWithQuantityCounter } from "./Redux/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ singelSelect, deleteItem, setDeleteItem }) {

  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(singelSelect.qty);
  const handleIncrement = (itemId) => {
    dispatch(cartItemWithQuantityCounter());
    fetch(`/api/increaseQuantity/${itemId}`, {
      method: "PUT"
    })
      .then(data => data.json())
      .then(data => data).catch(error => {

      })
    setquantity(quantity + 1)
  };
  const handleDeccreement = (itemId) => {
    if (quantity === 1) {
      return
    } else {
      setquantity(quantity - 1)
      dispatch(cartItemWithQuantityCounter());
      fetch(`/api/deccreaseQuantity/${itemId}`, {
        method: "PUT"
      })
        .then(data => data.json())
        .then(data => data).catch(error => {

        })
    }



  };
  function handleRemoveItem(itemId) {
    dispatch(showCartItemCounter());
    dispatch(cartItemWithQuantityCounter());
    fetch(`/api/deleteProduct/${itemId}`, {
      method: "DELETE"
    })
      .then(data => data.json())
      .then(data => data).catch(error => {

      })
    setDeleteItem(!deleteItem)
  }

  let image = singelSelect.images[2];

  return (
    <div className="">
      <div className="flex w-full h-1/2 justify-around bg-slate-100">
        <div className="h-full md:w-1/6 w-1/2 bg-slate-100">
          <img src={singelSelect.images[2] ? image : singelSelect.images[0]} />
        </div>
        <div className="text-slate-700 md:w-[35%] flex flex-col bg-slate-200 overflow-hidden basis-64 md:basis-64">
          <h2 className="font-bold text-md md:text-2xl">
            {singelSelect.title}
          </h2>
          <h3 className="">
            Brand
            <span className="font-bold text-md ml-1">{singelSelect.brand}</span>
          </h3>
          <p>{singelSelect.description.slice(0, 20)}...</p>
          <p className="line-through font-bold text-slate-500 md:text-2xl text-xl">
            Price {Math.floor(singelSelect.price + 10)} $
          </p>
          <p className="font-bold md:text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-xl">
            Price {singelSelect.price} $
          </p>

          <p>{singelSelect.rating < 4 ? "⭐⭐⭐" : "⭐⭐⭐⭐"}</p>
          <div className="flex md:mt-3 mt-2">
            <div className="flex justify-center items-center">
              <button
                className="h-6 w-6 rounded-md font-bold bg-slate-400 flex justify-center items-center mb-2"
                onClick={() => handleIncrement(singelSelect._id)}
              >
                +
              </button>
            </div>
            <div>
              <input readOnly value={quantity} className="w-4 text-center" />
            </div>
            <div className="flex bg-slate-400 rounded-md h-6 w-6 justify-center">
              <button
                className=" rounded-md font-bold h-1/2 w-1/2"
                onClick={() => handleDeccreement(singelSelect._id)}
              >
                -
              </button>
            </div>
            <div className="ml-5">
              <button
                onClick={() => handleRemoveItem(singelSelect._id)}
                className="bg-red-600 text-white px-1 rounded-md mb-2"
              >
                Remove Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
