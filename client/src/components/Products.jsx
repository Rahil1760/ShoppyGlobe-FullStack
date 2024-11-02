import ProductItem from "./ProductItem";

const Products = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {data?.map((item) => {
        return <ProductItem single={item} key={item.id} />;
      })}
    </div>
  );
};
export default Products;
