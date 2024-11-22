import React from "react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Reviews from "./Reviews";
function ProductDetail() {
    const [selected, setSelect] = useState([]);
    const [add2cart, setAdd2Cart] = useState("Add to Cart");
    const params = useParams();
    const id = params.id;
    console.log(id);
    async function getTest() {
        fetch(`/api/getSingleProducts/${id}`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((data) => setSelect(data))
        .catch((error) => console.error("Error:", error));
    }
    useEffect(() => {
        getTest();
    }, []);
    let singleProduct = selected[0];

    let image = selected[0]?.images[2];
    function handleAddtoCart(product) {
        if (add2cart == "Added") {
            alert("Product Added Please check you cart");
        } else if (add2cart == "Add to Cart") {
            setAdd2Cart("Added");
        }
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row md:justify-around justify-center px-4 w-full bg-slate-100 pb-4">
                <div className="md:w-1/4 w-2/3  h-auto m-auto">
                    <img src={image ? selected[0].images[2] : singleProduct?.images[0]} />
                </div>
                <div className="w-1 bg-black mr-5"></div>
                <div className="text-slate-700 md:w-[35%] flex flex-col space-y-4">
                    <h2 className="font-bold text-xl md:text-3xl mt-5">{singleProduct?.title}</h2>
                    <h3 className="">
                        Brand <span className="font-bold">{singleProduct?.brand}</span>
                    </h3>
                    <p className="pt-2 pb-2">{singleProduct?.description}</p>
                    <p className="line-through font-bold text-slate-500 text-3xl">
                        Price {Math.floor(singleProduct?.price + 10)} $
                    </p>
                    <p className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
                        Price {singleProduct?.price} $
                    </p>
                    <p className="md:pt-2 md:pb-2">{singleProduct?.availabilityStatus}</p>
                    <p className="pt-2 pb-2">{singleProduct?.rating < 4 ? "⭐⭐⭐" : "⭐⭐⭐⭐"}</p>

                    <input
                        className="bg-yellow-600 px-4 rounded-md mt-2 cursor-pointer "
                        onClick={(e) => handleAddtoCart(singleProduct)}
                        value={add2cart}
                        type="button"
                    />
                </div>
            </div>
            <div className="w-full">
                <h5 className="text-center mt-2">Reviews !!</h5>
                {singleProduct?.reviews.map((item, index) => {
                    {
                        console.log(item);
                    }
                    return <Reviews item={item} key={index} />;
                })}
            </div>
        </div>
    );
}

export default ProductDetail;
