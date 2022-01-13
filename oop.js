/*
OOP===> object oriented programming (paradigm or style the code)===>)(طريقة لكتابة الكود )===> OPP is not a language or tool id a a paradigm the code.
use the concepot of object ===> to desighn computer program
js/java/python /c sharp /c++
===>OOP===>programming paradigm //(style of programming) cantered around objects rather than functions 
===>Four Pillars/concepts of OOP:
 1.Encapsulation ==>(in OOP we grouped all related variables and functions in one unit called objects )
 2.Abstraction,
 3. Inheritance, 
 4.Polymorphism.

*/
//============================1.encapsulation/reduce complexity/increase reuseability(reuse the object in different part of program or in differen programmes)=======================================
//procedural programming ===> variables/ function
let baseSalery = 500;
let overTime = 10;
let rate = 20;

function getWage(baseSalery, overTime, rate) {
  return `Wage: ${baseSalery + rate * overTime}`;
}
//in OOP==>object(related variables/functions in a group ===># of parameters in my function less )
let Wage = {
  baseSalery: 500,
  overTime: 10,
  rate: 20,
  //note that getWage function is without parameters ===> because this parameters is already declared as proparties
  //so in OOP (fewer parameters )//best functions is this with no paerameters so OOP is efficent to make the # of parameters in functions less
  getWage: function () {
    return `Wage: ${this.baseSalery + this.rate * this.overTime}`;
  },
};
//============================2.Abstraction(hide details and complixity and show onlythe essentials)=======================================
/*hide some proparties and methods from the outside
two benefits of Abstraction
1.simpler interface===>make the interface of object simpler===> understanding object with a few methods
and proparties is easier than object with several proparties and methods
2.reduce the impact of change ===>if i change these inner or private methods none of thses changes
will leak to the outside because we do not have any code that touchesthse methods outside of 
their content object , so you can delete a method , edit it /change it is parameyers but none of 
thses changes will impact the rest of the application code 

//============================3.inheritance(reusable)=======================================
===> inheritance is a mechanism  allowes you to eliminate the redundant code
//parent/childs(delivered)===> if i have objects have same proparties and methods ===> if i rewritr
these methods.proparties each time i will have redundant code so i declare parent class then child classes inherit these proparties/methods from it 

//============================4.Polymorphism===>(many forms)//refactor of ugly (swich case statements)=======================================
poly===>many
morphism==>form
polymorphism===>technique that allows you to get rid of long ethanols or swich and case statements


/*
procedural programming vs OOP(بشكل عام بغض النظر عن )
procedural programming
1.programe devided into variables and functions //devided function into set og functions 
2.overloading is not possible 
3.hiding data not possible
4.data is sepearated

OOP:
1.program devided into obj (combined group of related variables(proparties) and functions(methods) in one unit called object)
2.overloading is possible  
3.hiding data is possible
4.data not sepearated (in one location)===> i have class (have all probarties and all methods )
*/

/*why OOP:
1.large and complex software architecture in organized way 
2.create reusable objects to use in application easily with inheritance 
*/
/*
1.class /object
2.object methods
3.instantiation
4.prototype
5.inheritance 
*/

/*
  Defining Object/craeate object/collection of key:value pairs
  [1] Object Literal
  [2] With New Keyword
  [3] With Object.create()
  [4] With Object.assign()
  

*/

let user = {
  //proparties//key:nalues,
  firstName: "dunia",
  lastName: "alkilany",
  age: 25,
  "name of country": "jordan ",
  //methods===>action //functions
  fullName: function () {
    // document.write(`<h1>${user.firstName} ${user.lastName} hello </h1>`);
    return `${user.firstName} ${user.lastName}`;
  },
};

/* Accessing Object Properties
1- Dot Notation vs Bracket Notation
*/

console.log(user.firstName); //dunia
console.log(user["lastName"]); //alkilany
// console.log(user[lastName]); // lastName is not defined
console.log(user.age); //25
console.log(user["name of country"]); //jordan
/* Accessing Object Methods
dot notation
bracket notation
*/
console.log(user.fullName());
console.log(user["fullName"]());

console.log(typeof user.fullName); //function

//nestef objects

