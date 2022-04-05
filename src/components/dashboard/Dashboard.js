import React, { useEffect, useState } from "react";
import InvestmentVsRevenue from "./InvestmentVsRevenue";
import MonthlySell from "./MonthlySell";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, []);

  return (
    <div className="container-fluid pt-5 pb-5 d-flex flex-column flex-md-row justify-content-evenly">
      <div>
        <div className="h4 p-2 text-primary">Month Wise Sell</div>
        <MonthlySell data={data}></MonthlySell>
      </div>
      <div>
        <div className="h4 p-2 text-primary">Investment Vs Revenue</div>
        <InvestmentVsRevenue data={data}></InvestmentVsRevenue>
      </div>
    </div>
  );
};

export default Dashboard;
