/*data types in js 
- typeof operator===>to know the type of data in js 
1.string
2.number
3.object===>array
4.object {key:value,
key2:value2}
5.boolean
6.undefined//
7.null===>object===>keep in mind why typeof null is obj

*/
console.log(typeof "dunia alkilany");
let number = 1;
console.log(typeof number);
console.log(typeof [1, 2, 3]);
console.log(typeof ["dunia", "alkilany"]);
console.log(typeof { name: "dunia", age: 24, country: "jordan" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof dunia);
console.log(typeof null);

/*variable introdunction
//declare the variable then use it 
declare variable===>using var,let keyword then var name then assignment operatoe"="then value 
 */
var user1 = "sara";
console.log(user1);
name = "dunia"; //i can decleare variable without using var keyword
console.log(name);

var user = "dunia alkilany",
  age = 24; //decleare mutiple vaeiables in same line //seperate them using comma

console.log(hello); 
console.log(typeof hello);//global variable decleare in the html //id="hello"
console.log(hello.innerHTML);
hello.innerHTML = "option"; //chane the content of html variable or element which id=hello
console.log(hello.innerHTML);
//loosely typed vs strongly typed//js is loosely typed language

/* Identifiers Name Conventions And Rule (variable names)
1.can not usr spaces us er x
2.can not start with number 1user x
3.can start with underscore _ or $ and can put it at any place in the var name _u_s$er$_
4.can not use special charactor(#,@) at any place in the identifire(variable name)
 let @varName="tasneem"
let var#Name="tasneem"
5.sensitive case which mean 
le user="dunia" 
let User="dunia"
user is not the same variable User
5. can not use js reserved words (if,var ,function...) as identifire 
6.using camelCase ===>naming variables in js
*/

//var , let , const compare
//ES6===>let,const===>to declare variables
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

// var a = 1;
// var a = 2;
// console.log("redeclare using var", a);

// let b = 10;
// let b = 20;
// console.log("redeclare using let", b); //error //identifier b has already declared

// const c = 30;
// const c = 40;
// console.log("redeclare using const", c); //error //identifier c has already declared

// console.log("access before initialization using var", a); //undefined
// var a = 2;

// console.log("access before initialization using let", a); //eroor//ca not access a  before initialization
// let a = 2;

// console.log("access before initialization using const", a); //error// before initialization
// const a = 2;

//var dddd = 100;
/*this var add to window ,write window on console and check it ,also you will have it when
write dddd in console or write window.ddddd*/

//String Syntax And Character Escape Sequences

// console.log("dunia "alkilany"");//error
//escape operator\ uses
console.log("dunia 'alkilany'");//single inside double 
console.log('dunia "alkilany"');//dpuble inside single 
console.log("dunia \"alkilany\""); //escape operator(back slach)===>after is a character nor related to the prog language 
console.log('dunia \'alkilany\'');//escape operator before (\)back slach
console.log("print \\");//to print \ 
console.log("dunia\
 abd\
 alkilany");//here i use escape operator to ignore new line ,line continue ()

//new line 
console.log("dunia\nabd\nalkilany");
console.log("hello\nfrom\nthe\nother\nside");
let country="jordan\nkingdom"//new line
console.log(country);

// - Concatenation===>connect data together using plus(+)
// let a= "we love"
// let b="JS"
// document.write(a+" "+b)
// document.write(a," ",b)
// console.log(a,b);//adding space directly
// console.log(`i love ${b}`);
// document.write(`i love ${b}`)

//Template Literals Template Strings//in ES6 instead of + in concatenation

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(a+" "+b+"\n"+c+" "+d);
console.log(`${a} ${b}
${c} ${d}`);//no need to add \n

// document.write(a+"\n"+b+" "+c+" "+d)
// document.write(`${a} ${b}
// ${c} ${d}`) 
//literal template
let firstName="dunia"
let lastName="alkilany"
let markup=` <div class="card">
<div class="child">
  <h2>${firstName}</h2>
  <p>${lastName}</p>
</div>
</div>`
// document.write(markup)

// - Variable And Concatenation Challenge
/*[1] Create 3 Variables [Title, Desctiption, Date]
-- All In One Statement
-- Variable Name Must Be Two Words
-- Title Content Is "Elzero"
-- Description Content Is "Elzero Web School"
-- Date Content Is "25/10"
[2] Create Variable Contains Div And This Div Contains
-- H3 For Title
-- P For Paragraph
-- Span For Time
[3] Add This Card To Page 4 Times
[4] Use Template Literals For Concatenate

Extra
- Use ES6 Repeat*/

let theTitle="Elzero",theDescription="Elzero Web School",theDate="25/10"
let container=`<div clase="card">
<h3>${theTitle}</h3>
<p>${theDescription}</p>
<span>${theDate}</span>
</div>`

document.write(container.repeat(4))


