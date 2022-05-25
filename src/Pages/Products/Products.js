import React from "react";
import useProducts from "../../Hooks/useProducts";
import Loading from "../Shared/Header/Loading/Loading";
import Product from "./Product";

const Products = () => {
  const [products, isLoading] = useProducts([]);

  return (
    <div className="w-[98%] mx-auto min-h-screen">
      <h3 className="text-3xl font-bold text-secondary text-center font-serif my-3">
        Available Parts
      </h3>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {products
            .slice(0)
            .reverse()
            .map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
        </div>
      )}
    </div>
  );
};

export default Products;