user = {
  //proparites
  firstName: "Osama",
  lastName: "Elzero",
  age: 37,
  //nested object//has proparties and methods
  addresses: {
    eg: "Giza",
    usa: "California",
    ksa: "Riyadh",
    names: ["dunia", "alkilany"],
    getMainAddress: function () {
      return `Main Address Is In Egypt In City ${user.addresses.eg}`;
    },
  },

  // Methods
  // getFullName: function () {
  //   return `Full Name: ${user.firstName} ${user.lastName}` ;
  // },
  getFullName: () => `Full Name: ${user.firstName} ${user.lastName}`,

  getAgeInDays: () => `Your Age In Days Is ${user.age}`,
};
// Accessing Object Properties/methods

console.log(user.firstName);
console.log(user["lastName"]);
console.log(user.age);
console.log(user.addresses);
console.log(user.getFullName());
console.log(user.getAgeInDays());
console.log(typeof user.addresses); //object
//accessing proparties/methods of the nested object
console.log(user.addresses["eg"]); //"Giza"
console.log(user["addresses"].usa); //"California"
console.log(user["addresses"]["ksa"]); //"Riyadh"
console.log(user.addresses.getMainAddress()); //Main Address Is In Egypt In City Giza
console.log(typeof user.addresses.getMainAddress()); //string//because of type of output
console.log(typeof user.addresses.getMainAddress); //function
console.log(user.addresses["names"].join("**"));
console.log(user["addresses"]["getMainAddress"]());

/*
 Dot Notation vs Bracket Notation
 dot notation is better and faster
*/
let myObj = {
  One: 1,
  Two: 2,
  "Two!-": 2,
};

console.log(myObj.One); //1
console.log(myObj.Two); //2

/*1. i can not use special chara or spaces in identifier , and if my proparty key have this charecters i can use "keyName"and access it by bracket notation .
 */

console.log(myObj["Two!-"]); //2
/*
2.if the keys is numbers i cant accees it using dotNotation //identifier can not start with number/or be number 
*/
let myObj2 = {
  1: "One",
  2: "Two",
};
console.log(myObj2[1]); //"One"
console.log(myObj2["2"]); //"Two"

/*
 3- Dynamic Property Name
*/

let myVariable = "name";

let obj = {
  name: "dunia",
};
console.log(obj.name); //dunia

console.log(obj.myVariable); //undefined
console.log(obj[myVariable]); //dunia
console.log(obj["name"]); //dunia

//==============================[2]new keywoed============================================//

/*
1.empty object then add methods and proparties
2.directly add proparties/methods
*/

let user2 = new Object();
// let user2=new Object({}) i can do like this
console.log(user2);
//adding proparties/methods to empty object
user2.first = "dunia";
user2["last"] = "kilany";
user2.age = 25;
user2.getFullInfo = () => `${user2.first} ${user2["last"]}`;
user2.getAge = function () {
  return `${user2.age}`;
};
console.log(user2);
console.log(typeof user2.getFullInfo);
//accessing
console.log(user2.getFullInfo());
//updating proparties
user2.first = "malek";
console.log(user2);

//==============================[2]Object.create()============================================//

let mainObj = {
  hasDiscount: true,
  showMsg: function () {
    // return `You${mainObj.hasDiscount ? "" : " Don't"} Have Discount`;
    return `You${this.hasDiscount ? "" : " Don't"} Have Discount`;
  },
};

console.log(mainObj.hasDiscount);
console.log(mainObj.showMsg());

/*i can use the previouse obj as prototype===>نموذج 
prototype===>نموذج )(الاوبجيكت المثال او النموذج الذي انشات منه الاوبجيكت الجديد
*/

let crateedObj = Object.create(mainObj);
console.log(crateedObj); //prototype==>[object]
console.log(crateedObj.hasDiscount); //true
//updated the hasDiscount prop
crateedObj.hasDiscount = false;
console.log(crateedObj);
console.log(crateedObj.hasDiscount); //false
console.log(crateedObj.showMsg()); //i have problem here==>this method related to the prototype obj(main obj)===>to solve this problem i use this inside methods .
//when i updated the created object //prtotype stay the same
let lastObj = Object.create(mainObj);
console.log(lastObj);
console.log(lastObj.hasDiscount);
console.log(lastObj.showMsg());
// i can add new proparties/methods to the created obj
lastObj.firstaProp = "testing";
lastObj.printing = function () {
  return `print ${this.firstaProp}`;
};
console.log(lastObj);
console.log(lastObj.printing()); //print testing

