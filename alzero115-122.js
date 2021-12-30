/*====================================video 115===========================================*/
/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

//1. array destructuring  -Destructuring Array-
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a, b, c, d, e] = myFriends; //update using destructuring
console.log(a); //"Ahmed"
console.log(b); //"Sayed"
console.log(c); //"Ali"
console.log(d); //4
console.log(e); //undefined
[a = "malek", b, c, d, e = "dunia"] = myFriends;
console.log(a); //"Ahmed"//still
console.log(e); //dunia

// let [x, y, z] = myFriends;
// console.log(x); //"Ahmed"
// console.log(y); //"Sayed"
// console.log(z); //"Ali"
let [x, y, z] = myFriends;
console.log(x); //"Ahmed"
console.log(y); //"Sayed"
console.log(z); //"Ali"

//if i want to print//"Ahmed", "Sayed","Maysa"

[x, y, , z] = myFriends;
console.log(x); //"Ahmed"
console.log(y); //"Sayed"
console.log(z); //"Maysa"

//if i want to print// "Sayed", "Ali"
[, y, z] = myFriends;
console.log(y); //"Sayed"
console.log(z); //"Ali"

/*====================================video 116===========================================*/
/*
  Destructuring
  - Destructuring Array Advanced Examples//scaping
*/
let myFriends2 = [
  "Ahmed",
  "Sayed",
  "Ali",
  ["Shady", "Amr", ["Mohamed", "Gamal"]],
];
//output Gamal
console.log(myFriends2[3][2][1]);

//destructruring ===>array(nested arrays)

[a, b, c, [d, e, [f, g]]] = myFriends2;
console.log(a); //"Ahmed"
console.log(b); //"Sayed"
console.log(c); //"Ali"
console.log(d); //"Shady"
console.log(e); //"Amr"
console.log(f); //"Mohamed"
console.log(g); //"Gamal"

//ignore Amr

[a, b, c, [d, , [e, f]]] = myFriends2;
console.log(a); //"Ahmed"
console.log(b); //"Sayed"
console.log(c); //"Ali"
console.log(d); //"Shady"

console.log(e); //"Mohamed"
console.log(f); //"Gamal"
//scaping in destructuring arrays
[, , , [a, , [, b]]] = myFriends2;
console.log(a); // Shady
console.log(b); // Gamal

let testing = ["dunia", ["manar", "dalia"], "rawaa"];

let [A, , B] = testing;
console.log(A); //"dunia"
console.log(B); // "rawaa"

/*====================================video 117===========================================*/
/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

//1.old way

let book = "Book";
let video = "Video";

//save book value in stash variable

// let stash = book;

// //save video in book

// book = video;

// //save stash in video

// video = stash;

// console.log(stash);
// console.log(book); //Video
// console.log(video); //Book

//2.swapping variables//destructuring array

[book, video] = [video, book];
console.log(book); //Video
console.log(video); //Book
/*====================================video 118===========================================*/
/*
  Destructuring
  - Destructuring Object
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
// };
// //accessing proparties of user obj
// console.log(user.theName);
// console.log(user["theAge"]);
// console.log(user.theTitle);
// console.log(user.theCountry);

//declare variable//save values of prparties in it

// let theName = user.theName;
// let theAge = user["theAge"];
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName); //"Osama"

// console.log(theAge); //38;
// console.log(theTitle); //"Developer"
// console.log(theCountry); // "Egypt"
//array
//let[]=[]//array name
//object destructuring
//inside { names of probarties}
//so to scapping just do not add the name of the peoparty (key)==>you don't want it
// ({ theName, theAge, theTitle, theCountry } = user);
// let { theName, theAge, theTitle, theCountry } = user; //without paranthesis()
// console.log(theName); //"Osama"

// console.log(theAge); //38;
// console.log(theTitle); //"Developer"
// console.log(theCountry); // "Egypt"

//scapping
// let { theName, theAge, theCountry } = user;

// console.log(theName); //"Osama"

// console.log(theAge); //38;
// // console.log(theTitle); //error//undefined
// console.log(theCountry); // "Egypt"
/*====================================video 119===========================================*/
/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};

//destructuring of the object

// let { theName, theAge, theTitle, theCountry } = user;

// console.log(theName);//"Osama"
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

//if i want to change the variable names//not matching proparties names

let {
  theName: aa,
  theAge: bb,
  theTitle,
  theCountry,
  theColor: co = "red",
  //destructuring of nested obj
  skills: { html: h, css: ll },
} = user;
console.log(aa); //Osama
// console.log(theName); //undefined

//like in array destructuring i can add //theColor
// console.log(theColor); //red==> if theColor not in the user //but if i have theColor in the user //then here in the destructuring i uadd another value of it //it will not updated and take the value from user obj
// console.log(theColor); //Black
console.log(co);

//destructuring for nested obj
// console.log(skills); //object{html:70,css:80}
// console.log(html);
// console.log(h); //70
// console.log(css); //80

//destructuring for the nested object just

const { html, css } = user.skills;
console.log(html);
console.log(css);

/*====================================video 120===========================================*/
/*
  Destructuring
  - Destructuring Function Parameters
*/
const user3 = {
  theName: "Osama",
  theAge: 39,
  skills: {
    html: 70,
    css: 80,
  },
};

//function accept obj(user as parameter )
// function showDetailes(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }
// showDetailes(user3);

//destructuring function parameters //when the function para is obj===>destructure it as you destructure any obj
function showDetailes({
  theName: n,
  theAge: o,
  skills: { css: cs = 900 },
  country = "jordan",
} = user3) {
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${o}`);
  console.log(`Your CSS Skill Progress Is ${cs}`);
  console.log(country); //add new
}

showDetailes(user3);

/*====================================video 121===========================================*/
/*
  Destructuring
  - Destructuring Mixed Content
*/
const user5 = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

({
  theName: b,
  theAge: l,
  //priparty ===>value of it is array
  skills: [, , a],
  addresses: { egypt: e, ksa },
} = user5);
console.log(`Your Name Is: ${b}`);
console.log(`Your Age Is: ${l}`);
console.log(`Your Last Skill Is: ${a}`);
console.log(`Your Live In: ${e}`);

/*====================================video 122===========================================*/
/*
  Destructuring
  - Challenge
*/

let chosen = 2; //1//2//3

let myFriends7 = [
  { titles: "Osama", ages: 39, availables: true, skillss: ["HTML", "CSS"] },
  {
    titles: "Ahmed",
    ages: 25,
    availables: false,
    skillss: ["Python", "Django"],
  },
  { titles: "Sayed", ages: 33, availables: true, skillss: ["PHP", "Laravel"] },
];

console.log(myFriends7[0].titles); //Osama
console.log(myFriends7[0].skillss[0]); //HTML
console.log(chosen);
console.log(myFriends7.length);
function info(arr) {
  if (0 < chosen <= arr.length) {
    let {
      titles,
      ages,
      availables,
      skillss: [, css],
    } = arr[chosen - 1];
    console.log(`tittle:${titles}`);
    console.log(`age:${ages}`);
    console.log(
      availables === true ? `available to work` : `not available to work`
    );
    console.log(`skills:${css}`);
  } else {
    console.log(`failled`);
  }
}

info(myFriends7);
