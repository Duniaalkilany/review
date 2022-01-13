//create object
//object literal
const circle = {
  //proparties
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  //method
  draw: function () {
    console.log("draw");
  },
};
//access objects//dot notation /bracket notation
//access method
circle.draw(); //draw
//factories
/* if object have one or more method we said that object have behaviour
creating objects with object literal and duplicated it is not issue but it is issue if the bject have behavioure
have one or more method
why object literal is issue and not efficient if the object have behaviour(one or more metod)????
--ig i define object use object literal and then duplicated it (another objects)===>if i have bug in the method
i need then to go and fixit in each created object (many places)so object literal is not a good way to create objects and duplicated it if objects have behaviore so here i use factory/constructor
*/

//constructor===>create objects

function Circle(radius, xVal, yVal) {
  this.radius = radius;
  //i can use object inside constructor===>proparty is object .

  this.location = {
    x: xVal,
    y: yVal,
  };

  //method
  this.draw = function () {
    console.log(`draw`);
  };
}

//craete instance//object//using new keyword
/*
1.new will create empty object 
2. then it set this to point to the object (created by it )===>refere to thr object(owner)==>inside constructor it refere to the creted objects
3.return that bject(created ) fron constructor function  ===>no need to use return this inside constructor ===>new do return to this automatically
*/
let circle1 = new Circle(1, 1, 1);
//factory//put the object inside function and return the object so to create new object or instance just declare it and call the factory function
console.log(circle1);
function createCircle(radius, xVal, yVal) {
  return {
    // radius: radius,
    radius,
    location: {
      x: xVal,
      y: yVal,
    },
    draw: function () {
      console.log(`draw , ${this.radius}`);
    },
  };
}

//how can i create instance using factory
const circle2 = createCircle(2, 2, 2);
console.log(circle2); //{}
circle2.draw();

//so creating objects using factory function (return object )//and by using constructor function (using this )//no need to retuen

//constructor property //objects have constructor property//check constructor property of objects created by constructor function
console.log(circle1.constructor === Circle); //true
console.log(circle1.constructor); //return constructor function syntax

//check constructor property of objects created by factory function(contain object literal so it is as object literal===>the constructor property reffer to Object()===>which is built in constructor )
console.log(circle2.constructor); //f Object()===>so constructor is Object()===>which is abuild in constructor the same thing with any object created by object literal

let obj = {
  a: 1,
  b: 2,
};
console.log(obj.constructor); //Object()//built in constructor

//built in constructors
/*
1.String
2.Boolean
3.Number
4.Error==>throw new Error ("")
5.Object


*/

let myString = "dunia";
let myString2 = new String("kilany");
console.log(myString.constructor); //f String()
console.log(String === myString.constructor);
console.log(myString2 instanceof String); //true

let num = 2;
let num2 = new Number(5);
console.log(num.constructor === Number);
console.log(num.constructor);
console.log(num2 instanceof Number);

let boolean1 = true;
let boo2 = false;
console.log(Boolean(boo2)); //false
console.log(boolean1.constructor);
let boolean2 = new Boolean(false); //true
console.log(boolean2); //true
console.log(boolean1.constructor === Boolean);
console.log(boolean2 instanceof Boolean);
let val = new Boolean(false);
console.log(typeof val); //object
//Boolean(new Boolean())//always true ===>new Boolean create object then Boolean (object)===>true
console.log(val);
console.log(Boolean(val));
console.log(Boolean(new Boolean(false)));
console.log(Boolean(0));
console.log(Boolean(true));
console.log(Boolean(false));

//==================functions are objects================================//
//new Function ('para1','para2',....'function body')
//function is object have proparties/method//constructor for all functions(objects) is Function() constructor
//constructor
function Testing(name) {
  this.name = name;
  this.sayHello = function () {
    return `hello`;
  };
}

//factory function

function testing(name) {
  return {
    name: name,
    sayHello: function () {
      return `hello`;
    },
  };
}

console.log(Testing.name); //Testing
console.log(Testing.constructor); //Function()
//craeting function (object) using Function constructor
const fun = new Function("first", "last", "return first +' '+ last");
console.log(fun("dunia", "alkilany"));

console.log(fun);

const fun2 = new Function("a", "b", "return a+b");
console.log(fun2(1, 2));
console.log(fun2.constructor === Function);
console.log(fun2 instanceof Function);
console.log(fun2);

//create constructor function using Function constructor

const MyFunction1 = new Function(
  "role",
  "email",
  `this.role = role;
this.email = email;
this.info = function () {
  return this.role , this.email}`
);

const instance1 = new MyFunction1("admin", "d@gmail.com");
console.log(instance1);
console.log(MyFunction1 instanceof Function);
console.log(instance1 instanceof MyFunction1);

//===================================
function MyFunction(role, email) {
  this.role = role;
  this.email = email;
  this.info = function () {
    return `${this.role}`;
  };
}
//
let func = new MyFunction("admin", "d@gmail.com");
console.log(func);
console.log(MyFunction.call({}, "user", "malek@gmail.com"));
