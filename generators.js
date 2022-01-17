//Generators And Modules
/*
Regular functions return only one, single value (or nothing).

Generators can return (“yield”) multiple values,
 one after another, on-demand. 
 -function stop execution after each yield
 -function give you the control to yeild
 They work great with iterables, allowing to create data streams with ease.
 -yield keyword
 -generator functions yields data
-generator function create iterator
 -generator function//iterator is object 

 -this object/iterator/create by generator function  has methods:
 -1. next()

 What is the difference between generator and iterator?
Iterators: Iterator are objects which uses next() method to get next value of sequence.
 Generators: A generator is a function that produces or yields a sequence of values using yield method

It may be possible to iterate over an iterable more than once, or only once. It is up to the programmer to know which is the case.

Iterables which can iterate only once (such as Generators) customarily return this from their @@iterator method, whereas iterables which can be iterated many times must return a new iterator on each invocation of @@iterator.

*/

function* generateTickets() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
//like set iterator
let iterator = generateTickets();
console.log(typeof iterator); //object

console.log(iterator.next().value); //1//{value: 1, done: false}//done==>false==>iteration not complete yet
console.log("we will do some thing before yeilding the next ticket ");
console.log(iterator.next().value); //2
console.log(`function stop execution after each yield`);
console.log(iterator.next().value); //3
console.log(`function give you the control to yeild`);
console.log(iterator.next().value); //4

console.log("#".repeat(20));

//#########################################################################################
let myNumbers = [10, 20, 30, 40, 50];
//in regular function i can return one value
function genrateNums(nums) {
  for (let i = 0; i < nums.length; i++) {
    return nums[i]; //it will returnn first iteration then stop execution //out of the function//after return stop function
  }
}
console.log(genrateNums(myNumbers)); //10
console.log(genrateNums(myNumbers)); //10

//i have array of numbers // i will use generators to return /yeilds all values of this array
//for..in returns a list of keys on the object being iterated,
//for..of returns a list of values of the numeric properties of the object being iterated.
function* generateNumbers(nums) {
  for (let i in nums) {
    yield nums[i];
  }
}

let iterator1 = generateNumbers(myNumbers);
console.log(iterator1.next().value); //10
//function stop execution after each yield
//function give you the control to yield(rerturn values)
console.log(iterator1.next().value); //20
console.log(iterator1.next().value); //30
console.log(iterator1.next().value); //40
console.log(iterator1.next()); //{value:50,done:false} //50
console.log(iterator1.next()); //{value:undefined,done:true}//iteration completed

//no need to out array and use for then then yeild each iteration
function* generateNum() {
  //yeilds value of arrays directly
  yield* [10, 20, 30, 40];
  yield 70;
}
let iterator3 = generateNum();
console.log(iterator3.next().value); //10
console.log(iterator3.next().value); //20
console.log(iterator3.next().value); //30
console.log(iterator3.next().value); //40
console.log(iterator3.next().value); //70
//=====================Generators Part 2 Functionality And Return====================//
/*
in function ====>do not have control on yeilding//when i call it it directly executed 
in generators function ===>i have control of yeilding 
//i can use for ...of(ES6) ===>loop over values of the iterator(object) (generator function )
*/
function orderBook() {
  window.alert("You Clicked On Button To Order A Book");
  console.log("You Clicked On Button To Order A Book");

  window.alert("You Added The Book To Cart");
  console.log("You Added The Book To Cart");

  window.alert("Payment Is Done");
  console.log("Payment Is Done");
}
//i save function in variable ==>every thing inside function will work===>because i call the function  //i do not have cotrol //
// let ordering = orderBook();
//in generator function i yeild what i want when i want(have control to generate (yeild) what i want and when i want  )

function* orderBook1() {
  window.alert("You Clicked On Button To Order A Book");
  console.log("You Clicked On Button To Order A Book");

  window.alert("You Added The Book To Cart");
  console.log("You Added The Book To Cart");

  window.alert("Payment Is Done");
  console.log("Payment Is Done");
}

// let ordering1 = orderBook1(); //when i save then call generator function //nothing happened//because in generator function i have control of yeilding
// console.log(ordering1.next().value); //here even the function called above it not work until i execute it by next method

