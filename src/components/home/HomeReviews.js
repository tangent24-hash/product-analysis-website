import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../hooks/useReviews";
import ReviewCard from "../ReviewCard";

const HomeReviews = () => {
  const [reviews, setReviews] = useReviews();
  const navigate = useNavigate()

  return (
    <div className="container-fluid text-center">
      <div className="h3 p-4">Customer Reviews({reviews.length})</div>
      <div className="row row-cols-3 g-4 ">
        {reviews
          ? reviews.slice(0, 3).map((review) => {
              return (
                <div className="col-12 col-md-4" key={review.id}>
                  <ReviewCard review={review}></ReviewCard>
                </div>
              );
            })
          : ""}
      </div>
      <button type="button" className="btn btn-outline-info m-3" onClick={() => navigate(`/reviews`)}>See all reviews</button>
    </div>
  );
};

export default HomeReviews;
