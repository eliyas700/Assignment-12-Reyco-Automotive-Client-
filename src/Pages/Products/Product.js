import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Product.css";
const Product = ({ product }) => {
  const navigate = useNavigate();
  const {
    _id,
    name,
    img,
    price,
    description,
    minOrder,
    available,
    paymennt,
    totalSell,
  } = product;
  const handlePurchase = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="card card-side my-3  bg-base-100 shadow-xl"
      >
        <figure className="w-48 h-60">
          <img src={img} alt={name} />
        </figure>
        <div className="card-body p-2">
          <h2 className="card-title  text-xl">{name}</h2>
          <p title={description} className="text-[14px] text-[#7f8c8d]">
            {description.slice(0, 90) + "..."}
          </p>
          <p className="font-semibold text-2xl">
            <span className="text-secondary ">${price}</span>{" "}
            <span className="text-xs">/ Piece</span>
          </p>
          <div className="text-xs flex justify-between">
            <p>
              Available:{" "}
              <span className="font-semibold text-green-400">{available}</span>
            </p>
            <p>
              Min-Order:{" "}
              <span className="font-semibold text-warning">{minOrder}</span>
            </p>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handlePurchase(_id)}
              className="btn btn-primary  btn-sm"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
