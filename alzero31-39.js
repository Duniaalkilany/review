//===============================video 31================================//
/*
assignment operator =
num=num-2
num-=2
+=
-=
...


Comparison Operators//output===>(true,false)
  
  - == Equal(compare only value)
  - != Not Equal(compare only value)

  - === Identical(type and value)
  - !== Not Identical(type and value)

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

console.log(10 == 10); //true
console.log(10 == "10"); //true
console.log(10 != "10"); //false
console.log(-100 == "-100"); //true

console.log(10 === "10"); //false
console.log(10 !== "10"); //true

console.log(10 !== 10); //false

console.log(10 > 20); //false
console.log(10 > 10); //false
console.log(10 >= 10); //or//true

console.log(10 < 20); //true
console.log(10 < 10); //false
console.log(10 <= 10); //or//true

console.log("Osama" === "Ahmed"); //false//use operator to make the answer true ====>typeof
console.log(typeof "Osama" === typeof "Ahmed"); //true

//===============================video 32================================//
/*
Logical Operators//(output===>true,false)
- ! Not
- && And(all true===>true)
- || Or(one true===>true)
*/
// i can use not then number or string to have false value
console.log("hhhhhhhhhhhh", !10); //false
console.log("hhhhhhhhhhhh", !""); //true
console.log("hhhhhhhhhhhh", !0); //true
console.log("hhhhhhhhhhhh", !-100); //false
console.log("hhhhhhhhhhhh", !"dunia"); //false
//if i use ! then falsey value i will have true
console.log(!true); //false
console.log(!false); //true
console.log(!(10 == "10")); //false

console.log(10 == "10" && 10 > 8 && 10 > 50); //true&&true&&false===>false
console.log(10 == "10" || 10 > 8 || 10 > 50); //true||true||false===>true
console.log(10 == "10" || 10 < 8 || 10 > 50); //true||false||false===>true

//===============================video 33================================//
/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";

if (discount === true) {
  price -= discountAmount; //price=price-discount//price-=discount
} else if (country === "Egypt") {
  price -= 40;
} else if (country === "syria") {
  price -= 60;
} else {
  price -= 10;
}
console.log(price);

//===============================video 34================================//

/*
  Nested If
*/

let price1 = 100;
let discount1 = false;
let discountAmount1 = 30;
let country1 = "Egypt";
let student1 = true;

if (discount1 === true) {
  price1 -= discountAmount1;
} else if (country1 === "Egypt") {
  if (student1 === true) {
    price1 -= discountAmount1 + 30; //100-60=40
  } else {
    price1 -= discountAmount1 + 10;
  }
} else {
  price1 -= 10;
}

console.log(price1); //40

//===============================video 35================================//

//   Conditional (Ternary) Operator

let theName = "Mona";
let theGender = "Female";
let theAge = 20;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False
//ternary operator

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

//what do inside the scope remain inside it

// let result;
// if (theGender === "Male") {
//   result = "Mr";
//   console.log(result);
// } else {
//   result = "Ms";
//   console.log(result);
// }

//using ternary to declare variable according to condition .
let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(`Hello ${result}`);

//also i can use ternary to log something according to condition

console.log(theGender === "Male" ? "Mr" : "hello Ms");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

//how to write conditional ternary operator if i have if /else if//(more than one condition )

theAge === 30 //condition 1 // if
  ? console.log("age===30") //true of condition 1
  : theAge >= 20 && theAge < 60 //condition2//else if
  ? console.log("theAge>20&&theAge<60") //true for condition 2
  : theAge > 60 //condition 3//else if
  ? console.log("age>60") //true for condition 3
  : console.log("last else"); //else

//===============================video 36================================//
//Nullish Coalescing Operator And Logical Or

//if the value returned ===>(null,undefinde,falsy value)
//falsey value
/*1.0
2.false
3.""
*/

//using Boolean constructor to know the value is true or false
console.log(Boolean(100)); //true
console.log(Boolean(-100)); //true
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
console.log(Boolean(0)); //false
console.log(Boolean(false)); //false

let priceValue;
let priceValue2 = null;
let priceValue3 = 0;

//if in log each of the previouse variables i will get

