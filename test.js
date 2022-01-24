/*
-browser global object is (window)
- no need to explicity 
*/

console.log(window);
console.log(this);

function satHello() {
  return this; //refeer to the owner of sayHello function ===>window(global context)
}
console.log(satHello());
this.setTimeout(() => {
  console.log(`Hello`);
}, 2000);
// no need tp explicity type (window object /global object (context))
setTimeout(() => {
  console.log(`Hello`);
}, 2000);

console.log(this === window);

window.setInterval(() => {
  console.log(`i will run every 2 second `);
}, 2000);
//document is aproperty of window (global object) of browser ===> related to DOM (interact with html from js )
console.log(window.document.querySelector("h1"));
console.log(typeof window.document); //object
/*
window{
    //document property 
    document:{

    }
}
*/

//==================variable scope drama in browser ===========================//
//when i declare a variable using var in browser side it is added to window object //i can access it using window(global variable)
var test1 = "dunia";

console.log(window.test1);
//using let/const not added to window object/can not access it
let aVar = "duniaa";
console.log(window.aVar); //undefined

let arr = [1, 2, 3];
console.log(arr.at(0));
