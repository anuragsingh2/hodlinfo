import React from "react";
import Change from "./Change";

const HeroSection = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <div
        className="flex space-x-1 justify-between mx-auto font-bold py-8 content-center"
        style={{ alignItems: "center" }}
      >
        <Change change={0.74} timeframe="5 Mins" />
        <Change change={0.74} timeframe="5 Mins" />
        <div>
          <div>Best Price to Trade</div>
          <div
            style={{
              paddingBottom: "10px",
              fontWeight: "400",
              fontSize: "80px",
              textAlign: "center",
            }}
          >
            &#8377; 25,70,736
          </div>
          <div>Average BTC/INR net price including commission</div>
        </div>
        <Change change={0.74} timeframe="5 Mins" />
        <Change change={0.74} timeframe="5 Mins" />
      </div>
      <a href="https://finstreet.in/" target="_blank">
        <img
          src="HeroImage.png"
          style={{ width: "100%", padding: "0px 0px 20px" }}
        />
      </a>
    </div>
  );
};

export default HeroSection;