console.log(priceValue); //undefined
console.log(priceValue2); //null
console.log(priceValue3); //0//it is false value

//so to avoid having (null , undefined, falsey value("",0,false) )use or operatot (||)===>(logical Or)

console.log(priceValue || 200); //200
console.log(priceValue2 || 200); //200
console.log(priceValue3 || 200); //200

//to avoid (null,undefined) results using  Nullish Coalescing Operator (??)
console.log(priceValue ?? 100); //100 instead of undefined
console.log(priceValue2 ?? 100); //100 instead of null
console.log(priceValue3 ?? 100); //0//?? not avoid falsey value
console.log(false ?? 100); //false //?? not avoid falsey value

//===============================video 37================================//
/*
  If Condition Challenge
*/
let a = 10;
if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax

//conditional ternery operator

a > 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

let st = "Elzero Web School";
if (st.length * 2 === 34) {
  console.log("Good");
}
// W Position May Change
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Goodgood");
}

if (typeof +st !== "string") {
  console.log("Good");
}
console.log(+"dunia");
console.log(typeof +"dunia"); //NAN
if (typeof Number(st) === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

//===============================video 38================================//
/*
  Switch Statement//if i have many cases 
  switch(expression) {
    case 1:
      // Code Block
      break;
    case 2:
      // Code Block
      break;
    default:
      // Code Block
  }
  - default Ordering //if start with defaul add break after the block of code 
  - Multiple Match//
  - ===
  - it is okey to have more than one case with same block of code 
  case 1 :
  case 2:

  //block of code 
  break;

*/

let day = 1;
switch (day) {
  case 0: //matching type and value
    console.log("saturday");
    break; //stop execution of switch
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("monday");
    break;
  default:
    console.log("unknown ");
}

let string = "dunia123";
let string2 = "hello";
switch (string) {
  default:
    console.log("not matching");
    break;
  case "mlk":
    console.log("not dunia");
    break;
  case "dunia123":
  case "hello":
    console.log("matching");
    break; //if comment break i will execute the next case also
  case string.slice(0, 5) + 123:
    console.log("dunia");
    break;
}

//===============================video 38================================//
/*
  Switch Challenge
*/
//i can declare variable without let
let job = "Designer";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
  console.log(salary);
  console.log(salary);
} else if (job === "IT" || job === "Support") {
  salary = 6000;
  console.log(salary);
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
  console.log(salary); //7000
} else {
  salary = 4000;
  console.log(salary);
}
console.log(salary); //7000

//if i declare variable (let)only  inside if scopes //out side the scope i will not have value of this variable
//in if statement i can redeclare variable using let//but the value outside still the same(before if ) not update
// if (job === "Manager") {
//   let salary = 8000;
//   console.log(salary);
//   console.log(salary);
// } else if (job === "IT" || job === "Support") {
//   let salary = 6000;
//   console.log(salary);
// } else if (job === "Developer" || job === "Designer") {
//   let salary = 7000;
//   console.log(salary); //7000
// } else {
//   let salary = 4000;
//   console.log(salary);
// }
// console.log(salary); //0

switch (job) {
  case "Manager":
    salary = 8000;
    console.log(salary);
    break;
  case "IT":
  case "Support":
    salary = 6000;
    console.log(salary);
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(salary);
    break;
  default:
    salary = 4000;
    console.log(salary);
}
console.log(salary);
/*
  If Challenge
*/

let holidays = 6;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}
//scopes
/*
if:
1.let variable out //let variable(redeclare) inside//if execute(i can redeclare inside have value updated inside if )//outside(i do not have updated value)
2.let variable out //updated value of variable without let (inside if )//if execute(i can redeclare inside have value updated inside if )//outside updated (i  have updated value)
3.outside declare without let //updated value of variable without let (inside if )//if execute(i can redeclare inside have value updated inside if )//outside updated (i  have updated value)
4.outside declare without let//redeclare variable inside if using let //if execute(i can redeclare inside(let// have value updated inside if )//outside not updated (i do not have updated value)
switch:
1.i can not redeclare in each case //can not use let if i alresdy use it before switch to declare car 
2.declare out side without let//insude is already without let(updated) //out side also updated 
*/
