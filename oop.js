/*a collection of data items with pre-defined relationships between them. These items are organized as a set of tables with columns and rows. ... Each row in a table could be marked with a unique identifier called a primary key, and rows among multiple tables can be made related using foreign keys.
sQL is a programming language that is used by most relational database management systems (RDBMS) to manage data stored in tabular form (i.e. tables). A relational database consists of multiple tables that relate to each other. The relation between tables is formed in the sense of shared columns
OOP===> object oriented programming (paradigm or style the code)===>)(طريقة لكتابة الكود )===> OPP is not a language or tool id a a paradigm the code.
use the concepot of object ===> to desighn computer program
js/java/python /c sharp /c++
procedural programming vs OOP(بشكل عام بغض النظر عن )
*/
/*
procedural programming
1.programe devided into variables and functions 
2.overloading is not possible 
3.hiding data not possible
4.data is sepearated

OOP:
1.program devided into obj+methods
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
  Defining Object
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
 dot notation is better and 
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

//constructor ====>create instances (نسخة او نموذج منه)
//instanceOf===>to check the instance /constructor related to each other
//1.instanceof
//2.nameOfInstance.constructor===nameOfConstructor

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
