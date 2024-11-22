import { addProduct } from "../controller/productAdd.controller.js";
import { getAllProducts } from "../controller/productAdd.controller.js";
import { getSingleProduct } from "../controller/productAdd.controller.js";
import { addToCart } from "../controller/cartItem.contoller.js";
import { getCartItem } from "../controller/cartItem.contoller.js"
import { increementCartQuantity } from "../controller/cartItem.contoller.js";
import { decreementCartQuantity } from "../controller/cartItem.contoller.js";
import { deleteProduct } from "../controller/cartItem.contoller.js";
import { verfyingUser } from "../controller/productAdd.controller.js";
import { authencateUser } from "../controller/productAdd.controller.js";
export function routing(app) {
    app.post("/api/addProducts", addProduct);
    app.get("/api/getAllProducts", authencateUser ,getAllProducts);
    app.get("/api/getSingleProducts/:id", getSingleProduct);
    app.post("/api/addToCart", addToCart);
    // cartItem Routings
    app.get("/api/getCartItem", getCartItem);
    app.put("/api/increaseQuantity/:id", increementCartQuantity);
    app.put("/api/deccreaseQuantity/:id", decreementCartQuantity);
    app.delete("/api/deleteProduct/:id", deleteProduct);
    app.post("/api/loginUser", verfyingUser);
}