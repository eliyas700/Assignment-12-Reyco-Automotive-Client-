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
      <div class="card card-side   bg-base-100 shadow-xl">
        <figure className="w-48 h-60">
          <img src={img} alt={name} />
        </figure>
        <div class="card-body p-2">
          <h2 class="card-title  text-xl">{name}</h2>
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
          <div class="card-actions justify-end">
            <button
              onClick={() => handlePurchase(_id)}
              class="btn btn-primary  btn-sm"
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