//==============================Object.assighn================================//
//syntax===>let assignedObj=Object.assign(target(copy to it),srcObj)
//assign ===>copy to target object
//create new obj
const src1 = {
  prop1: "Value1",
  prop2: "Value2",

  method1: function () {
    return `Method 1`;
  },
};

const src2 = {
  prop3: "Value3",
  prop4: "Value4",
  method2: function () {
    return `Method 2`;
  },
};

const target = {
  prop5: "Value5",
};

// Object.assign(target, src1);

/*{prop5: "Value5", prop1: "Value1",
prop2: "Value2",
 
method1: function () {
  return `Method 1`;
},}
*/

// Object.assign(target, src1, src2);
// console.log(target);
//also i can add object directly to target

// Object.assign(target, src1, src2, { prop6: 6, prop7: 7 });
// console.log(target);

//now how can i create new  object use assign

let assigned = Object.assign({}, target, src1, { prop7: 7 });
console.log(assigned);
/*
{ prop5: "Value5",
 prop1: "Value1",
  prop2: "Value2",

  method1: function () {
    return `Method 1`;
  },
}
*/

let ob1 = {
  prop1: 1,
  prop2: 2,
};

let ob2 = {
  prop3: 3,
  prop4: 4,
};

let ob3 = {
  prop1: 5,
  prop5: 6,
};

let newOb = Object.assign(ob3, ob1);
console.log(ob3);
console.log(newOb);
/*
target(ob3)===>updated i copy /assigned to it {
    prop1:1,prop5=6, prop2:2
}
then output of this assigned operation is newOb
{
    prop1:1,prop5=6, prop2:2
}
*/
//================================ Delete Operator =========================================//
//use it to delete proparties(key:value)fron the obj
//return true/false
//work with dot/bracket notation
const user3 = {
  name: "dunia",
};

console.log(user3);
console.log(user3.name);

// delete user3; //delete proparty not object//like this nothing will delete

// delete user3.name;
// console.log(user3.name); //undefined
// delete user3["name"]; //delete name prop

// console.log(user3.name); //undefined
// console.log(user3); //empty user

console.log(delete user3["name"]); //true//deleted
console.log(user3.name); //undefined
console.log(user3);
console.log("#".repeat(20));
/*when i can not use delete===>not deleted===>return false
1.with const/let/var
2.freeze object//Object.freeze()
3.defineProperty//configurable flag===>false===>Object.defineProperty(obj,"key",{value:,configurable:})
*/

const userName = "dunia alkilany";
console.log(delete userName);
console.log(userName);
console.log("****".repeat(10));

let userName2 = "maleek";
console.log(delete userName2);
console.log(userName2);
console.log("****".repeat(10));

var userName3 = "hussam";
console.log(delete userName3);
console.log(userName3);

console.log("#".repeat(20));

let freezedObj = Object.freeze({ age: 25 });
console.log(freezedObj);
console.log(delete freezedObj.age);
console.log(freezedObj.age);

let obToFreez = {
  user: "DK",
};

Object.freeze(obToFreez);
console.log(obToFreez);
console.log(delete obToFreez.user); //false
console.log(obToFreez.user);

console.log("#".repeat(20));
let eObj = {};
Object.defineProperty(eObj, "userName", {
  value: "duniaaa",
  configurable: false,
});

console.log(eObj);
console.log(delete eObj.userName); //false//configurable:false===>can not delete
console.log(eObj.userName);

let eObj2 = {};

Object.defineProperty(eObj2, "user", { value: "manar", configurable: true });
console.log(eObj2);
console.log(eObj2["user"]);
console.log(eObj2.user);
console.log(eObj2.user); //manar
console.log(delete eObj2.user); //true
console.log(eObj2.user); //undefined

//======================================for...In ==============================================//
/*
  For ... In Loop
  Loop Through The Properties Of The Objects
*/

