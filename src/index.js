
// You should implement your task here.

module.exports = function towelSort(matrix) {
  const result = [];
  if (!matrix) { return [] }
  matrix.forEach((el, i) => {
    if (i % 2 == 0) {
      result.push(...el);
    } else {
      result.push(...(el.reverse()));
    }
  })
  return result;
}
