//================================video 57========================================//
/*
  Function
  - What Is Function ?
  - كود بينفذ امر معين
  //function //do task //lead to DRY===>(Don't Repeat Yourself)
  - User-Defined vs Built In functions
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/
//built in function(ex===>console.log)
console.log(typeof console.log);
//user-defined
//function userName rules=== variable userName rules(camel case )
//function can takes parameters===>variables i want to do task (apply task on it)
//o pass arguments for the function (values for the parameters)==>when u call the function

function sayHi(useruserName) {
  console.log(`Hello ${useruserName}`);
}

sayHi("dunia");
//hoe DRY
sayHi("manar");
sayHi("dalia");
sayHi("rawaa");
sayHi("malek");
sayHi("hussam ");
sayHi("basel");
/**
 1.declearation
 function myFunction (){}
 2.expression

 const myFunction= function(){}
 */

//================================video 58========================================//
//function if your age <=15 alert or console (you are not allowed to use this app )//if >15 log userName of the user and the age
function sayHello(useruserName, age) {
  if (age <= 15) {
    console.log("you are not allowed to use this app");
  } else {
    console.log(`hello ${useruserName} your age is ${age}`);
  }
}
//if i don not send arguments(values)for the function parameters ===>undefined
sayHello("dunia", 25);
sayHello("malek", 24);
sayHello("basel", 14);
sayHello("rawaa", 15);

//write function to generate range of years (start-end)

function generateYears(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}
generateYears(2010, 2020);

//if i want to log years from 2010-2021 except 2020

function generateYears2(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) continue;
    console.log(i);
  }
}
generateYears2(2010, 2021, 2020);

//================================video 59========================================//
/*
  Function
  - Return
  //nothing execute after return //so return mean go out of the function //break the function
 -ممكن استخدم ال  return to stop or cut the loop 
 -so return like break in loop 
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/
//may the function not directly do the task //i return some thing from the function then i use the function to use what is returned
function hi(useruserName) {
  return `Hi ${useruserName}`;
}

//if i call a function it will not do any thing
hi("marah");
//use the function//log the returned value
//1.
console.log(hi("marah"));
//2.
let result = hi("mlk");
console.log(result);

//write a function to calculate sum of num1//num2//return the value

function calculation(num1, num2) {
  let sum = num1 + num2;
  return sum; //stop execution after return
  let x = 1; //unreacchable code //not executed//sfter return
}
let res = calculation(10, 20);
console.log(res); //30
console.log(res + 20); //50
console.log(calculation(5, 2)); //7
console.log(calculation(5, 2) + 3); //10

//nothing execute after return //so return mean go out of the function //break the function

function calculation2(num1, num2) {
  let sum = num1 + num2;
  return; //stop execution after return
  sum; //unreacchable code //not executed//sfter return
}
console.log(calculation2(10, 50)); //return nothing//undefined
console.log(calculation2(10, 50) + 10); //NAN; //return nothing//undefined//so undefined+number=NAN

//range 10-20//if i ===15//stop the function //stop logging

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
    if (i === 15) {
      return `interrupting`; //stop the function
    }
  }
}

generate(10, 20);
console.log(generate(10, 20));

//================================video 60========================================//
/*
  Function
  - Default Function Parameters//undefined//if i do not pass value for parameters
  - Function Parameters Default [Undefined]
  //i can assign default values for parametes :
  - Old Strategies [Condition //Logical Or]
  - ES6 Method//(equal in parametes//para=default value)
*/
function sayHelo(useruserName, age) {
  console.log(`hello ${useruserName} your age is ${age}`);
}
sayHelo("razan", 25);

//do above using return
function sayHelo1(useruserName = "unknown", age = "unknown") {
  //if i do not pass value (argument)for age parameyer when i cal the function //make the value of age for examole "unknown"//if condition
  //   if (age === undefined) {
  //     age = "unknown";
  //   }
  //another method if i do not pass value (argument)for age parameyer when i call the function //make the value of age for examole "unknown"//or oprtator
  //   age = age || "unknown";
  return `hello ${useruserName} your age is ${age}`;
  //oe directly assighn default value for parameter ES6
}
console.log(sayHelo1());
console.log(sayHelo1("dunia"));

//================================video 61========================================//
/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/

function calculate(...numbers) {
  console.log(Array.isArray(numbers)); //array (array of arguments you passed to the function )
  // return numbers;//return array of arguments [10,20,30,40]
  //function to find the sum of elements(array //rest parameters)

  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }

  return result;
}
// console.log(ff);
console.log(calculate(10, 20, 30, 40));

//if i do not know number of arguments i have//so i can not decided number of parameters i have//
//so using rest parameters the function can take any number of arguments
//so i put ...userName==>this will be array of arguments//so i deal with it as i deal with array

//================================video 62========================================//

/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/
//function ://parametrs(default parameters===(us = "Un", ag = "Un", rt = 0, show = "Yes")===>using ES6//rest parameter(skills)//if (show===>yes)===>show skills )

