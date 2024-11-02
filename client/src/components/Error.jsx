import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="w-1/2 h-auto m-auto mt-5">
      <Link to={"/ProductList"}>
        <img src="../../public/9214769.jpg" className=" rounded-xl" />
      </Link>
    </div>
  );
}

export default Error;
