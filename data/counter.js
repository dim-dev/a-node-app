let count = 1;
exports.increment = () => {
  count += 1;
};
exports.getCount = () => count;

exports.reset = () => {
  count = 0;
  return count;
};
