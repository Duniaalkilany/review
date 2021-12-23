//challenges 48-53
//challenge 1
let start = 10;
let end = 100;
let exclude = 40;

// Output
/*10;
20;
30;
50;
60;
70;
80;
90;
100;*/
// for (let i = start; i <= end; i += start) {
//   if (i === exclude) continue; //if i in this iteration ===40 exclude it and move to the next iteration
//   console.log(i);
// }

//challenge 2
start = 10;
end = 0;
let stop = 3;

// Output
/*10;
09;
08;
07;
06;
05;
04;
03;*/

// for (let index = start; index <= start; index--) {
//   if (index < stop) break;
//   if (index === start) {
//     console.log(index.toString());
//   } else {
//     console.log(`${end}${index}`);
//   }
// }
// for (let i = start; i >= stop; i--) {
//   if (i < start) {
//     console.log(`${end}${i}`);
//   } else {
//     console.log(i);
//   }
// }
//challenge 3
start = 1;
end = 6;
let breaker = 2;

// Output
/*1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4*/

// for (let i = start; i <= end; i++) {
//   console.log(i);
//   console.log(`--${breaker}`);
//   console.log(`--${breaker + breaker}`);
// }

//using nested for loop

// for (i = start; i <= end; i++) {
//   console.log(i);
//   for (let index = breaker; index <= breaker + breaker; index += breaker) {
//     console.log(`--${index}`);
//   }
// }

//challenge 4
let index = 10;
let jump = 2;
end = 0;

for (;;) {
  console.log(index);
  index -= jump;
  if (index < jump + jump) break;
}

// Output
/*10
8
6
4*/

//challenge 5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
/*"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"*/
let count = Number(true);
for (let i = Number(false); i < friends.length; i++) {
  // if (friends[i][+false] === letter.toUpperCase())
  if (friends[i].startsWith(letter.toUpperCase()) === true) {
    continue;
  }
  console.log(`${count}=>${friends[i]}`);
  count++;
}

//challenge 6
start = 0;
let swappedName = "elZerO";

// Output
//("ELzERo");

// for (i = start; i < swappedName.length; i++) {
//   if (swappedName[i].toUpperCase() === swappedName[i]) {
//     swappedName = swappedName.replace(
//       swappedName[i],
//       swappedName[i].toLowerCase()
//     );
//   } else {
//     swappedName = swappedName.replace(
//       swappedName[i],
//       swappedName[i].toUpperCase()
//     );
//   }
// }

// console.log(swappedName);

//in ternary way
for (i = start; i < swappedName.length; i++) {
  swappedName[i].toUpperCase() === swappedName[i]
    ? (swappedName = swappedName.replace(
        swappedName[i],
        swappedName[i].toLowerCase()
      ))
    : (swappedName = swappedName.replace(
        swappedName[i],
        swappedName[i].toUpperCase()
      ));
}
console.log(swappedName);

//challenge 7
start1 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
/*2;
3;
4;*/

// for (let i = 0; i < mix.length; i++) {
//   if (typeof mix[i] === "string" || mix[i] === +true) {
//     continue;
//   }
//   console.log(mix[i]);
// }
// for (let i = 0; i < mix.length; i++) {
//   if (typeof mix[i] === "string" || mix[i] === start + 1) {
//     continue;
//   }
//   console.log(mix[i]);
// }

//start from index 1

for (let i = ++start; i < mix.length; i++) {
  if (typeof mix[i] === "string") {
    continue;
  }
  console.log(mix[i]);
}

//challenges 54-56

//challenge 1
let friends1 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
index = 0;
let counter = 0;
// console.log(!friends1[index].startsWith("A"));
// Output
/*"1 => Sayed"
"2 => Mahmoud"*/
while (index < friends1.length) {
  if (typeof friends1[index] === "string" && !friends1[index].startsWith("A")) {
    counter++;
    console.log(`${counter}=>${friends1[index]}`);
  }
  index++;
}
