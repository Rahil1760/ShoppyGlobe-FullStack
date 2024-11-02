import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Outlet } from "react-router-dom";
function Cart() {
  const selector = useSelector((store) => store.cart.cartItems);
  return (
    <div>
      <div className="flex flex-col gap-2">
        {selector.map((item) => {
          return <CartItem singelSelect={item} key={item.id} />;
        })}
      </div>
      <Outlet />
    </div>
  );
}
export default Cart;
