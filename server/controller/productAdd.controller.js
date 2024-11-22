import productModel from "../model/productAdd.model.js";
import jwt from "jsonwebtoken"
export function addProduct(req, res) {
    const { title, brand, description, rating, price, images, reviews } = req.body;

    const newProduct = new productModel({
        title,
        brand,
        description,
        rating,
        price,
        images,
        reviews
    })
    newProduct.save().then(data => {
        if (!data) {
            res.status(404).send("product not found");
        }
        else {
            res.send(data)
        }
    }).catch(err => {
        re.send(500).send("bad req");
    })
};

export function getAllProducts(req, res ) {
    productModel.find().then(data => {
        if (!data) {
            res.status(404).send("cant find product")
        }
        else {
            res.send(data)
        }
    }).catch(error => {
        res.status(500).res.send(json({ messege: "Bad request" }));
    })
};

export function getSingleProduct(req, res) {
    const id = req.params.id
    productModel.find({ _id: id }).then(data => {
        if (!data) {
            res.status(404).send("Product not found")
        } else {
            res.send(data);
        }
    }).catch(err => {
        res.status(500).send(err || json({ messege: 'bad request' }));
    })
}
export function verfyingUser(req, res) {
    const user = req.body
    const uthorizedPerson = jwt.sign(user, "userKey");
    res.send({ token: uthorizedPerson });

}

export function authencateUser(req, res, next) {
    const authrizartionHeader = req.headers["authorization"];
    const token = authrizartionHeader && authrizartionHeader.split(" ")[1];
    jwt.verify(token, "userKey", (error, user) => {
        if (error) {
           return res.status(403).send("invalid token")
        }
        req.user = user
        next();
        
    })
}