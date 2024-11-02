import Header from "./Header";
import Products from "./Products";
import { useEffect, useState } from "react";
import useApiCall from "../Utils/custom_Hooks/useApiCall";
import { useSelector } from "react-redux";
function ProductList() {
  let fetchedData = useApiCall(); // infinite Loop
  // const fetchedData = useSelector((store) => store.productData.item);
  console.log(fetchedData);
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
