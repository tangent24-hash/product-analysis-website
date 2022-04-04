import React from "react";
import HomeReviews from "./HomeReviews";
import TopSection from "./TopSection";

const Home = () => {
  return (
    <div className="container-fluid">
      <TopSection></TopSection>
      <HomeReviews></HomeReviews>
    </div>
  );
};

export default Home;
