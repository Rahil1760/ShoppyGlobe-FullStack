import productModel from "../model/productAdd.model.js";

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

export function getAllProducts(req, res) {
    productModel.find().then(data => {
        if (!data) {
            res.status(404).send("cant find product")
        }
        else {
            res.send(data)
        }
    }).catch(error => {
        res.status(500).res.send(error || json({ messege: "Bad request" }));
    })
}