import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import HomepageBanner from "./HomepageBanner";
import Product from "../Products/Product";
import Reason from "./Reason/Reason";
import Reviews from "../Reviews/Reviews";

const Homepage = () => {
  const [products, setProducts] = useProducts([]);
  return (
    <div>
      <HomepageBanner></HomepageBanner>
      <div>
        <h3 className="text-3xl font-bold text-secondary text-center font-serif my-10">
          Parts Available
        </h3>
        <div className="w-[98%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {products.slice(0, 6).map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </div>

        <div className="mx-auto text-right block">
          <Link
            to="/products"
            style={{ textDecoration: "none" }}
            class="btn my-5  mr-auto text-2xl btn-active btn-link"
          >
            See More Items
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-secondary text-center font-serif my-3">
          Why Us ?
        </h3>
        <Reason></Reason>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-secondary text-center font-serif my-12">
          What our Clients Say
        </h3>
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Homepage;
