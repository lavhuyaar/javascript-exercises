const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
