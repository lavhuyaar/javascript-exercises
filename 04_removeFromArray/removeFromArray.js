const removeFromArray = function (arr, ...Nums) {
  let args = Array.from(arr);
  let removedArr = [];
  for (Num of Nums) {
    for (let i = 0; i < arr.length; i++) {
      if (args[i] === Num) {
        removedArr.push(Num);
      }
      let index = args.indexOf(Num);
      if (index > -1) {
        args.splice(index, 1);
      }
    }
  }
  return args;
};

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 2, 3], 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
