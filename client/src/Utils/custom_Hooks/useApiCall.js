import { useState, useEffect } from "react";
import { updateProducts } from "../../components/Redux/productDataSlice";
import { useDispatch } from "react-redux";
function useApiCall() {
  const dispatch = useDispatch();
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    getData();
  }, [])
  async function getData() {
    try {
      const data = await fetch("/api/getAllProducts");
      const responce = await data.json();
      setFetchedData(responce);
      dispatch(updateProducts(responce))
    } catch (err) {
    console.log(err)
    }

  }
  return fetchedData;
}
export default useApiCall;



// import { useEffect, useState } from "react";

// function useApiCall() {
//   const [apiData, setapiData] = useState([]);
//   const [loading , setLoading] = useState(true)
//   const [error, seterror] = useState(false);
//   useEffect(() => {
//     getData();
//   }, []);
//   async function getData() {
//     try {
//       const data = await fetch("https://dummyjson.com/products");
//       const responce = await data.json();
//       setapiData(responce);
//       setLoading(false)
//     } catch (err) {
//       seterror(true)
//     }
//   }
//   return {loading , error , apiData}
// }
// export default useApiCall;