//if one of the parametrs is rest //last parameter //i can use just one parameter as rest// i do not know number of skills
function showInfo(
  us = "Unknown",
  ag = "Unknown",
  rt = 0,
  show = "yes.",
  ...sk //array of arguments
) {
  document.write(`<div>`);
  document.write(`<h2> Welcome ${us}</h2>`);
  document.write(`<p>age : ${ag}</p>`);
  document.write(`<p>Rate: $${ag}</p>`); //using teplete literal do not need \ before $
  if (show === "yes") {
    if (sk.length > 0) {
      document.write(`<p>skills:  ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p> No Skills </p>`);
    }
  } else {
    document.write(`<p> Skills Hidden </p>`);
  }

  document.write(`</div>`);
}

showInfo("dunia", 25, 100, "yes", "css", "js");

//================================video 63========================================//
/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => userName
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function randomArg(a, b, c) {
  list = [a, b, c];
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    console.log(list);
    typeof list[i] === "string"
      ? (userName = list[i])
      : typeof list[i] === "number"
      ? (age = list[i])
      : (stat = list[i]);
    console.log(typeof stat);
    console.log(typeof age);
  }
  console.log(stat);
  if (stat === true) {
    document.write(
      `Hello ${userName}, Your Age Is ${age}, You Are Available For Hire`
    );
  } else {
    document.write(
      `Hello ${userName}, Your Age  Is  ${age}, You Are Not Available For Hire`
    );
  }
}
randomArg(true, "dunia", 25);

//noteeeeeeeeee: the word status is a reserved keyword,avoid use it

//solve the previous example using rest parameters

function random(...info) {
  hel = 25;
  for (let i = 0; i < info.length; i++) {
    typeof info[i] === "string"
      ? (user = info[i])
      : typeof info[i] === "number"
      ? (userAge = info[i])
      : info[i] === true
      ? (userState = `You Are Available For Hire`)
      : (userState = `You Are Not Available For Hire`);
  }
  document.write(`<p>Hello ${user}, Your Age  Is  ${userAge},${userState}</p>`);
}

random(false, "malek", 24);

//================================video 64========================================//

/*
  Function
  -store anonymous function in variable ===>function expression //acees it by calling variable name//after declare not before like named
  - Anonymous Function //
  -using with events(document.getElementById().onclick=function(){})//i do not need name //i will use it when i click directly
  -also with setTimeout==>do not need name for it // i do not need to call it //i do this task ===> the function will done with it (click,events,setTimeout)
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

//i can call the function before the decleartion and i can access to it
//i can store the function in variable and access the function using this var//this way called function expression

//function decleration//i can access (call)the function before the function declaration
console.log(calc(10, 20));
function calc(num1, num2) {
  return num1 + num2;
}

//store in variable===>expression===> Anonymous Function//i can not call it (access) before function declaration(expression )
// console.log(calc2(10, 20));//Cannot access 'calc2' before initialization//because the function (يتم انشاؤها) at run time
let calc2 = function (num1, num2) {
  return num1 + num2;
};
console.log(calc2(10, 20));

//why using anonymous function//do not need a name for this function //i will use it just once when i foe example clicked on the button
////if i named the function i will not need the name so just use anonymous function

document.getElementById("show").onclick = function () {
  document.write(`<p>clicked:))))))))))))</p>`);
};
//also i do not need a name for function when i use it with setTimeOut
setTimeout(function () {
  document.write(`after 2 seconds i work , wait mee :))))))))`);
  console.log(`after 2 seconds i work , wait mee :))))))))`);
}, 2000);
;
//how can you use named function with events
//1.without name (anonymous)
document.getElementById("show2").onclick = function () {
  console.log("show2 button clicked");
};

//2.named function with events
document.getElementById("show3").onclick = named; //can access before decleration //for named function
function named() {
  console.log(`show 3 button clicked`);
}

//================================video 65========================================//
/*
  Function
  - Function Inside Function//nested
  - Return Function
*/
//example 1
// function sayMessage(fName, lName) {
//   let message = `hello`;
//   //nested function
//   function concatMessage() {
//update the message var
//     message = `${message} ${fName} ${lName}`;
//   }
//   concatMessage();
//   return message;
// }

// console.log(sayMessage("dunia", "alkilany"));

//example 2
// function sayMessage(fName, lName) {
//   let message = `hello`;
//   //nested function
//   function concatMessage() {
//     //return message
//     return `${message} ${fName} ${lName}`;
//   }
//   // concatMessage();
//returned the nested function
//   return concatMessage();
// }

// console.log(sayMessage("dunia", "alkilany"));

function sayMessage(fName, lName) {
  let message = `hello`;
  //nested function
  function concatMessage() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    //return message
    return `${message} ${getFullName()}`;
  }
  // concatMessage();

  return concatMessage();
}

console.log(sayMessage("dunia", "alkilany"));

//================================video 66========================================//
/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

