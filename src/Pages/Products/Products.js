import React from "react";
import useProducts from "../../Hooks/useProducts";
import Loading from "../Shared/Header/Loading/Loading";
import Product from "./Product";

const Products = () => {
  const [products, isLoading] = useProducts([]);

  return (
    <div className="w-[98%] mx-auto min-h-screen">
      <h3
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="text-3xl font-bold text-secondary text-center font-serif my-3"
      >
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
