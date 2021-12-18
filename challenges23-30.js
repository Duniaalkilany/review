////challenges 23-26
//challenge1
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(1000_00); // 100000
console.log(+"100000"); // 100000
console.log(Number("100000")); // 100000
console.log(parseInt("100000")); // 100000
console.log(parseInt("100000dunia")); // 100000
console.log(parseFloat("100000")); // 100000
console.log(Math.floor(100000.99)); // 100000
console.log(Math.round(99999.5)); // 100000
console.log(Math.ceil(99999.2)); // 10000
console.log(Math.pow(10, 5));
console.log(10 ** 5);
console.log(Math.trunc(100000.452));

//challenge2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
//challenge3
console.log(Number.MAX_SAFE_INTEGER); // 16

//challenge4

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57
console.log(Number(parseFloat(myVar).toFixed(2)));

//challenge5

let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num));
console.log(true + Number.isInteger(num)); // 2

//challenge6
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Number(flt.toFixed())); // 10
console.log(parseInt(flt)); // 10

//challenge7
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

//challenges 27-30
//challenge1
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.split("l", 1).toString().toLowerCase()); //e
console.log(userName.slice(0, -5).toLowerCase().repeat(3)); // eee

//challenge2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
