import mongoose from "mongoose";

const { Schema } = mongoose;


const cartItem = new Schema({
    title: String,
    description: String,
    brand: String,
    images: Array,
    price: Number,
    rating: Number,
    reviews: Array,
    qty : Number
});

const cartModel = mongoose.model("cartItem", cartItem);

export default cartModel;