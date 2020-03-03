
module.exports = function towelSort(matrix) {
  if (Array.isArray(matrix).length == 0 || !matrix) return [];

  const result = [];

  matrix.forEach((arr, i) => {
    arr.sort((a, b) => a - b);

    if (i % 2 == 1) {
      arr.reverse();
      result.push(...arr);
    } else {
      result.push(...arr);
    }

  });

  return result;
}
