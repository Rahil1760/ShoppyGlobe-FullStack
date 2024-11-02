import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateProducts } from "./Redux/productDataSlice";
import useApiCall from "../Utils/custom_Hooks/useApiCall";

function Home() {
  const dispatch = useDispatch();
  const data = useApiCall();
  // handleSetData function setting the data to redux in productDataSlice
  console.log(data);
  const handleSetData = () => {
    dispatch(updateProducts(data));
  };
  return (
    <div className="md:flex pt-5 bg-gradient-to-r from-slate-500 to-slate-800 md:h-lvh h-auto">
      <div className="space-y-20 flex flex-col justify-around">
        <h1 className="text-center md:text-4xl text-3xl order-0">
          Welcome to ShoppyGlobe
        </h1>
        <p className="text-center md:text-3xl text-xl mt-10 italic">
          Enjoy a seamless shopping experience, fast delivery, and top-notch
          customer support. Happy shopping!
        </p>
        <div className="flex justify-center mt-10">
          <Link to={"/ProductList"}>
            <button
              className="bg-green-700 p-4 animate-bounce shadow-xl shadow-green-900 order-3"
              onClick={handleSetData}
            >
              Browse Products
            </button>
          </Link>
        </div>
      </div>
      <div className=" w-[60%] m-auto">
        <img src="../../public/ShoppigGirl.png" className="h-full" />
      </div>
    </div>
  );
}
export default Home;