//regular function (named/anonymous)
// function print() {
//   return 10;
// }
// console.log(print());

// let print = function () {
//   return 10;
// };

// console.log(print());

//arrow function //in arrow function if ===>(no parameters)use () or _//if i have just one line i can write arrow function without { }and return

// let print = () => {
//   return 10;
// };

// let print = () => 10;

//if i have parameters

// let print = function (num) {
//   return num;
// };

//arrow with parameters// if i have one parameters i can delete ()

// let print = num => {
//   return num;
// };

// let print = (num) => num;

//more than one parameters

let print = (num1, num2) => num1 + num2;
console.log(print(20, 30));

  
//arrow 

/*

1.take no parameters ()or _
2.if the function is one line(one statement function) return something so i can delete the return and { }
3.if the function take one parameter i can write it without ()
4.i can use more than one parameter (par,par2)

 */

//no para ()or _//one statement without {}/return
let write=_=>`hello`
  

console.log(write());

//one parameter//can using without ()

let onepara=one=>{
 let userName=`${one}${one}`
  return userName
}
console.log(onepara("dunia"));



//================================video 67========================================//

/*
  Scope
  - Global And Local Scope

  //inside function ==>local scope if variables declared inside function //it will take the value from the inside //but if not declared inside declared outside //it will take value from outside 

//out side function i can not access the local scope of the function 
//so local can access global //but global can not access local 
  */
//differances between let /var 
/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama (not added to window)
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama (not added to window)
  - Block Or Scope Function
*/

console.log(varrr);//undefined
// i can redeclare using var 
//access before declaration (undefined)
var varrr=5
 var varrr=6
console.log(varrr);

//can not redeclare same variable using let 
//access before declare ===>error not undefined like var 

// console.log(varr1);//can not access befire initialization //like expression function 
let varr1=10
// let varr1=20//can not redeclare same variable using let //error //already declared//i can update it 
varr1=20
console.log(varr1);
//global scope can access it from everywhere (function/for/global)
var a = 1;
let b = 2;

function showText() {
  //inside the function===>local scope 
 var  a = 10;
  let b = 20;
  console.log(`Function - From Local ${a}`);//search in function //if it declared locally //take the value from local scope//10//if not declared locally take values from globa so will be //1
  console.log(`Function - From Local ${b}`);//search in function //if it declared locally //take the value from local scope//20//if not declared locally take values from globa so will be //2
}
showText();
console.log(`From Global ${a}`);//take the value from global //1
console.log(`From Global ${b}`);//take the value from global //2


//================================video 68========================================//
/*
  Scope//condition//loop..
  - Block Scope [If, Switch, For,while]
  //var do not have block scope so i overwrie(updating)//to solve this problem (use let/const)
*/

var x = 10;

if (10 === 10) {
  //if i don not want to overwrite inside block scope i use let 
let  x = 50;
  console.log(`From If Block ${x}`)//50//searching in block scope //if it is declare //take the value from block scope//nor declare in block take from global scope
}

console.log(`From Global ${x}`);//10//search just globally if its declared it take the value glopally//can not access block scope 
//================================video 69========================================//

/*
  Scope
  - Lexical Scope
  //scope in nested functions 
  i can accsees from nested to out function //but i can not access from out to nested

  Search
  - Execution Context
  - Lexical Environment
*/

function parent() {
  let a1 = 10;

  function child() {
    console.log(a1);//10
    // console.log(`From Child ${b1}`);//undefined

    function grand() {
      let b1 = 100;
      console.log(`From Grand ${a1}`);//10
      console.log(`From Grand ${b1}`);//100
    }
    grand();
  }
  child();
}
parent();

/*
functions (global//local)
1.inside function local //let //take from inside//if i do not have inside //take from glpbal
2.out side //global ==>can not take value from local(inside)
same thing for lexical scope (nested functions )//nested can take from out fun //but out can not take from nested 
//block scope 
1.to have block scope do not use var (var do not have block scope )//use let , const 


*/


//================================video 70========================================//
/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]


//regular function 
// let names = function (...name) {
//   // Parameter ?
//   return `String [${name.join("],[")}]=> Done`;
// };



//arrow function 

let names=(...name)=>`String [${name.join("],[")}]=> Done`
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim","dunia"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

// let calc1 = (one, two, ...nums) => one+two+nums[+false][+true];

//regular function 

let calc1 =function(one, two, ...nums){
  return  one+two+nums[+false][+true]
}
console.log(calc1(10, myNumbers[+false],myNumbers)); // 80

//using just myNumbers
let calc3 = (one, two, ...nums) => one+two+nums[myNumbers.length%myNumbers.length];
console.log('clac3==>',calc3(10, myNumbers[myNumbers.length%myNumbers.length],myNumbers[myNumbers.length/myNumbers.length])); 
//third para is array (rest para)===>firs element of this rest para is aaray 
//...nums===>arguments passed (array)===>first element of nums array (is ===> myNumbers array )