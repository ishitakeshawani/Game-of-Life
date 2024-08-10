export const getArr = (size) => {
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


export const getNeighbours = (row, col, size) => {
  const neighbours = [
    { r: row, c: col - 1 },
    { r: row, c: col + 1 },
    { r: row + 1, c: col },
    { r: row - 1, c: col },
    { r: row - 1, c: col - 1 },
    { r: row - 1, c: col + 1 },
    { r: row + 1, c: col - 1 },
    { r: row + 1, c: col + 1 },
  ];
  return neighbours.filter(
    ({ r, c }) => r >= 0 && r < size && c >= 0 && c < size
  );
}