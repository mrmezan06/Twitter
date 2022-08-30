import React from "react";
import "./TrendCard.css";

import { TrendsData } from "../../Data/TrendsData";

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends for you</h3>
      {TrendsData.map((trend) => {
        return (
          <div className="trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}M shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
