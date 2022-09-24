import React from "react";
import "./TrendCard.css";

import { TrendsData } from "../../Data/TrendsData";

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends for you</h3>
      {TrendsData.map((trend, id) => {
        return (
          <div className="trend" key={id}>
            <span>#{trend.name}</span>
            <span>{trend.shares}M shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
