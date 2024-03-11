/*==========================video 48====================================*/
/*
  Loop //used to save time 
  - For
  for ([1] [2] [3]) {
    // Block Of Code
  }
*/

//loop is important with arrays
//[1]===>initialization
//[2]===>condition/ false mean stop !
//[3]===>action

//write a programe to print in console numbers from 0-9//10 employee//id start from 0
//if i dont do an action or not assighn new value for i if the conition true or i say i+1 i will have infinte loop //because i still 0//condition will remain true//loop will continue to infinity.
for (let i = 0; i < 10; i++) {
  console.log(i);
}

/*==========================video 49====================================*/
/*
  Loop
  - Loop On Sequences//(string,array,...)
*/

let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]);
}

//if i want to print just names(strings of the array)
for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    console.log(myFriends[i]);
  }
}

//print array of names

for (let index = 0; index < myFriends.length; index++) {
  if (typeof myFriends[index] === "string") {
    onlyNames.push(myFriends[index]);
  }
}
console.log(onlyNames);

/*==========================video 50====================================*/
/*
  Loop
  - Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log(`# ${products[i]}`);
  //each element of the main for loop will have elements of nested loops
  console.log("colors:");
  for (let index = 0; index < colors.length; index++) {
    console.log(`${colors[index]}`);
  }
  console.log("models");
  for (let k = 0; k < models.length; k++) {
    console.log(`${models[k]}`);
  }
}

/*==========================video 51====================================*/
/*
  Loop Control
  - Break//stop the loop
  - Continue//exclude iteration and continue
  - Label
*/

products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

colors = ["Red", "Green", "Black"];
//break
for (let i = 0; i < products.length; i++) {
  console.log(products[i]); //print
  if (products[i] === "Pen") {
    break; //stop the loop //out of for loop
  }
}
//continue
products = ["Keyboard", "Mouse", 10, 20, "Pen", "Pad", 30, 40, "Monitor"];
for (let i = 0; i < products.length; i++) {
  if (typeof products[i] === "number") {
    continue; //move from this iteration and go to the next iteration
  }
  console.log(products[i]);
}

//label

products1 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
MainLoop: for (let i = 0; i < products1.length; i++) {
  console.log(products1[i]);
  nestedLoop: for (let index = 0; index < colors.length; index++) {
    console.log(`- ${colors[index]}`);
    if (colors[index] === "Green") {
      break; //if color===green //break the nested loop
    }
  }
}

//control main loop from nested //if color ===green bearl main

MainLoop: for (let i = 0; i < products1.length; i++) {
  console.log(products1[i]);
  nestedLoop: for (let index = 0; index < colors.length; index++) {
    console.log(`- ${colors[index]}`);
    if (colors[index] === "Green") {
      break MainLoop; //if color===green //break the main loop//so just iteration 0 will print
    }
  }
}

/*==========================video 52====================================*/

/*
  Loop For Advanced Example
*/

products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

//in for you can write the syntax in different ways
//1. you can initialization out side for loop so you can use it glopally
let i = 0;
console.log("products:");
for (; i < products.length; i++) {
  console.log(` ${products[i]}`);
}

//2. increment > i++===> you can write inside for loop .

i = 0;
console.log("#products:");
for (; i < products.length; ) {
  console.log(` ${products[i]}`);
  i++;
}

//condition //i<product.lenght //when i ===product.lenght ===>stop for loop ===>break

i = 0;
console.log("**products:**");
for (;;) {
  console.log(products[i]);
  i += 2;
  if (i === products.length) break;
}
/*==========================video 53====================================*/
/*
  Products Practice
*/

products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
colors = ["Red", "Green", "Blue"];
let showCount = 5;

document.write(`<h1>show ${showCount} products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write("<div>");
  document.write(`[${i + 1}] ${products[i]}`);
  for (let index = 0; index < colors.length; index++) {
    document.write(`<p>-${colors[index]}</p>`);
  }
  document.write(`<p>${colors.join("|")}</p>`);
  document.write(`</div>`);
}
/*==========================video 54====================================*/
/*
  Loop
  - While
*/
products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

//1onitialization
let index = 0;
//condition ===> true ===>looping===>false===>stop /break
while (index < products.length) {
  console.log(`${index + 1}-${products[index]}`);
  //condition//increament//if i did not update it it will be infinite loop
  index += 1;
  //break
  if (index === 3) break;
}
/*==========================video 55====================================*/
/*
  Loop
  - Do / While
*/

products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

i = 0;
//while
while (i < 10) {
  console.log(i);
  i++;
}

while (false) {
  console.log(i);
  i++;
}

//do-while
//do first then check //so the first level will happen at all conditions
i = 0;
do {
  console.log(i); //0
  i++;
} while (false);
console.log(i); //11

/*==========================video 56====================================*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];
// myAdmins = myAdmins.splice(myAdmins.indexOf("Stop"));//my admins will be the removed items because splice return new aaray of removed elements
myAdmins.splice(myAdmins.indexOf("Stop"));

console.log(myAdmins);

document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
document.write(`<hr>`);
for (i = 0; i < myAdmins.length; i++) {
  document.write(`<p>The Admin of Team${i + 1} is ${myAdmins[i]}`);
  document.write(`<h1>Team Members :</h1>`);
  let count = 1;
  for (let index = 0; index < myEmployees.length; index++) {
    if (myAdmins[i][0] === myEmployees[index][0]) {
      document.write(`<h3> ${count}-${myEmployees[index]}</h3>`);
      count++;
    }
  }
  document.write("<hr>");
}
