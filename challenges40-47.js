//challenges 40-47

//challenge 1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

console.log(
  myFriends.slice(myFriends.indexOf("Ahmed"), myFriends.indexOf("Gamal"))
);
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num));

//one of this methods:// Method 2
// console.log(myFriends.slice(--myFriends.length - num, num)); // ["Ahmed", "Elham", "Osama"];

// myFriends.pop();
// console.log(myFriends);

myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//challenge 2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]

//challenge 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//challenge 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words[words.length - words.indexOf("Facebook")][0]
    .slice(words[words.length - words.indexOf("Facebook")][0].indexOf("z"))
    .toUpperCase()
); // ZERO

//challenge 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes(needle)) {
  console.log("Found");
} else {
  console.log("not found");
}

if (haystack.indexOf(needle) >= 0) {
  console.log("Found");
} else {
  console.log("not found");
}

if (haystack.lastIndexOf(needle) >= 0) {
  console.log("Found");
} else {
  console.log("not found");
}
let count = 0;
for (let index = 0; index < haystack.length; index++) {
  console.log(haystack);
  let wanted = haystack.shift(); //start from index 0
  console.log(wanted);
  if (wanted === needle) {
    console.log("found");
    count++;
  }
}
console.log(count);

//challenge 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr1.concat(arr2).sort();
allArrs = allArrs
  .join("")
  .slice(allArrs.length - arr1.length)
  .toLowerCase(); //ACDEFXY

console.log(allArrs); // fxy
//
allArrs = arr1.concat(arr2).sort();
allArrs = allArrs.join("").slice(allArrs.indexOf("F")).toLowerCase(); //ACDEFXY

console.log(allArrs);