const user5 = {
  name: "dunia",
  country: "jordan",
  age: 24,
};

let finalData = "";

for (let prop in user5) {
  //   console.log(prop); //name,country,age===<strings
  //   console.log(user5[prop]); //use bracket notation
  //   console.log(`${prop} the value is ${user5[prop]}`);
  finalData += `<h2>${prop} the value is ${user5[prop]}**</h2>`;
  //   console.log(finalData);
}
console.log(finalData); //name the value dunia**country the value jordan**age the value 24**
// document.getElementById("info").innerHTML = finalData;
//another examolr about for In loop ===>loop through object proprties and values

let newOb2 = {
  1: "dunia",
  2: "dalia",
  3: "manar",
  4: "rawaa",
  "5!": "malek",
};

let data = "";

for (let i in newOb2) {
  console.log(i); //keys//1,2,3,4,5!===>returned as strings
  console.log(newOb2[i]);
  data += `<h2>${newOb2[i]} </h2>`;
}
console.log(data); //names:dunia dalia manar rawaa malek
document.getElementById("info").innerHTML = data;
// i use for in to iterate in objects and arrays

//=========================================constructor function===========================================//
/*
  Constructor Function===>to create objects (values of the proparties is differ)
-syntax
function (FunctiobName(bascal naming))(proparties keys){

}

*/

function Phone(serial, color, price) {
  //this parameters is the value of the proparties//get the values from arguments
  //proparties names
  //related to each object created by this constructor

  this.serial = serial;
  this.color = color;
  this.price = price - 10;
}
//create objects/instans/using new
let phone1 = new Phone("123", "red", "100"); //arguments for phone(values for properties)
console.log(typeof phone1); //object
console.log(phone1);
//if i want to update price of all phones (discount 10)
let phone2 = new Phone(123, "black", 200);
console.log(phone2);
// //=============================================================================================================
function Phones(serial) {
  console.log(this); // this is The Created Object From The Constrcutor Function
  this.serial = `#${serial}`;
}

//craete objects ===>using constructor

let phone3 = new Phones(123456); //log phones{}//constructor have log this
let phone4 = new Phones(123457); //log phones{}//constructor have log this
//here the constructor ===>log this===>this related to the object created by the constructor ===>so i will log the object{}

console.log(phone3); //Phones {serial: '#123456'}
console.log(phone4);
let phone5 = Phones(125698);
//this===>when i call Phones(125698) without new //no object created so this reffer to the owner===>window object
console.log(phone5); //undefined
// console.log(phone5.serial); //undefined
console.log(window.serial); //125698
//===================================constructor property=================================================
/*constructor ====>create instances (نسخة او نموذج منه)
instanceOf===>to check the instance /constructor related to each other
1.instanceof
2.nameOfInstance.constructor===nameOfConstructor
**all objects have constructor property===>reffer to the constructor which created this object
*/

console.log(phone3 instanceof Phones);
console.log(phone5 instanceof Phones);
console.log(phone3.constructor === Phones);
console.log(phone1.constructor === Phones);
console.log(phone1 instanceof Phone);

//====================================== constructor function dealing with proparties======================================================
/*
  Constructor Function
  Dealing With Properties
 
*/
function UserInfo(fName, lName, age, country) {
  this.fName = fName;
  this.lName = lName;
  this.age = age;
  this.country = country;
  //have prop with statuc value for all instances , no need to use para,argument
  this.job = "Engineering";
  //method
  this.fullName = function () {
    return `Full Name : ${this.fName} ${this.lName}`;
  };
  this.ageInDays = function () {
    return `${this.age * 365}`;
  };
}
//if i did not pass arguments for the constructor parametrs
//objects created /but the values of the proparties (keys)===>undefined

// let use1 = new UserInfo();
// let use2 = new UserInfo();

let use1 = new UserInfo("dunia", "kilany", 24, "jordan");
let use2 = new UserInfo("malek", "kilany", 24, "jordan");
console.log(use1); //UserInfo{}
console.log(use2); //UserInfo{}

//adding proparties to the constructor
//add country prop to all instances //add directly to the constructor

//adding method to constructor
console.log(use1.fullName());
console.log(use2.fullName());
console.log(use1.ageInDays());

