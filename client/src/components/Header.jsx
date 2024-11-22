import { useEffect, useState } from "react";
import shoppingLogo from "./Images/pngegg.png";
import cartImage from "./Images/Cart.png";
import searchLogo from "./Images/search.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header({ handleClickFilter }) {
  
const counterItem = useSelector((store) => store.cart.counter);
  
  const [inputVal, setinputVal] = useState("");
  const [select, setSelect] = useState([]);

  useEffect(() => {
    fetch("/api/getCartItem", {
      method: "GET"
    })
      .then(data => data.json())
      .then(data => setSelect(data)).catch(error => { 
        console.log(error)
      })
  }, [counterItem]);
  // const select = useSelector((store) => store.cart.cartItems);
  useEffect(() => {
    handleClickFilter(inputVal);
  }, [inputVal]);

  return (
    <div>
      <div className="flex bg-slate-100 h-10 items-center justify-between">
        <div className="md:ml-10 w-1/6">
          <Link to={"/ProductList"}>
            <img src={shoppingLogo} className="md:w-20 w-full" />
          </Link>
        </div>
        <div className="w-1/2 ">
          <input
            type="text"
            placeholder="Search.."
            className="w-full text-center outline-none rounded-xl"
            onChange={(e) => setinputVal(e.target.value)}
          />
        </div>
        <div className="">
          <Link to={"/ProductList/cartItem"}>
            <div className="relative md:mr-10 cursor-pointer mr-4">
              <img src={cartImage} className="w-7 h-7" />
              {select.length ? (
                <div className="h-6 w-6 bg-black rounded-full absolute -top-1 left-5 flex justify-center items-center">
                  <p className="text-white text-center text-xs font-bold">
                    {select.length}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
