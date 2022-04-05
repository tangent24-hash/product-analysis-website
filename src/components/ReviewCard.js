import React from "react";

const ReviewCard = ({ review }) => {
  const { name, review_text, rating, avator } = review;
  return (
    <div className="card text-center shadow-lg">
      <div className="card-header">
        <img
          className="rounded img-fluid"
          style={{ width: 45 }}
          src={avator}
          alt={name}
        />{" "}
        {name}
      </div>
      <div className="card-body">
        <p className="card-text">{review_text}</p>
      </div>
      <div className="card-footer text-muted">Rating: {rating}/5</div>
    </div>
  );
};

export default ReviewCard;
