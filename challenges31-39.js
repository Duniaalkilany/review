//challenges 31-32
//challenge1
//operators(comparesion(==,===,!=,!==,>,>=,<,<=)//logical(&&,||,!))

console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 !== "-10"); // true
console.log(!(-50 > +"-40")); // true
console.log(!(10 < -"-40")); // true
console.log(+"10" === 10); // true
console.log(!20 === false); // true

// //challenge2
// let num1 = 10;
// let num2 = 20;

// console.log(num1 != num2); // true
// console.log(num1 !== num2); // true
// console.log(num1 < num2); // true
// console.log(num2 > num1); // true
// console.log(!num1 === !num2); // true
// console.log(typeof num1 === typeof num2); // true
// console.log(!(num1 >= num2)); // true
// console.log(!(!num1 && !num2)); //true

// //challenge3
// let a = 20;
// let b = 30;
// let c = 10;

// console.log((a < b && a > c) || a === b); // true
// console.log(a < b && a !== c); // true
// console.log(!(a > b) && !(a == b) && !(a === c) && !(a <= c)); // true

// //challenges 33-37

// //challenge 1
// // Test Case 1
// // let num = 9; // "009"

// // Test Case 2
// // let num = 20; // "020"

// // Test Case 3
// // let num = 110; // "110"

// // Test Case 4
// let num = 10; // "10"
// //print values as string

// if (num < 10) {
//   console.log("00" + num);
// } else if (num > 10 && num < 100) {
//   console.log(`0${num}`);
//   //   console.log(0 + num.toString());
// } else if (num >= 100) {
//   console.log(`${num}`);
// } else {
//   console.log((10).toString());
// }

// //challenge2
// let num1 = 9;
// let str = "9";
// let str2 = "20";

// // Output
// /*"{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"*/

// if (num1 == str) {
//   console.log("{num1} Is The Same Value As {str}");
// } else if (num1 == str && typeof num1 !== typeof str) {
//   console.log("{num1} Is The Same Value As {str} But Not The Same Type");
// } else if (num1 != str2 || typeof num1 !== typeof str2) {
//   ("{num1} Is Not The Same Value Or The Same Type As {str2}");
// } else if (typeof str === typeof str2 && str != str2) {
//   console.log("{str} Is The Same Type As {str2} But Not The Same Value");
// }

// //challenge3
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// // Needed Output
// /*("30 Is Larger Than 10 And Type string Not The Same Type As number");
// ("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
// ("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");*/
// if (num3 > num1 && typeof num3 !== typeof num2) {
//   console.log(
//     "30 Is Larger Than 10 And Type string Not The Same Type As number"
//   );
// } else if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
//   console.log(
//     "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
//   );
// } else if (num3 !== num1 && typeof num3 !== num2) {
//   console.log(
//     "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
//   );
// }

//challenge4

// Edit What You Want Here

let num1 = 5;
let num2 = 2;
let num3 = +"5";
let num4 = 29;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

//challenge38-39
let day = "   friday  ";

// console.log(
//   day.trim().charAt(0).toUpperCase() + day.trim().slice(1, day.length)
// );
day = day.trim();
day = day[0].toUpperCase() + day.substring(1, day.length);
console.log(day);
// You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  case "World":
    console.log("Its Not A Valid Day");
    break;
}
