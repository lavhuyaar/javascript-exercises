const reverseString = function(str) {
    let splitStr = str.split("");
    let reverseArr = splitStr.reverse();
    let joinArr = reverseArr.join("");
    return joinArr;
};

reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');
reverseString('');

// Do not edit below this line
module.exports = reverseString;