//==============================================================================================
/*
  Constructor Function

  Trainings
*/

function Userr(name, email, age, show) {
  //i can add another parametrs to use in the methods /not values for proparties like show
  this.name = name;
  this.email = email;
  this.age = age;
  //updating propareties
  this.updateName = function (newName) {
    if (this.age > 18) {
      this.name = newName;
    } else {
      console.log(
        `you can not update name you're age:${this.age} less than 18 `
      );
    }
  };

  this.showMail = function () {
    if (show === true) {
      return `email=${this.email}`;
    } else {
      return `Data Is Private`;
    }
  };

  this.deleteEmail = function () {
    if (this.age > 18) {
      delete this.email;
    } else {
      console.log(`you can not delete it `);
    }
  };
}

let userr1 = new Userr("dunia", "dunia@gmail.com", 24);
console.log(userr1);
console.log(userr1.name);
userr1.updateName(); //did not pass argu for newName para/undefined
userr1.updateName("dodo"); //did not pass argu for newName para/undefined
console.log(userr1.name);
console.log(userr1);

let userr2 = new Userr("basel", "basel@gmail.com", +"15");
console.log(userr2);
userr2.updateName("basool");
console.log(userr2.name);
// console.log(userr1.showMail(true));
// console.log(userr1.showMail(false));
let userr4 = new Userr("hussam", "hussam@gmail.com", 20);
console.log(userr4);
console.log(userr4.showMail()); //if i did not pass para for show !==true so else (Data is private)
//delete proparties
userr1.deleteEmail();
console.log(userr1);
console.log(userr1.email);
console.log(userr2);

//====================================================================================

/*
  Constructor Function 80%
  Built In Constructors
*/

//============================prototype 1==========================================================//
/*
there is some thing called prototype ==> inside theobj ==> related to the function inside the object
so the new way to build the method // instead to build the method or function inside the object or tje 
constructor function // i build it outside the construtor  function but its related to the constructor  called it  prototype //decleare a function oytside the constructor

build prototype outside the constructor // i can use this keyword inside the prototype //cause it is related 
to the constructor 

*/

function Users(name) {
  this.name = name;
  this.welcome = function () {
    return `Welcom ${this.main}`;
  };
}
//create instances
let u1 = new Users("dunia");
let u2 = new Users("sara");

//what is prototype
console.log(Users.prototype); //{constructor: ƒ}

function sayHello() {
  console.log(`hello`);
}
console.log(sayHello.prototype); //{constructor: ƒ}

/*so prototype is a property for a function ===>and it is object {constructor:f}
(in prototype object===>proparty:value//proparty is constructor/value is  the function )
/each instance created from the constructor will inherit all properties of  constructor proptotype 
 */
//this arr is instance of Array constructor
const arr = [1, 2, 3, 4, 5];
console.log(arr.constructor); //ƒ Array()//the constructor which build this array
console.log(Array.prototype); //all proparties of Array constructor
//arr is instance so it can inherit all the proparties in Array.prototype(constructor)
console.log(arr.reverse()); //i use push method which related to Array constructor

//=======================prototype2//add methods/properties to Prototype Chain============================================================//
function User_(name) {
  this.name = name;
  this.welcome = function () {
    return `Welcome ${this.name}`;
  };
}
let user_1 = new User_("Osama");
let user_2 = new User_("Ahmed");
console.log(user_1);

console.log(User_.prototype);

//add new method /proparty to the constructor
User_.prototype.addTittle = function () {
  return `hello ${this.name}`;
};

console.log(User_.prototype); //{addTittle: ƒ, constructor: ƒ}
//when i add new method to the constructor ===>added to the prototype
//as we said each instance will inhert the constructor prototype properties and methods so the instance will have access to the new method

console.log(user_1.addTittle()); //hello Osama

//one of the built in onstructors is Object/Number/String
console.log(Object.prototype);
//if i want add method to Object constructor
// Object.prototype.helloObject = function () {
//   return `hello Object`;
// };
// Object.prototype.type = "Object";
// let obj1 = new Object();
// console.log(obj1.helloObject()); //hello Object
// console.log(obj1.type); //"Object"

