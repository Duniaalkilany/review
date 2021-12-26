/*===========================video 23=================================*/
/*
  Number
  - Double Precision
  - Syntactic Sugar "_"//engin escape underscore between numbers
  - e
  - ** [ES7]
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/
console.log(1000000);
console.log(1_000_000); //1000000 //syntactic suger
console.log(1e6); //1000000//e then # of zero's
console.log(10 ** 6); //Exponentiation//1000000
console.log(1000000.0); //1000000
console.log(Number("50")); //50
//Number()===> is function //object in js has proparties
console.log(Number.MIN_SAFE_INTEGER); //أقل عدد صحيح امن في اللغة
console.log(Number.MAX_SAFE_INTEGER); // أكبر عدد صحيح امن في اللغة
console.log(Number.MIN_VALUE); //أقل قيمة لرقم في اللغة
console.log(Number.MAX_VALUE); // أكبر قيمة لرقم في اللغة
console.log(Number.MAX_VALUE + 222222222); //log max number value in js
console.log(Number.isInteger(50)); //true
console.log(Number.isNaN("dunia")); //false
/*===========================video 24=================================*/

/*
  Number Methods
  //JavaScript methods are actions that can be performed on numbers
  - Two Dots To Call A Methods
  - toString()//number===>string
  - toFixed()//nmber===>string//rounded according to now many digits entered
  - parseInt()//string===>number(integer)
  - parseFloat()//string===>number(float)
  - isInteger() [ES6] //important with if condition 
  - isNaN() [ES6] //important with if condition 
*/
//1.toString method//to use number directly with a method ===>put it in paranthsis()then.method//or use .. then the method
console.log((100).toString()); //"100"
console.log((100).toString()); //"100"
let num1 = 200;
console.log(num1.toString());
let num2 = num1.toString();
console.log(typeof num2);

//2.toFixed method//# of numbers you want to return it after . //return string//number===>string
console.log((10.55).toFixed()); //11
console.log((10.554555).toFixed()); //11
console.log((20.45784).toFixed(2)); //20.46
console.log((100.4562).toFixed(3)); //100.456
let num3 = 99.6547821;
console.log(num3.toFixed(5)); //99.65478
console.log(typeof num3.toFixed(5)); //string
console.log((20.5).toFixed()); //21
console.log((20.5).toFixed(1)); //20.5
//parseInt//convert string to number like unary plus/negation //Number()//but the different that ite parse the string and return the number (integer)
//parseFloat===>parse str and return the number (float if it is already float)
console.log(parseInt("100")); //100 as number
console.log(Number("100"));
let str = "100";
console.log(+str);
console.log(+"100");
console.log(+"100dunia"); //NAN
console.log(Number("100 dunia")); //NAN
console.log(parseInt("100dunia")); //100
console.log(parseInt("100.524dunia")); //100
console.log(parseFloat("100.524dunia")); //100.524
console.log(parseInt("dunia100dunia")); //NAN
console.log(parseInt("dunia100.524dunia")); //NAN

//Number.isInteger()===>is integer
//Number.isNAN()===>is return NAN
console.log(Number.isInteger("100")); //false
console.log(Number.isInteger(100)); //true
console.log(Number.isInteger(100.234)); //false
console.log(Number.isNaN(+"dunia")); //true
console.log(Number.isNaN(+"100")); //false
console.log(Number.isNaN("dunia" / 2)); //true
console.log(Number.isInteger(Number("100"))); //true
console.log(Number.isNaN(Number("dunia"))); //true

//

/*===========================video 25=================================*/
/*
  Math Object//i use it in cookie stand project :) //on numbers 
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]//floatto integer
*/

console.log(Math.round(10.47)); //10
console.log(Math.round(10.5)); //11
console.log(Math.ceil(10.2)); //11//largest integer
console.log(Math.ceil(10.7)); //11
console.log(Math.floor(10.9)); //10//smallest integer
console.log(Math.floor(10.99)); //10
console.log(Math.min(10, 20, 30, 4)); //4
console.log(Math.max(10, 20, 100));
console.log(Math.random()); //random number
console.log(Math.random() * 4); //random number (0-4)
let arr = [10, 20, 30];
console.log(Math.min(arr[0], arr[1], arr[2])); //10
console.log(Math.trunc(10.8457)); //10//judt the integer part of the number
console.log(Math.trunc(10.23)); //10

/*===========================video 26=================================*/
/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5; //200.5
let c = 1e2; //100
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a, b, c, d))); //2

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.round(d))); // 10000
console.log(Math.pow(a, Math.trunc(d)));
console.log(Math.pow(a, Math.floor(d)));
// Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(parseInt(d.toString()));
console.log(parseInt(d.toFixed(1)));
console.log(+d.toFixed());
console.log(Number(d.toFixed()));

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(b) / Math.ceil(d)); // 67 => Number
/*===========================video 27=================================*/
/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods//using more than one method together 
*/
let theName = "dunia";
let theName2 = "   dun ia       ";
let name = "dUnIa";
console.log(theName[2]); //n//acees with index//zerp basing index
console.log(theName.charAt(2)); //n
console.log(theName.length); //5
console.log(theName[5]); //undefined//there is no index5 [5]
console.log(theName.charAt(5)); //return nothing // i do not have anything in position 5
console.log(theName2[2]); //return space(فراغ)
console.log(theName2.charAt(5)); //n
console.log(theName2.length, "before trim");
console.log(theName2.trim()); //trim spaces at (start,end) of the string
let theName3 = theName2.trim();
console.log(theName3.length, "after trim");
console.log(theName.toLowerCase());
console.log(theName.toUpperCase());
console.log(name.toLowerCase()); //dunia//all char's  is lower case
console.log(name.toUpperCase()); //DUNIA//all char's  is upper case

