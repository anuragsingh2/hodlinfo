import React from "react";

const AddToHome = () => {
  return (
    <div
      className="flex justify-center"
      style={{
        border: "solid 1px #191d28",
        backgroundColor: "#191d28",

        left: "0",
        alignItems: "center",
        width: "100vw",
        height: "47px",
        bottom: "0",
        zIndex: "8",
      }}
    >
      <button
        className="outline-black"
        style={{ background: "#17A2B8", borderRadius: "0.25rem" }}
      >
        Add hodlinfo to home screen
      </button>
    </div>
  );
};

export default AddToHome;
