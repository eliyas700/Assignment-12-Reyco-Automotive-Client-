import React from "react";

const Review = ({ review }) => {
  const { name, description, rating, img } = review;
  return (
    <div>
      <div class="card text-center bg-base-100 shadow-xl">
        <div class="card-body">
          <img width={100} className="rounded-full  mx-auto" src={img} alt="" />
          <h2 class="text-xl font-bold">{name}</h2>
          <p>{rating}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
