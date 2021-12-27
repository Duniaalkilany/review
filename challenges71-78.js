/*==================================challenges 71-78========================================*/

//challenge 71
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

let out = mix
  .map((ele, idx, arr) => {
    if (typeof ele === "number") {
      return "";
    } else {
      return ele;
    }
  })
  .reduce(function (acc, cur, idx, arr) {
    return acc + cur;
  });
console.log(out);

//challenge 2

let test = ["a", "a", "b", "c", "b", "d"];

console.log(test.indexOf("a")); //0
console.log(test.indexOf("b")); //2
console.log(test.indexOf("c")); //3
console.log(test.indexOf("d")); //5
let myString = "EElllzzzzzzzeroEo";

// Elzero
let out2 = myString
  .split("")
  .filter((ele, idx, arr) => {
    return arr.indexOf(ele) === idx;
  })
  .join("");
console.log(out2);

//challenge 3

let myArray = ["E", "l", "z", ["e", "r"], "o"];
let out4 = myArray.reduce(function (acc, cur, idx, arr) {
  if (Array.isArray(cur)) {
    return (
      acc +
      cur.reduce((acc1, cur1) => {
        return acc1 + cur1;
      })
    );
  } else {
    return acc + cur;
  }
});

console.log("out4", out4);
// Elzero

let out3 = myArray.flat().reduce((acc, cur, idx, arr) => {
  return acc + cur;
});

console.log(out3);
let myArray2 = ["E", "l", "z", [["e", "r"]], "o"];
console.log(myArray2.flat(2));

//challenge 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let newarr = numsAndStrings
  .filter((ele) => {
    return typeof ele === "number";
  })
  .map((ele) => {
    return -ele;
  });

console.log(newarr);

//challenge 5
let nums = [2, 12, 11, 5, 10, 1, 99];

let reduceOut = nums.reduce((acc, cur) => {
  return cur % 2 !== 0 ? acc + cur : acc * cur;
}, 1);

console.log(reduceOut);
// 500
