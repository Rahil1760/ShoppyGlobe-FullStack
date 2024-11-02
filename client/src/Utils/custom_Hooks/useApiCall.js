import { useState, useEffect } from "react";

function useApiCall() {
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    getData();
  },[])
  async function getData() {
    try {
      
      const data = await fetch("http://localhost:3000/api/getAllProducts");
      //const data = await fetch('https://dummyjson.com/products');
      console.log("Data", data);
      const responce = await data.json();
      setFetchedData(responce)
      //setFetchedData(responce.products)
    } catch (err) {
      console.log("err",err)
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