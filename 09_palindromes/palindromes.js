const palindromes = function (str) {
    let alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
    let filteredStr = str.toLowerCase().split("").filter((char) => alphanumerical.includes(char)).join("");
    let reversedStr = filteredStr.split("").reverse().join("");

    if(filteredStr === reversedStr)  {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