let obj2 = { 1: "one", 2: "two" };
// console.log(obj2.type);
// console.log(obj2.helloObject());
console.log(obj2);
console.log(obj2.constructor); //ƒ Object() { [native code] }

//========================= Extend Constructors Features========================================//

console.log(String.prototype);

let myString = "dun";
//if i want to add new method to String constructor//all created strings access (inherit) this method
//this ===>this is the instance created so if i build string called myString from the String constructor /this inside the constructor reffer to this instance
String.prototype.zFill = function (width) {
  let result = this; //string created by String constructor
  console.log(result);
  while (result.length < width) {
    result = `0${result}`;
  }
  return result.toString();
};

console.log(myString.zFill(5));
let str2 = "manar";
console.log(str2.zFill(10)); //00000manar
console.log("malek".zFill(10)); //00000malek

//add another method to String prototype
String.prototype.sayYouLoveMe = function () {
  return `hello ${this} we love you `;
};

console.log("dunia".sayYouLoveMe());

String.prototype.howLong = function () {
  return `your length:${this.length}`;
};

console.log("dunia".howLong());

//==========================================Prototype chain===========================================//
/*
  Prototype
  [1] Every Object Has A Prototype
  [2] Prototype Chain Ends With Object.prototype
  [2] In Javascript Function Is Object
*/

function UInfo(name) {
  /*
    [1] Create Empty Object
    [2] Assign The New Object To this Context
    [3] New Object Created Prototype = Function Prototype
    this = {};
    this.__proto__ = User.__proto__
  */
  this.name = name;
  /*
      [4] Return The New Object
      return this
    */
  //if i want to show error that you not use new

  // if (!(this instanceof UInfo)) {
  //   // console.log("Error");
  //   throw new Error("Must Be Called With New Keyword");
  // }
  //ES6
  if (!new.target) {
    throw new Error("missing new keyword");
  }
}

let u = new UInfo("dunia"); //new object /instance
console.log(UInfo.prototype);
console.log(u);

let myArr = [1, 2, 3, 4];
console.log(myArr);
console.log(Array.prototype);
//if i create new instance with out new  //if i want to show error that you not use new
// let uu = UInfo("dalia"); //nothing will happen//no object created
// console.log(uu); //undefined
//if i want to show error that you not use new

//===============================Class Syntax And Introduction=============================//
/*
class syntax===>ES6
another syntax ===>same result as constructor function 
so class is constructor to create objs//same standers (معايير) to other programmeing languages 
*/

//classic constructor function
//important thing i can create instances before constructor declearation
// let info1 = new Info("dunia", "d@gmail.com");
// let info2 = new Info("doodo", "doodo@gmail.com");
// function Info(name, email) {
//   this.name = name;
//   this.email = email;
//   this.sayHi = function () {
//     return `hi ${this.name}`;
//   };
// }

//constructor function ===>quick fix (convert construction to class ES6(2015))

//class syntax
class Info {
  //my constructor function
  constructor(name, email) {
    this.name = name;
    this.email = email;
    // this.sayHi = function () {
    //   return `hi ${this.name}`;
    // };
  }
  //methods//inside prototype
  sayHi() {
    return `hi ${this.name}`;
  }
  showEmail() {
    return `${this.email}`;
  }
}
//create instances from class
//1.but i can not create it before class //should after class decleration//can not access class before initialization for it
let info1 = new Info("dunia", "d@gmail.com");
let info2 = new Info("doodo", "doodo@gmail.com");
console.log(info1);
console.log(info2);

//2.writing methods/no comas /after constructor

//=========================== Class Static Properties And Methods===========================//

class UserClass {
  //static proparties//startt with static
  static counter = 0;

  constructor(name, email, counter) {
    this.name = name;
    this.email = email;
    //this counter prpoarty related to the created instances
    this.counter = counter;
    //i can not write this.counter++//cause this inside constructor related to the created object ===> object did not have counter proparty ===> cunter is static proparty related to the class it self
    UserClass.counter++;
  }

  sayHello() {
    return `hello${this.name}`;
  }

  showMail() {
    return `your email : ${this.email}`;
  }

