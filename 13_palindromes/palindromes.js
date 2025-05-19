const palindromes = function(phrase) {
    phrase = phrase.toLowerCase().replace(/\W/g, '');
    phraseReverse = Array.from(phrase).reverse().join("");
    if (phrase === phraseReverse) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
