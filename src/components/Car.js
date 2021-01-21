import React from "react";

const Car = ({ bgColor }) => {
  const carStyle = {
    backgroundColor: bgColor,
    width: "12px",
    height: "12px",
  };

  return <div style={carStyle}></div>;
};

export default Car;
