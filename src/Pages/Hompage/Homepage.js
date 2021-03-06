import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import HomepageBanner from "./HomepageBanner";
import Product from "../Products/Product";
import Reason from "./Reason/Reason";
import Reviews from "../Reviews/Reviews";
import Specality from "../Speciality/Specality";
import Offer from "../Offer/Offer";
import Loading from "../Shared/Header/Loading/Loading";

const Homepage = () => {
  const [products, isLoading] = useProducts([]);
  return (
    <div>
      <HomepageBanner></HomepageBanner>
      <div>
        <div>
          <Specality></Specality>
        </div>
        <h3
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="text-3xl font-bold text-secondary text-center font-serif my-10"
        >
          Parts Available
        </h3>
        <div className="w-[98%] mx-auto">
          {isLoading ? (
            <Loading></Loading>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {products
                .slice(0)
                .reverse()
                .slice(0, 6)
                .map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
            </div>
          )}
        </div>

        <div className="mx-auto text-right block">
          <Link
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            to="/products"
            style={{ textDecoration: "none" }}
            className="btn my-5  mr-auto text-2xl btn-active btn-link"
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
        <Offer></Offer>
      </div>
      <div>
        <h3
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="text-3xl font-bold text-secondary text-center font-serif my-3"
        >
          Why Us ?
        </h3>
        <Reason></Reason>
      </div>
      <div>
        <h3
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="text-3xl font-bold text-secondary text-center font-serif my-12"
        >
          What our Clients Say
        </h3>
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Homepage;
