import React, { useEffect, useState } from "react";
import Review from "./Review";
import "./Reviews.css";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("Reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 my-12">
      {reviews.slice(0, 3).map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
