import FullCart from "./FullCart";
import EmptyCart from "./EmptyCart";
import {useSelector} from "react-redux";
import {useState, useEffect} from "react";
export const ShowCart = () => {
    const [selector, setSelector] = useState([]);
    const cartitemAndQuantityCounter = useSelector((store) => store.cart.carItemAndQuantity);
    async function gettingCartItem() {
        fetch("/api/getCartItem", {
            method: "GET",
        })
        .then((data) => data.json())
        .then((data) => setSelector(data))
        .catch((error) => {});
    }
    useEffect(() => {
        gettingCartItem();
    }, [cartitemAndQuantityCounter]);
    return (
        <div>
            {selector.length == 0 && <EmptyCart />}
            <div> {selector.length !== 0 && <FullCart selector={selector} />} </div>
        </div>
    );
};

export default ShowCart;
