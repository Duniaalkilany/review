/*==========================================video 71======================================*/
/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map//array method 
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}
console.log(newArray);

// let addSelf = myNums.map(function (el, index, arr) {
//   //   console.log(`current el=${el}`);
//   //   console.log(`current index=${index}`);
//   //   console.log(`current arr=${arr}`);
//   //   console.log(`this=>${this}`);
//   return el + el;
// }, 10);

//arrow function
// let addSelf = myNums.map((el) => {
//   //   console.log(`current el=${el}`);
//   //   console.log(`current index=${index}`);
//   //   console.log(`current arr=${arr}`);
//   //   console.log(`this=>${this}`);
//   return el + el;
// }, 10);

let addSelf = myNums.map((el) => el + el);

console.log(addSelf);

function addition(el) {
  return el + el;
}
//using named function
let add = myNums.map(addition);
console.log(add);

//map
/*
1.let newArray=currentArray.map(callbackfunction(),thisArg)
2.callbackfunction//task i want to do on each element of the current array (elofcurrentarray,index,currentArray)//el(mand)//index,arr==>opt)
3.callback function==>1.anonymous function 2.arrow function 3.named function(just the name of the function)
*/
//i want have new array each element+1

//1. using for
let my = [1, 2, 3, 4, 5];
// let my2 = [];

// for (let i = 0; i < my.length; i++) {
//   my2.push(my[i] + 1);
// }
// console.log(my2);

//using map===>map is array method//take function as argument//return new array
//1.anonymous fun as callbackfun//para of map
// let my2 = my.map(function (el) {
//   return el + 1;
// }, 10);
// console.log(my2);

//2.arrow

// let my2 = my.map((el) => {
//   return el + 1;
// }, 10);
// console.log(my2);

//3. named fun

function addOne(el) {
  return el + 1;
}

let my2 = my.map(addOne, 10);
console.log(my2);

/*==========================================video 72======================================*/
/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/
//write function to swap charac from capital to small and vise versa

let word;

function swapfun(word) {
  //check the char's//string===>array===>splice
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      word = word.replace(word[i], word[i].toLowerCase());
    } else {
      word = word.replace(word[i], word[i].toUpperCase());
    }
  }
  return word;
}
console.log(swapfun("DUNia"));

//- split(Separator [Opt], Limit [Opt])//string===>array

// let sentance = "Elzero Web School";

// console.log(sentance.split("")); // ['E', 'l', 'z', 'e', 'r', 'o', ' ', 'W', 'e', 'b', ' ', 'S', 'c', 'h', 'o', 'o', 'l']
// console.log(sentance.split(" ")); //["Elzero","Web","School"]
// console.log(sentance.split("e")); //["Elz","ro W","b School"]
// console.log(sentance.split("l")); //["E",[zero Web Schoo],""]
// console.log(sentance.split("", 5)); //['E', 'l', 'z', 'e', 'r']
// console.log(sentance.split(" ", 2)); //["Elzero","Web"]

//using map

let swappingCases = "elZERo";

// let swp = swappingCases
//   .split("")
//   .map(function (ele, index, array) {
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   }, 0)
//   .join("");
// console.log(swp);

//arrow function

let swp = swappingCases
  .split("")
  .map((ele, index, array) =>
    ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
  )
  .join("");
console.log(swp);

//  - Inverted Numbers (+==>-//-===>+)

let Numbers = [1, -10, -20, 15, 100, -30];

let invited = Numbers.map((ele) => {
  return -ele;
}, 0);

console.log(invited);

//ignore numbers
let ignoreNumbers = "Elz123er4o";
console.log(ignoreNumbers.split(""));
console.log(typeof parseInt("g")); //number//typeofNAN===>is number
console.log(typeof parseInt("4")); //number
let ignore = ignoreNumbers
  .split("")
  .map((ele) => {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");

console.log(ignore);

//using named function with map

function ignoring(ele) {
  if (Number.isNaN(parseInt(ele))) {
    return ele;
  } else {
    return "";
  }
}

let res = ignoreNumbers.split("").map(ignoring, 0).join("");
console.log(res);

/*==========================================video 73======================================*/
/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/
//in map anf filter in the call back function i return something
//in map i do a task on each elwment of the array and retuened new array its (elements edited according to the tasK which did in callback function )
//in filter i shold return (true//false)according to a condition //so ele passed or not (wait to return true or false from the callback funn )

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });//from the function ele+ele mean true so all element passed

// console.log(addFilter);

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let friendsA = friends.filter(function (ele, index, array) {
  return ele.startsWith("A") ? true : false;
}, 0);
console.log(friendsA);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter((ele) => {
  return ele % 2 === 0;
}, 0);
console.log(evenNumbers);

/*==========================================video 74======================================*/
/*
  Filter
  - Filter Longest Word By Number
*/
// Filter Words More Than 4 Characters
//filter is an array method so from string ===>array of words ===>split(" ")

let sentence = "I Love Foood Code Too Playing Much";

let filtring = sentence
  .split(" ")
  .filter((ele) => {
    return ele.length <= 4 ? true : false;
  }, 0)
  .join(" ");
console.log(filtring); //I Love Code Too Much

// Ignore Numbers
let ignoreNumbers2 = "Elz123er4o";
//filter numbers
//i have string
//string===>array

let ignoreNum = ignoreNumbers2
  .split("")
  .filter((ele, index, arr) => {
    return isNaN(parseInt(ele));
  }, 0)
  .join("");
console.log(ignoreNum);

//filter then multiply
let mix = "A13BS2ZX";

//i have string
//i need just a number from it //if number //return true//pass the ele
//them i will have filterd array(array of numbers)
//i want to return new array each element * element

let ress = mix
  .split("")
  .filter((ele) => {
    // return isNaN(parseInt(ele)) ? false : true;
    return !isNaN(parseInt(ele));
  }, 0)
  .map((ele) => {
    return ele * ele;
  })
  .join("");
console.log(ress);
console.log("4" * "2"); //8

/*==========================================video 75======================================*/
/*
  - Reduce//array method
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

let nums = [10, 20, 15, 30];
