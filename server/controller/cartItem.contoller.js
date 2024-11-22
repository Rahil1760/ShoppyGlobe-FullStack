import cartModel from "../model/cartItem.model.js";


export function addToCart(req, res) {
    const { title } = req.body;
    cartModel.findOne({ title: title }).then(data => {
        if (!data) {
        const { title, brand, description, rating, price, images, reviews , qty} = req.body;
        const newProduct = new cartModel({
        title,
        brand,
        description,
        rating,
        price,
        images,
        reviews,
        qty
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
        } else {
            res.status(203).send(json({messege : "products is added already"}));
        }
    }).catch(er => {
        console.log(er)
    }).catch(err => {
        re.status(500).send(json({ messege: "internal server error" }));
    })
   
};
export function getCartItem(req, res) {
  
    cartModel.find().then((data) => {
        if (data) {
            
            res.send(data)
        } else {
            res.status(404).send(json({ messege: "not found" }))
        }
    }).catch(err => {
        res.status(500).send(err || json({messege : "internal server error"}))
    })
}
export function increementCartQuantity(req, res) {
    const itemId = req.params.id
    cartModel.findOneAndUpdate(
        { _id: itemId },
        { $inc: { qty: 1 } }
    ).then(data => {
        if (!data) {
            res.status(404).send(json({messege : "Product not found"}))
        }
        else {
            res.send(data);
        }
    }).catch(err => {
        res.status(500).send(err || json({ messege: "internal server error" }));
    })
    

}
export function decreementCartQuantity(req, res) {
    const itemId = req.params.id
    cartModel.findOneAndUpdate(
        { _id: itemId },
        { $inc: { qty: -1 } }
    ).then(data => {
        if (!data) {
            res.status(404).send(json({messege : "Product not found"}))
        }
        else {
            res.send(data);
        }
    }).catch(err => {
        res.status(500).send(err || json({ messege: "internal server error" }));
    })
    

}
export function deleteProduct(req, res) {
    const  itemId  = req.params.id;

    cartModel.findOneAndDelete({ _id: itemId }).then(data => {
        if (!data) {
            res.status(404).send(json({ messege: "Product not found" }));
        }
        res.send(data)
    }).catch(err => {
        res.status(500).send(err || json({messege : "internal server error"}))
    })
}
//   const id = req.params.id;
//     user.findOneAndDelete({ _id: id }).then(data => {
//         if (!data) {
//             res.status(404).send("user not Found");
//         } else {
//          res.send(data)
//         }
//     }).catch(error => {
//         res.send("internal server Error");
//     })