  //static method
  static countObjects = function () {
    //this inside the static methods is the class (تعود عل class )==>not created objects
    //this.counter===> mean class.counter===UserClass.counter
    return `${this.counter} objects created by the class`;
  };
}
let userClass = new UserClass("dunia", "dd@gmail.com", 2);
console.log(typeof UserClass); //function
console.log(userClass instanceof UserClass);
console.log(userClass.constructor === UserClass);
console.log(userClass);
console.log(UserClass.prototype);
console.log(UserClass === UserClass.prototype.constructor);
// i don not have to add error when i do not write new//automatically

// let userClass2 = UserClass("dunia", "dd@gmail.com"); //Class constructor UserClass cannot be invoked without 'new'

function Testing(name) {
  this.name = name;

  // if (!(this instanceof Testing)) {
  //   console.log(`constructor can not be invoked wit out new keyword`);
  // }

  // if (this.constructor !== Testing) {
  //   throw new Error("constructor can not be invoked wit out new keyword");
  // }
  if (!new.target) {
    //ES6
    throw new Error("constructor can not be invoked with out new keyword");
  }
}

// let test = Testing("duniaa");
//no need to do the previouse with class syntax

//static proparties /methods ===>something related to the class it self not objects/instances created by it
// console.log(userClass.countObjects()); //not function //not related to the created object

//to access ststic methods /proparties i use classname.
console.log(UserClass.countObjects());
console.log(UserClass.counter); //1===>counter ===>static proparty related to class
console.log(userClass.counter); //2===>proparty related to created instances

//=========================== Class Inheritance===========================//
/*
  Class
  Inheritance
  
  -parent class
  -chils class/drived class
*/
//parent class
class AppUsers {
  constructor(name, email, counter) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `hello ${this.name}`;
  }
  showEmail() {
    return `email : ${this.email}`;
  }
  writeMsg() {
    return `msg from parent class `;
  }
}
//child class
class Admin extends AppUsers {
  //Admin class(child)==>extends(inherit) from parent(AppUsers)
  ////extends for all proparties
  constructor(name, email) {
    //super//call parent constructor /can access proparties of it
    super(name, email);
  }
  adminMsg() {
    return `You Are Admin`;
  }
  //i have on method in the parent class then i override it in the admin class
  //method override
  writeMsg() {
    return `msg from derived(child) class `;
  }
}
let admin1 = new Admin("malek", "m@gmail.com");
console.log(admin1);
//access on parent class proparties
console.log(admin1.name);
console.log(admin1.email);

//access on parent class methods
console.log(admin1.sayHello());
console.log(admin1.showEmail());
//i have on method in the parent class then i override it in the admin class
console.log(admin1.writeMsg());
console.log(admin1.adminMsg());

//=======================================getter/setter====================================//
/*
  JavaScript Accessors
  Getters & Setters
*/

class G_STesting {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }

  //using get with class methods ===>convert it from method to property//combuted property//simple syntax
  get showInfo() {
    return `Name: ${this.name}, Email" ${this.email}`;
  }
  changeName(newName) {
    this.name = newName;
  }
  //from method to property
  //method need parameter
  set changeEmail(newEmail) {
    this.email = newEmail;
  }
}
let test1 = new G_STesting("dunia", "d@gmail.com");
// console.log(test1.showInfo()); //after using get //error==>test1.showInfo is not a function
console.log(test1.showInfo);

test1.changeName("doooodo");
console.log(test1.name); //doooodo

test1.changeEmail = "bbb@gmail.com";
console.log(test1.email);

console.log(test1.showInfo);

//get /set ===> method===>combuted/dynaminc proparty ===>so i have better syntax

//if i have privet proparty (can not acees to it out side class )//using get i can access it (inside)==>js do not support privete proparty

//============================ Object Metadata And Descriptor=========================//
/*
  Object Meta Data(معلومات عن معلومات )
  attributes:
  writable
  enumerable//can loop on it
  configurable
  value
  ============
  Object.defineProperty(obj, prop, descriptor)//to control my property 
*/
//each proparty in the oject have attribute(like value,configurable,...)
//static method for object ===>defineProperty()===>define new prop or edit prop in the object
const myObj4 = {
  a: 1,
  b: 2,
};

//define newProperty in this object

