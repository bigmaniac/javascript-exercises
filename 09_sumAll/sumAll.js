const sumAll = function(a, b) {
    const arrayToSum = Array.from([a, b]).sort();
    
    if (arrayToSum.some(item => item < 0)) {
      return 'ERROR';
    }
    
    if (arrayToSum.some(item => typeof item === "number" && !Number.isInteger(item))) {
      return 'ERROR';
    }
    
    if (arrayToSum.some(item => typeof item === "string" || Array.isArray(item))) {
      return 'ERROR';
    }
    
    const result = function(sumValuesInArrayRange) {
      let sumRange = 0;
      for (let i = sumValuesInArrayRange[0]; i <= sumValuesInArrayRange[1]; i++) {
        sumRange += i;
      }
      return sumRange;
    }
    return result(arrayToSum);
  };

// Do not edit below this line
module.exports = sumAll;
