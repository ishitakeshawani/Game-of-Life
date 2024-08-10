import React, { useState } from "react";
import "./grid.css"

function getArr(size) {
  let createdArray = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => ({ active: false }))
  );
  createdArray[2][2].active = true;
  createdArray[3][3].active = true;
  createdArray[4][1].active = true;
  createdArray[4][2].active = true;
  createdArray[4][3].active = true;
  return createdArray;
}

const Grid = ({size}) => {
    const [arr, setArr] = useState(getArr(size));
  return (
    <div className="container">
      {arr.map((row, rowId) => (
          <div className="row" key={rowId}>
            {row.map((val, colId) => (
              <div
                key={colId}
                className={`${val.active ? "active" : "inactive"} cell`}
               
              ></div>
            ))}
          </div>
        ))}
    </div>
  )
}

export default Grid
