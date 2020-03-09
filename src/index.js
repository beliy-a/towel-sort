
module.exports = function towelSort(matrix) {
  if (Array.isArray(matrix).length == 0 || !matrix) return [];

  const result = [];

  matrix.forEach((arr, i) => {
    if (i % 2) {
      arr.reverse();
    }

    result.push(...arr);
  });

  return result;
}
