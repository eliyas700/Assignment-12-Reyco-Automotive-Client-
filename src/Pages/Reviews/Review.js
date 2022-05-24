import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Review = ({ review }) => {
  const { name, description, rating, img, country } = review;
  return (
    <div>
      <div class="card text-center bg-base-100 shadow-xl">
        <div class="card-body">
          <img
            width={"100px"}
            className="rounded-full  mx-auto"
            src={img}
            alt=""
          />
          <h2 class="text-xl font-bold">{name}</h2>
          <p className="uppercase text-xs">{country}</p>
          <p>
            <Rating
              initialRating={rating}
              emptySymbol={<FontAwesomeIcon icon={faStar} />}
              fullSymbol={
                <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
              }
              readonly
            ></Rating>
          </p>
          <p>{description.slice(0, 120) + "..."}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
