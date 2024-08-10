import React, { useEffect, useState } from "react";
import "./grid.css";
import Cell from "../cell/Cell";
import { getArr, getNeighbours } from "../../utility";


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

  const upgradeState = (currentArr) => {
    let newArr = currentArr.map((rowArr, rowIndex) =>
      rowArr.map((item, colIndex) => {
        const neighbours = getNeighbours(rowIndex, colIndex, size);
        let activeNeighbours = neighbours.filter(
          (n) => currentArr[n.r][n.c].active
        ).length;

        if (item.active && (activeNeighbours < 2 || activeNeighbours >= 4)) {
          return { ...item, active: false };
        } else if (!item.active && activeNeighbours === 3) {
          return { ...item, active: true };
        } else {
          return item;
        }
      })
    );
    return newArr;
  };

  const hanldeStart = () => {
    setArr((prev) => upgradeState(prev))
  };

  const hanldeStop = () => {};
  return (
    <div className="container">
      <div className="grid-container">
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