//chain method
console.log(theName2.trim().charAt(2).toUpperCase());

/*===========================video 28=================================*/
/*
  String Methods
  //Mandatory//optional
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])//string===>array
*/

let sentance = "Elzero Web School";
console.log(sentance.indexOf("Web")); //7
console.log(sentance.indexOf("Web1")); //-1
console.log(sentance.lastIndexOf("Web")); //7
console.log(sentance.indexOf("o")); //5
console.log(sentance.lastIndexOf("o")); //15//first "o" from the end
console.log(sentance.indexOf("Web", 2)); //7
console.log(sentance.indexOf("Web", 8)); //-1
console.log(sentance.lastIndexOf("o", 4)); //-1
console.log(sentance.lastIndexOf("o", 5)); //5
console.log(sentance.slice(0)); //Elzero Web School
console.log(sentance.slice(7)); //Web school
console.log(sentance.slice(6)); // Web Schoolwith the space at (index6)
console.log(sentance.slice(0, 5)); //Elzer//not include the end(index5)
console.log(sentance.slice(0, 6)); //Elzero
console.log(sentance.slice(-5)); //chool//start from the end//start counting from 1
console.log(sentance.slice(-5, -3)); //ch//not include the end
console.log(sentance.slice(1, -1)); //between index0 and last index //lzero Web Schoo
console.log(sentance.slice(-9, -5)); //eb S
console.log(sentance.repeat(2));
console.log("split", sentance.split()); //["Elzero Web Schoo"]
console.log(sentance.split("")); // ['E', 'l', 'z', 'e', 'r', 'o', ' ', 'W', 'e', 'b', ' ', 'S', 'c', 'h', 'o', 'o', 'l']
console.log(sentance.split(" ")); //["Elzero","Web","School"]
console.log(sentance.split("e")); //["Elz","ro W","b School"]
console.log(sentance.split("l")); //["E",[zero Web Schoo],""]
console.log(sentance.split("", 5)); //['E', 'l', 'z', 'e', 'r']
console.log(sentance.split(" ", 2)); //["Elzero","Web"]

/*===========================video 29=================================*/

/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character//counting from the last (like negative with slice )
  - substr(Start [Mand], (#)Characters To Extract(lenght))
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0(index)) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
  -replace//rrturn new string with replacement value //string.replace("old","new")
  -to check if lettet is capital 
  1.letter.toUpperCase()=letter===>true===>capital//false===>small
*/

let string = "Elzero Web School";
console.log(string.length); //17
//1.substring
console.log(string.substring(2)); //zero Web School
console.log(string.substring(1)); //lzero Web School
console.log(string.substring(2, 6)); //zero//end not include
console.log(string.substring(6, 2)); //start>end//swap//(2,6)
console.log(string.substring(-10)); //-10===>0//then start from 0//Elzero Web School
console.log(string.substring(-10, 9)); //0===>9//9 not include //Elzero We
//last index=lenght-1
console.log(string.substring(string.length - 1)); //l
console.log(string.substring(string.length - 10)); //Web school
// i want ch using lenght
console.log(string.substring(string.length - 5, string.length - 3)); //ch
console.log(string.substring(string.length - 9, string.length - 1)); //eb Schoo

//2.substr

console.log(string.substr(0)); //0===>to end//Elzero Web School
console.log(string.substr(0, 8)); //Elzero W//start from index 0 and count 8 charc's
console.log(string.substr(17)); //nothing(" ")
console.log(string.substr(16)); //l
console.log(string.substr(-3)); //ool
console.log(string.substr(-5, 2)); //ch
//3.includes

console.log(string.includes("Web")); //true
console.log(string.includes("Web", 8)); //false
//4.startsWith
console.log(string.startsWith("E")); //true
console.log(string.startsWith("E", 2)); //false
console.log(string.startsWith("z", 2)); //true
console.log(string.startsWith("zero", 2)); //true
//5.endsWith
console.log(string.endsWith("l")); //true
console.log(string.endsWith("l", 17)); //true
console.log(string.endsWith("l", 16)); //false
console.log(string.endsWith("o", 6)); //true
console.log(string.endsWith("o", 7)); //false
console.log(string.endsWith("ro", 6)); //true
/*===========================video 30=================================*/

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a2 = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a2.charAt(2).toUpperCase() + a2.slice(3, 6)); // Zero//using concatenate
console.log(`${a2.charAt(2).toUpperCase()}${a2.slice(3, 6)}`); //using Template literals

// 8 H
console.log(a2[13].toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a2.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a2.substr(0, 6)} ${a2.substr(11, 6)}`); // Elzero School
console.log(`${a2.substr(0, 6)} ${a2.substr(11)}`);

// Solution Must Be Dynamic Because String May Changes
console.log(
  a2[0].toLowerCase() +
    a2.slice(1, -1).toUpperCase() +
    a2.substring(a2.length - 1).toLowerCase()
); // eLZERO WEB SCHOOl

console.log(
  a2.charAt(0).toLowerCase() +
    a2.slice(1, -1).toUpperCase() +
    a2.charAt(a2.length - 1).toLowerCase()
);
