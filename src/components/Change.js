import React from "react";

const Change = ({ change, timeframe }) => {
  return (
    <div className="font-bold">
      <div className="text-primary" style={{ fontSize: "2rem" }}>
        {change}%
      </div>
      <div style={{ color: "#6F7178" }}>{timeframe}</div>
    </div>
  );
};

export default Change;