function* mySkills() {
  yield "Html";
  yield "JS";
  yield "nodejs";
  yield "css";
}
let iterator2 = mySkills();

// console.log(iterator2.next().value); //"Html"
// console.log(iterator2.next().value); //"JS"
// console.log(iterator2.next().value); //nodejs
// console.log(iterator2.next().value); //css

//for of to loop on iterator
for (let skill of iterator2) {
  console.log(skill);
}

//for of to loop on generator function
for (let s of mySkills()) {
  console.log(s);
}

//Test return with generator function===>after return stop executin

function* sayNames() {
  yield "dunia";
  yield "abd";
  yield "alkilany";
  return "malek"; //return stop execution the function
  yield "hussam "; //unreachable code detected//after return
}

let iterator4 = sayNames(); //iterator
//loping
console.log(iterator4.next()); //{value: "dunia" , done:false }
console.log(iterator4.next()); //{value: "abd" , done:false }
console.log(iterator4.next()); //{value: "alkilany" , done:false }
console.log(iterator4.next()); //{value: "malek" , done:true }//return stop execution //done true
console.log(iterator4.next()); //{value: undefined , done:true }
//===========================Generators Part 3 Create Infinite Numbers============================

function* createInfinte() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

let infiniteIterator = createInfinte();
//control yeilding
console.log(infiniteIterator.next().value); //0
console.log(infiniteIterator.next().value); //1
console.log(infiniteIterator.next().value); //2
console.log(infiniteIterator.next().value); //3
console.log(infiniteIterator.next().value); //4
//in generator function i can control the yeild
//but note that the iterator star from generator end //if i yeild before it is done with this value it will not yeild a gain
//if i want to yeild nums 0===>20//i should break from the loop because it is infinte loop

//this for loop will not start from 0 it will start yeilding from 5===>20
//because i already yeild 0/1/2/3/4
//iterator start from where generator stop yeilding (from the last yeild )
// for (value of infiniteIterator) {
//   if (value > 20) {
//     break;
//   } else {
//     console.log("iterator", value); //5-20//from last yeild
//   }
// }

//if i did the same but looping over generator function not iterator

for (let value of createInfinte()) {
  //it will iteratr (start) over all values /even i yeilding it before or not
  if (value > 20) break;

  console.log("generator function ", value); //0-20
}

//infinte loop//out put of generator function//infinte loop
// for (let value of infiniteIterator) {
//   console.log(value);
// }

//if i loop through iterator===> i care about what it is yeild before
//iterator start where generator stop (last yeild )
//but if i loop through generator ===>from the start (start yeilding value each time )

//generator //it will yeilding from the start0===>30
for (let value of createInfinte()) {
  //it will iteratr (start) over all values /even i yeilding it before or not
  if (value > 30) break;

  console.log("generator function ", value); //0-30
}

//iterator

for (value of infiniteIterator) {
  //it will iteratr from lasr yeild//21-30
  //   console.log("ggg");
  if (value > 20) {
    break;
  } else {
    console.log("yeilding", value); //21-30
  }
}
//i can iterate only once on generator iterable
for (v of infiniteIterator) {
  //it will iteratr from lasr yeild//21-30
  //   console.log("ggg");

  console.log("yeilding", v); //21-30
}

//========================Generators Part 4 Delegating Generators==========================
//generator dtop generate /produce value by it self / delegating generator ===>yeilding values produced by another generators then it yeild its own values
//many generators function
function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}
function* generateNames() {
  yield "dunia";
  yield "tasneem";
}
//delegating generator ===>مفوض/مندوب

function* delegating() {
  yield* generateNums();
  yield* generateNames();
}

let deleIterator = delegating(); //iterator//object//this iterator will yeilds all values produced by generator 1/2
console.log(deleIterator.next()); //1
console.log(deleIterator.next()); //2
console.log(deleIterator.next()); //3
// console.log(deleIterator.next()); //dunia
// console.log(deleIterator.next()); //tasneem
// console.log(deleIterator.next()); //{value:undefined, done :true}
for (val of deleIterator) {
  console.log("iterate over delegating iterable ", val);
} //start from the last yeilding value //dunia//tasneem
