import CartItem from "./CartItem";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function Cart() {
  const [fetchedData, setFetchedData] = useState([]);
  const [deleteItem, setDeleteItem] = useState(true);

  async function gettingCartItem() {
    fetch("/api/getCartItem", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setFetchedData(data))
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    gettingCartItem();
  }, [deleteItem]);

  return (
    <div>
      <div className="flex flex-col gap-2">
        {fetchedData?.map((item) => {
          return (
            <CartItem
              singelSelect={item}
              key={item.id}
              deleteItem={deleteItem}
              setDeleteItem={setDeleteItem}
            />
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}
export default Cart;
