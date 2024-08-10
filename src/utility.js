export function getArr(size) {
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