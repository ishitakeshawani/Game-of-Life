import React, { useEffect, useState, useRef } from "react";
import "./grid.css";
import Cell from "../cell/Cell";
import { getArr, getNeighbours } from "../../utility";


const Grid = ({ size }) => {
  const [arr, setArr] = useState(getArr(size));
  const [started, setStarted] = useState(false);
  const [intervalTime,setIntervalTime] = useState(200)
  const intervalRef = useRef(null);

  const handleClick = (row, col) => {
    setArr(arr => arr.map((rowArr, rIndex) =>
      rIndex === row
        ? rowArr.map((item, cIndex) =>
            cIndex === col ? { ...item, active: !item.active } : item
          )
        : rowArr
    ))
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
    if(!intervalRef.current){
      intervalRef.current = setInterval(() => {
        setArr((prev) => upgradeState(prev))
    }, intervalTime);
  }
  };

  const hanldeStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleReset = () => {
    setArr(getArr(size))
  }

  const hanldeRandomStart = () => {
    for (let i = 0; i < size; i++) {
      let r = Math.floor(Math.random() * size-1);
      let c = Math.floor(Math.random() * size-1);
      handleClick(r, c);
    }
    setStarted((val) => !val);
    hanldeStart();
  };

  useEffect(() => {
    return () => hanldeStop();
  }, []);


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
      <footer className="footer">
        <button className="button" onClick={() => onhandleClickButton()}>
          {!started ? "start" : "stop"}
        </button>
        <button className="button" onClick={() => handleReset()}>
          reset
        </button>
        <button className="button button-large" onClick={() => hanldeRandomStart()}>
          random start
        </button>
      </footer>
    </div>
  );
};

export default Grid;
