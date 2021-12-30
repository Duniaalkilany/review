//challenges 115-122
//challenge 1
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here

// let [a, b, c, d, e] = myNumbers;

// console.log(a * e); // 5

//challenge2
let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

// Write Your Destructuring Assignment Here

// [a, b, c, [d, e, [f, g]]] = mySkills;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

//challenge3
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
//1.make one array from the three
// arr3 = arr3.concat(arr2, arr1);
// console.log(arr3); //['Haytham', 'Shady', 'Mahmoud', 'Mohamed', 'Gamal', 'Amir', 'Ahmed', 'Sameh', 'Sayed']

// [, a, b, , , , c] = arr3;
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed

//challenge4
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// let {
//   age: a,
//   working: w,
//   country: c,
//   hobbies: [h1, , h3],
// } = member;
// // Write Your Destructuring Assignment Here

// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming

//challenge5
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};
//destructyring for the nested object release

let releases = Object.keys(game.releases); //array ['Oath In Felghana', 'Ark Of Napishtim', 'Origin']
console.log(releases);

let [o, a] = releases;
console.log(o);
console.log(a);

let values = Object.values(game.releases);
console.log(values); //[["USA", "Japan"],{US: "20 USD",JAP: "10 USD"},"30 USD"]
let [[u, j], { US: u_price, JAP: j_price }, or] = values;
console.log(u); //USA
console.log(j); //japan
console.log(u_price); //20
console.log(j_price); //10
console.log(or); //30
let { title: t, developer: d } = game;

// // Write Your Destructuring Assignment/s Here

console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in USA Is ${j_price}`);
// // Ark Of Napishtim Price in USA Is 10 USD

console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD

//challenge6
let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
console.log(myFriends.length);
function info(myFriends) {
  if (0 < chosen <= myFriends.length) {
    let {
      title,
      age,
      available,
      skills: [y, z],
    } = myFriends[chosen - 1];

    console.log(title);
    console.log(age);
    console.log(available === true ? "available" : "Not Available");
    console.log(z);
  } else {
    return;
  }
}

info(myFriends);
