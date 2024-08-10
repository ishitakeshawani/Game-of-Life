import React from "react";

const Cell = ({isActive,onClick}) => {
  return (
    <div
      className={`${isActive ? "active" : "inactive"} cell`}
      onClick={onClick}
    ></div>
  );
};

export default Cell;
