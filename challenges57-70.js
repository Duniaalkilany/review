//challenges 57-63
//challenge 1
function sayHello(theName, theGender) {
  if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === undefined) {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//challenge 2

// function calculate(firstNum, secondNum, operation = "add") {
//   if (secondNum === undefined) {
//     console.log("secondNum undefined , please pass it ");
//   } else {
//     if (operation === "subtract") {
//       console.log(firstNum - secondNum);
//     } else if (operation === "multiply") {
//       console.log(firstNum * secondNum);
//     } else {
//       console.log(firstNum + secondNum);
//     }
//   }
// }

function calculate(firstNum, secondNum, operation = "add") {
  let result;
  secondNum === undefined
    ? console.log("secondNum undefined , please pass it ")
    : (result =
        operation === "subtract"
          ? firstNum - secondNum
          : operation === "multiply"
          ? firstNum * secondNum
          : firstNum + secondNum);
  console.log(result);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

//challenge 3
function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
  } else {
    console.log(`The Age in months:${theAge * 12}`);
    console.log(`The Age in weeks:${theAge * 52}`);
    console.log(`The Age in days:${theAge * 365}`);
    console.log(`The Age in hours:${theAge * 8765.8}`);
    console.log(`The Age in seconds:${theAge * 31536000}`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//challenge 4
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value=${i}>${i}</option>`);
  }

  document.write(`</select>`);
}
createSelectBox(2000, 2021);

//challenge 5
//floar===>integer(trunc)
//or parseInt===>string===>int//float===>integer//i can use it with number (float==>integer)
function multi(...nums) {
  let res = 1;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "string") continue;
    res *= Math.trunc(nums[i]);
    // res *= parseInt(nums[i]);
  }
  console.log("hello from multi function ", res);
}
multi(10, 20); // 200
multi("A", 10, 30); // 300
multi(100.5, 10, "B"); // 1000

//challenge 64-70
//challenge 1

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
    return (
      zName.slice(0, zName.indexOf(" ") + 1) +
      zName.charAt(zName.indexOf(" ") + 1).toUpperCase() +
      "."
    );
  }

  function ageWithMessage(zAge) {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32

    return `Your Age Is ${parseInt(zAge)}`;
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY

    return zCountry.substring(0, 2);
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )} ,${countryTwoLetters(zCountry)}`;
  }
  return fullDetails();
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

//challenge 2

//regular===>arrow
// function itsMe() {
//   return `Iam A Normal Function`;
// }

let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//challenge 3//
// function checker(zName) {
//     return function (status) {
//       return function (salary) {
//         return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//       };
//     };
//   }

//   console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
//   console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//challenge 4
function specialMix(...data) {
  let sumRes = 0;
  for (let i = 0; i < data.length; i++) {
    if (Number.isNaN(parseInt(data[i]))) continue;
    sumRes += parseInt(data[i]);
  }
  if (sumRes === 0) {
    return `all strings`;
  } else {
    return sumRes;
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("0Test", "Cool", "Test")); // All Is Strings
// console.log(parseInt("Testing"));
