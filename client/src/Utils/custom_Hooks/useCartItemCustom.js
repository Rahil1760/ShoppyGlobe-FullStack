import React, { useEffect, useState } from 'react'



function useCartItemCustom() {
    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
        gettingCartItem();
    }, []);
  async function gettingCartItem() {
       fetch("/api/getCartItem", {
        method : "GET"
  })
    .then(data => data.json())
    .then(data => setFetchedData(data)).catch(error => {
      console.log(error)
    })
    }
    return fetchedData;
}

export default useCartItemCustom;
