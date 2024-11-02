import { addProduct } from "../controller/productAdd.controller.js";
import { getAllProducts } from "../controller/productAdd.controller.js";
export function routing(app) {
    app.post("/addProducts", addProduct);
    app.get("/api/getAllProducts", getAllProducts);
}