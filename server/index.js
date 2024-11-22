import express from "express";
import mongoose from "mongoose";
import { routing } from "./routes/productAdd.routes.js";
const app = express();
import cors from "cors"
//app.use(cors());
app.use(cors({ origin: 'http://localhost:5173' }));
// app.use(cors({ origin: '*' }));
app.use(express.json());
app.listen(3000, () => {
    console.log("Running on port 3000")
})



mongoose.connect("mongodb://localhost:27017");
const db = mongoose.connection;

db.on("open", () => {
    console.log("connected");
});

//app.use(express.json());

routing(app)

