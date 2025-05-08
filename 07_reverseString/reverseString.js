const reverseString = function(string) {
    const split = string.split("");
    const reversed = split.reverse();
    const joined = reversed.join("")
    return joined;
};

// Do not edit below this line
module.exports = reverseString;

/* TO LEARN - arrow functions

const reverseString = (string) => string.split("").reverse().join("");

*/