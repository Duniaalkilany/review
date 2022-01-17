//import (recieve what i export (to use it here ))
//i should import what i exported in the module i want to use it in
//at the top of the file
// if i want to import all the things that i had exported from other module ====>import all
//when i import all i already import the named , default exported ===>aceess by all.name or all.default
//import in one line default named import default,{} from ""
//default without {}
//what i import i can acees it directly even default or named export / but if i import * i should aceess as "all/ever/.. " then what i need to import
//* as ""===>module contain every thing i exported (named or default )and it is a object

import { a, arr, sayHello } from "./modules.js";
import { baby, sayHi } from "./modules.js";
import * as all from "./modules.js"; // imporat all the thing that i exported from modules
console.log(all); //Module ,object have all thing exported
/*Module{a: (...)
    arr: (...)
    baby: (...)
    sayHello: (...)
    sayHi: (...)}

*/
console.log(typeof all); //object
console.log(all.arr);
console.log(all.a);
console.log(all.sayHello("dunia"));
for (let i in all.arr) {
  console.log(i);
}

//============================Modules Part 2 Import All And Aliases(اسماء المستعارة )=============================//

console.log(all["baby"]); //access all //access object
console.log(all.sayHi("mlak"));
//=======================Modules Part 3 Named Export vs Default Export===========================//
// import { dd, myArr } from "./modules.js";
// import names from "./modules.js"; // if i use { } it will not import ===> it say that module doesn not export this

//one line to import default then comma then named exported

// import names, { dd, myArr } from "./modules.js";
import obj, { dd, myArr } from "./modules.js";
console.log(dd);
console.log(myArr);

// console.log(names("sara"));
console.log(obj);
// console.log(obj.name);
// console.log(obj.age);
////======= when i import all i import default========
// import obj, * as all from "./modules.js";
//using by acees all .default
// console.log(all.default.name);
// console.log(all.default.age);
//or by adding  name for default ===>obj , * as all from
// console.log(obj.name);
// console.log(obj.age);
// console.log(all.default);
// console.log(obj);
