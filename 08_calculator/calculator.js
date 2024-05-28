const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = array.reduce((a, b) => a + b, 0);
  return sum;
};

const multiply = function (array) {
  let result = array.reduce((a, b) => a * b);
  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
