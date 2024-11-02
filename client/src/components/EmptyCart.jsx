import { Link } from "react-router-dom";

function EmptyCart() {
  console.log("");
  return (
    <div className="flex justify-center items-center flex-col h-lvh">
      <div className="md:w-[35%] ">
        <img
          src="../../public/Empty_Cart.png"
          className="flex justify-center"
        />
      </div>
      <div className="mt-3">
        <p>Your Cart Is Empty</p>
      </div>
      <Link to={"/ProductList"}>
        <button className="mt-5 bg-yellow-500 md:px-40 px-10 md:py-1 py-2 rounded-md md:text-2xl text-xl">
          Browse Products
        </button>
      </Link>
    </div>
  );
}
export default EmptyCart;
