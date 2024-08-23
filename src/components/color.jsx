import React from "react";

export const Color = ({ color = "black" }) => {
  return (
    <div
      className="h-5 w-5 drop-shadow-md rounded-md mr-2"
      style={{ backgroundColor: color }}
    ></div>
  );
};
