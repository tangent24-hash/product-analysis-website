import React from "react";
import useReviews from "./hooks/useReviews";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="container-fluid text-center pt-5 pb-5">
      <div className="h3 p-4">Customer Reviews({reviews.length})</div>
      <div className="row row-cols-3 g-4 ">
        {reviews
          ? reviews.map((review) => {
              return (
                <div className="col" key={review.id}>
                  <ReviewCard review={review}></ReviewCard>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Reviews;
