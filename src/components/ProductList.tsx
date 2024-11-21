import { getProductsData } from "@/lib/getData";
import React from "react";
import { ProductData } from "../../type";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const products: ProductData[] = await getProductsData();
  console.log(products); // Check the console to see if titles are present
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {products?.map((item) => <ProductCard key={item._id} item={item} />)}
    </div>
  );
};

export default ProductList;
