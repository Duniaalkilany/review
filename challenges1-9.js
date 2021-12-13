//https://elzero.org/javascript-bootcamp-assignments-lesson-from-001-to-009/
//challeng 1
/* code 1 will not work because we add the scriot tag at the enf of the head so i can not access the HTML element which located after it
so here to aceess h1 element which has id='el'and then style it i should add the script tag at the end of the body like code3 or i should
use window.onload=function(){

} 
 */

//challenge 2

document.write("<h1>Elzero</h1>");

document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";

//challenge 3
console.log(
  "%cElzero %cWeb %cSchool",
  "color:red;font-size:40px;",
  "color:green;font-size:40px;font-weight:bold",
  "color:white;background-color: blue;font-size:40px"
);

//challenge 4

console.group("Group 1 ");
console.log("Message 1");
console.log("Message 2");
console.group("Child Group");
console.log("Message 1");
console.log("Message 2");
console.groupEnd("");
console.group("Grand Child Group");
console.log("Message 1");
console.log("Message 2");
console.groupEnd("");
console.groupEnd("");
console.group("Group 2");
console.log("Message 1");
console.log("Message 2");
console.groupEnd("");

//challenge 5
console.table(["Elzer", "Ahmed", "Sameh", "Gamal", "Aya"]);

//challenge 6
/*
 console.log("Iam In Console");*/
// document.write("Iam In Page");
