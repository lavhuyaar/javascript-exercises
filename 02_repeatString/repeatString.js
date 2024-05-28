function repeatString(str, num) {
    if (num < 0) return "ERROR";
    let string = "";
    for (i = 0; i < num; i++) {
        string += str; 
    }
    return string;
}

repeatString("hello", 10);

// Do not edit below this line
module.exports = repeatString;


