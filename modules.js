/*module ===>is just a file containing related code
using export / import key words to  share and receive functionalities respectively across different modules.
 The export keyword is used to make a variable, function, class or object accessible to other modules

to make the bellow accessable ==>for other modules (files )

different between import /require 

1. import/export ===>ES6
- i can import just at the top of file ??make sure ????
-i can import just the part i want (i can just extracts(the part i want (vars,funs,classes,objs)))
2.require/module.export(old school) ===> old scholl for  import code from other modules (files )
- i can require any where in the program 
-in old node js the whole js file are required /you can not extract or require just a part 
but later i can use destructuring and require the part i want ofjs file 
- i can use ES6 import with node.js 


*/

//export variable using export kewward (share )
export const a = 1;
//export array
export let arr = [1, 2, 3, 4, 5, 6];
//export function
export function sayHello(name) {
  return `hello ${name}`;
}

//another way to export
// export { a, arr, sayHello };
//============================Modules Part 2 Import All And Aliases(اسماء المستعارة )=============================//

const b = 100;
function sayHi(name) {
  return `hi ${name}`;
}

let c = [1, 2, 3, 4, 5]; //it not exported//when i impoet all in the other modules this arrr will not apeare in Module or object which * import as
//aliase wth export

//if i use aliase when i imprt it i import aliase name
export { b as baby, sayHi };

//=========================Named Export vs Default Export==================//
//each module i can use default export once
//named export
const d = 200;
const myArr = [1, 2, 3, 4, 5];
export {
  //Aliase for d
  d as dd,
  myArr,
};

//default export
//default value exported from this module //i can import it any where without { }and with any name because it is default any name i will use it when i import it will point to to it
// i can default export any type of data

// export default function sayName(name) {
//   return ` ${name}`;
// }

// let obj = {
//   name: "dunia",
//   age: 24,
// };
// export default obj;

let v = 200;
export default v;
