import { useEffect, useState } from "react";
import shoppingLogo from "./Images/pngegg.png";
import cartImage from "./Images/Cart.png";
import searchLogo from "./Images/search.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header({ handleClickFilter }) {
  const [inputVal, setinputVal] = useState("");
  const select = useSelector((store) => store.cart.cartItems);
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
        <div className="w-1/2 relative ">
          <input
            type="text"
            placeholder="Search"
            className="w-full text-center outline-none "
            onChange={(e) => setinputVal(e.target.value)}
          />
          <div className="absolute left-full -top-0 mr-4 ">
            <button
              className="bg-blue-300 w-8 rounded-r-xl flex justify-center items-center"
              // onClick={() => handleClickFilter(inputVal)}
            >
              <img src={searchLogo} className="w-6 h-6" />
            </button>
          </div>
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
