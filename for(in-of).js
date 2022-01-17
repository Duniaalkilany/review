//different between for in /for of
/*
"index in, object of"

for...in Loop => iterates over the index in the array.

for...of Loop => iterates over the object of objects.
-both iterate through a list 
-for.. in ===>// iterates over all enumerable property keys of an object //return the keys(index) of the objects  you iterate 
-for..of(ES6) ====>return the values of the object/list iterate //iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.
*/
//if number not devided by 2 print it/once using for in /once for of
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//using for in ===> iterate through enumerable property keys of an object //index in array

for (let i in digits) {
  if (digits[i] % 2 === 0) continue;
  console.log(digits[i]);
}
//for if iterates through the values of iterable object
for (value of digits) {
  if (value % 2 === 0) continue;
  console.log(value);
}

//And you don’t have to worry about adding new properties to objects.
//The for...of loop will only loop over the values in the object.
var arr = [3, 5, 7];
arr.foo = "hello";
//iterate over

for (i in arr) {
  console.log(i); //0,1,2,foo
  console.log(arr[i]); //3, 5, 7,"hello"
}

for (value of arr) {
  console.log("value", value); //3, 5, 7,"hello"
}

let arr2 = ["el1", "el2", "el3"];

arr2.addedProp = "arrProp";

// elKey are the property keys
for (let elKey in arr2) {
  console.log(elKey); //0,1,2,addedProp
  console.log(arr2[elKey]);
}

// elValue are the property values
for (let elValue of arr2) {
  console.log(elValue); //"el1", "el2", "el3"
}
