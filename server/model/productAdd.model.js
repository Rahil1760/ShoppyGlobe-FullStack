import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const newUser = new Schema({
    title: String,
    description: String,
    brand: String,
    images: Array,
    price: Number,
    rating: Number,
    reviews: Array
});

const productModel = mongoose.model("products", newUser);

export default productModel;