import Header from "./Header";
import Products from "./Products";
import {useEffect, useState} from "react";
function ProductList() {
    const [fetchedData, setFetchedData] = useState([]);
    const accessToken = localStorage.getItem("accessToken");
    async function sendingJWTToken() {
        const responce = fetch("/api/getAllProducts", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `JWT ${accessToken}`,
            },
        });
        responce
        .then((data) => data.json())
        .then((data) => {
            setFetchedData(data);
        });
    }
    useEffect(() => {
        sendingJWTToken();
    }, []);

    const [productData, setProductData] = useState(fetchedData);
    useEffect(() => {
        setProductData(fetchedData);
    }, [fetchedData]);
    const handleClickFilter = (inputVal) => {
        if (inputVal === "") {
            setProductData(fetchedData);
        } else {
            const filterBySearched = productData.filter((item) => {
                return item.title.toUpperCase().includes(inputVal.toUpperCase());
            });
            setProductData(filterBySearched);
        }
    };

    return (
        <div>
            <Header handleClickFilter={handleClickFilter} />
            <Products data={productData} />
        </div>
    );
}
export default ProductList;
