import React, { useState } from "react";
import "./grid.css";
import Cell from "../cell/Cell";
import { getArr } from "../../utility";


const Grid = ({ size }) => {
  const [arr, setArr] = useState(getArr(size));
  const [started, setStarted] = useState(false);
  const handleClick = (row, col) => {
    let newArr = arr.map((rowArr, rIndex) =>
      rIndex === row
        ? rowArr.map((item, cIndex) =>
            cIndex === col ? { ...item, active: !item.active } : item
          )
        : rowArr
    );
    setArr(newArr);
  };

  const onhandleClickButton = () => {
    setStarted((val) => !val);
    if (!started) {
      hanldeStart();
    } else {
      hanldeStop();
    }
  };

  const hanldeStart = () => {};

  const hanldeStop = () => {};
  return (
    <div className="container">
      <div>
        {arr.map((row, rowId) => (
          <div className="row" key={rowId}>
            {row.map((val, colId) => (
              <Cell
                key={colId}
                isActive={val.active}
                onClick={() => handleClick(rowId, colId)}
              ></Cell>
            ))}
          </div>
        ))}
      </div>
      <button className="button" onClick={() => onhandleClickButton()}>
        {!started ? "start" : "stop"}
      </button>
    </div>
  );
};

export default Grid;
