const add = function(term1, term2) {
  const sum = term1 + term2;
  return sum;
};

add(0, 0)

const subtract = function(term1, term2) {
  const difference = term1 - term2;
  return difference; 
};

const sum = function(object) {
  let result = object.reduce((sum, current) => sum + current, 0);
  return result;
};

const multiply = function(object) {
  let result = object.reduce((multiply, current) => multiply * current);
  return result;
};

const power = function(base, power) {
  let result = base ** power;
  return result;
};

const factorial = function(n) {
  if (n === 0) {
    return 1
  }
  let arr = Array.from({length: n}, (v, i) => i);
  arr = arr.map(item => item + 1);
  let result = arr.reduce((sum, current) => sum * current);
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
