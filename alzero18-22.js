/*-----------------------------video 18------------------------------------- */

/*
  Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ Post(after) / Pre(before) ]
  -- Decrement [ Post / Pre ]
*/
//undefined+number==> NAN
console.log(10 + 20); //ari operator +
console.log(10 + "Osama"); //concatenation//10Osama//output===>string
console.log(typeof (10 + "Osama"));
console.log(10 - 20);
console.log(10 - "Osama"); // NaN//Not A Number
console.log(typeof NaN); //number//(weired:()

console.log(10 * 20); //200
console.log(10 * -20); //-200

console.log(20 / 5); //4
console.log(20 / 3); //6.666666666666667
console.log(7 / 3); //2.3333333333333335

//exponentiation **
console.log(2 ** 4); //16
console.log(2 * 2 * 2 * 2); //16
//modulus //usually use it to know if the number is odd or even
console.log(10 % 2); //0
console.log(11 % 2); // Remove 1
console.log(20 % 10); //0

//++

let num = 10;
console.log(num++); //do post(++ is after the number so here print then add)//10
console.log(num); //11
let num2 = 9;
console.log(++num2); //pre(++before)add then print //10

//--
let num3 = 6;
console.log(num3--); //do post //print then subtraction
console.log(num3); //5

let num4 = 20;
console.log(--num4); //do pre //sub then print

/*-----------------------------video 19------------------------------------- */
//Unary Plus And Negation Operator//converte to number//positive //negative

/*
  - + Unary Plus [Return Number If Its Not Number]//+before//return number if it is number and also return number if it is not number 
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/
//so unary plus operator return always number
console.log(100); //100//number
console.log("100"); //100//string
console.log(+100); //100//number
console.log(+"100"); //100//number
console.log(+"-100"); //-100/number
console.log(+"dunia"); //return NAN (tyoe of it ===>number)//like when sub num and string 10-"dunia"
console.log(+2.3); //2.3
console.log(+0xff); //255
console.log(+null); //0
console.log(+true); //1
console.log(+false); //0
console.log(+undefined); //NAN
console.log(+""); //0
//unary negation also return number but negates it
console.log(-100); //-100
console.log(-"100"); //-100
console.log(-"-100"); //100
console.log(-"dunia"); //NAN
console.log(-"10.2"); //-10.2
console.log(-0xff); //-255
console.log(-0); //-0
console.log(-null); //-0
console.log(-true); //-1
console.log(-false); //-0
console.log(-undefined); //NAN
console.log(-""); //0
//another way to converte to number is use Number()
let text = "200";
console.log(Number(text)); //200
console.log(+text); //200
console.log(-text); //-200

/*-----------------------------video 20------------------------------------- */
// - Type Coercion(type casting)converting between data types
/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/

// let a = "10";
// let b = 20;
// let c = true;

// console.log(a + b); //concatenation//10020//string
// console.log(+a + b); //30 //unary plus(+a)===>convert (a) to number
// console.log(Number(a) + b); //30//using Number(a)operator===>convert (a) it to number
// console.log(a - b); //-10
// console.log(b - a); //10
// console.log(+""); //0
// console.log("" - 2); //-2
// console.log(true - false); //1
// console.log(false - true); //-1
// console.log(+false - +true); //-1
// console.log(b + c); //21
// console.log(a + b + c); //string+numer===>concat===>output string so it convert true to string also
// console.log(+a + b + c); //10+20+1=31//unary plus (a)===<number so true will assumed as number
// console.log(a - b - c); //-11//i don not have problem with sub

/*-----------------------------video 21------------------------------------- */
/*
  Assignment Operators
*/

let v = 10;
console.log(v); //10
// let v = v + 20; //error //can not  redeclare with let
v = v + 20; //30

v = v + 70; //100

v += 20; //v=v+20===>120
v -= 10; //v=v-10===>110
v -= 10; //100
// v = v / 2; //50
v /= 2; //50
v *= 2; //100
v **= 2; //10000
v %= 2; //0
console.log(v);

/*-----------------------------video 22------------------------------------- */
//Operators Challenges

/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log("o/p1", ++a + +b++ + +c++ - +a++); //11+20+80-11//===>100
console.log("o/p2", ++a + -b + +c++ - -a++ + +a); //13+-21+82--13+14//===>100
console.log("o/p3", --c + +b + --a * +b++ - +b * a + --a - +true); //81+21+13*21-22*13+12-1//===>100
let g1 = 10;
console.log(g1++); //10//value of g will be 11
console.log(g1++); //11//value og g will be 12
console.log(++g1); //13
console.log(g1); //13

/*
  [++a] [+]
  [++a]
  - Value:11
  - Explain:pre increment
  [+]
  - Explain:addition operator 
  [+b++]
  - Value:20
  - Explain:post increment//unary plus //value of b will be//21
  [+]
  - Explain:addition operator
  [+c++]
  - Value:80
  - Explain:post increment //value of c =81
  [-]
  - Explain:subtraction operator
[+a++]
  - Value:11
  - Explain:post increment //value of a =12
 
*/
/*
  [++a] [+]
  [++a]
  - Value:13
  - Explain:pre increnent
  [+]
  - Explain:addition operator 
  [-b]
  - Value:-21
  - Explain:unary negation
  [+]
  - Explain:addition operator
  [+c++]
  - Value:81//value of c will be 82 
  - Explain:post increment 
  [-]
  - Explain:subtraction operator
[-a++]
  - Value:-13//value of a will be 14
  - Explain:post increment /unary negation
 [+]
 - Explain:addtion operator
 [+a]
  - Value:14
  - Explain:value of a that saved after last post increment
*/

/*
 
  [--c]
  - Value:81
  - Explain:pre decrement
  [+]
  - Explain:addition operator 
  [+b]
  - Value:+21
  - Explain:unary plus
  [+]
  - Explain:addition operator
  [--a]
  - Value:13
  - Explain:pre decrement
  [*]
  - Explain:multiplication operator
[+b++]
  - Value:21//value of b will be 22
  - Explain:post increment /unary plus
  [-]
 - Explain:subtraction operator operator
 [+b]
  - Value:22
  - Explain:unary plus
 [*]
   - Explain:multiplication operator
[a]
  - Value:13
  - Explain:last value saved for a 
 [+]
  - Explain:addition operator
[--a]
  - Value:12
  - Explain:pre decrement 

[-]  
- Explain:subtraction operator
[+true]
  - Value:1
  - Explain:unary plus 
*/
/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice
//solvin by using unary plus , negation , pre/post incerement /decrement

console.log(-d * +e); // 2000
console.log(-d + +e * ++g + f + ++g); // 173