Object.defineProperty(myObj4, "c", {
  // descriptor attributes
  configurable: true, //ca not delete it if false ///delete operator return false//alsr if i want to configure// redefined //this proparty if configurable false can not redefined this proparty //to redefine the descriptor of this proparty if true i can
  value: 3,
  writable: false,
  enumerable: false,
});

Object.defineProperty(myObj4, "c", {
  writable: true,
});

console.log(myObj4);

console.log("#".repeat(20));
//writable:i can rewrite this proparty (new value to it )//can updated the value of the proparty
//if writable false===>value will not change // i can not re write value for this property
myObj4.c = 100;
console.log(myObj4);
//enumerable// if false ca not iterate //تستثنى من looping

for (i in myObj4) {
  console.log(i, myObj4[i]);
}
//here i can not show c:100 theow iteration //but to know all proparties keys ["keysname"]
console.log(Object.getOwnPropertyNames(myObj4));

//configurable (can delete or not using delete operator)

console.log(delete myObj4.c);

//====================================Object.defineProperties & Trainings===============================//
const testObj = {
  a: 1,
  b: 2,
};
//if i want to modefy property

Object.defineProperty(testObj, "a", {
  writable: false,
  enumerable: false,
  configurable: false,
  value: 500,
});

console.log(testObj.a);
//if i create new proparty using defineProperty all attributes default value===>false
Object.defineProperty(testObj, "c", {
  value: 4,
});
console.log(testObj);
//if i did not edit the attributes ===>default values for it ====>false (i can not delete , redefined descriptor,redefined(rewrie value),can not iterate (not show (apeare in itteration )) )
//testing
//1.writable//redefined value
testObj.c = 400;

console.log(testObj.c); //4

//2.configurable===>false
//=============>2.a can not delete prop
console.log(delete testObj.c); //false

//=============>2.b can not regonfig redefined prop (descriptor)
// Object.defineProperty(testObj, "c", {
//   value: 50,
// });

//3.enumerable//false===>not apeare
console.log(testObj);
for (let i in testObj) {
  console.log(i, testObj[i]);
}
console.log(Object.getOwnPropertyNames(testObj));
console.log(Object.getOwnPropertyDescriptor(testObj, "a"));
console.log(Object.getOwnPropertyDescriptor(testObj, "b")); //all true
console.log(Object.getOwnPropertyDescriptor(testObj, "c")); //all false //default
testObj.d = 8;
console.log(Object.getOwnPropertyDescriptor(testObj, "d")); //all true

//object keys===>getOwnPropartyNames
//enumerable ===>false can not show key using Object.keys//but getOwnPropertyNames it show the key all names enen though each property enumeral value

console.log(Object.keys(testObj));
console.log(Object.getOwnPropertyNames(testObj));

//defineProparties

Object.defineProperties(testObj, {
  e: {
    value: 7,
    writable: true,
  },
  g: {
    value: 5,
    enumerable: true,
  },
  f: {
    value: 10,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

console.log(testObj);
console.log(Object.keys(testObj)); //if enumerable false will not apear//just what i can iterate on it(enumerable=true)
console.log(Object.getOwnPropertyNames(testObj)); //all keys
//============================ Important Info And The End===========================//
/*
  Importants Notes And The End
  [1] Arrow Functions Do Not Have a Prototype Property.//also can not use this inside it 
  [2] You Can Use Objects Inside Constructor Freely
  [3] f = function () {} ==== f() {}
*/
class FinalTest {
  constructor(first, last, age) {
    //can use object inside constructor
    this.name = {
      first: first,
      last: last,
    };
    this.age = age;
  }
  sayHii() {
    return `hi ${this.name.first} ${this.name.last}`;
  }
  //function expression as method
  showAge = function () {
    return `your Age: ${this.age}`;
  };
}

//create instance
let testt1 = new FinalTest("dunia", "kilany", 24);
console.log(testt1.name.first);
console.log(testt1.name.last);
console.log(testt1.name);
console.log(testt1.sayHii());
console.log(testt1.showAge());

/* four principles of object-oriented-programming: 
1.Encapsulation,
 2.Abstraction,
 3. Inheritance, 
 4.Polymorphism.
*/

/*

*/
