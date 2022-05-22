import React from "react";
import useProducts from "../../../Hooks/useProducts";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useProducts([]);

  return (
    <div className="w-[98%] mx-auto">
      <h3 className="text-3xl font-bold text-secondary text-center font-serif my-3">
        Available Parts
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
