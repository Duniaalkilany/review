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

//================================call(),apply(),bind()=====================================//
/*
1.function is object 
2.so function have proparties and methods
3.some of these methods===>call(),apply(),bind()===>these three methods used to control the invocation 
of the function  
*/
function MyFunction(role, email) {
  this.role = role;
  this.email = email;
  this.info = function () {
    return `${this.role}`;
  };
}
//===================== Value vs Reference Types====================================//
/*in js we have two catagories of types 
1.value types===>primitives types
string/number/boolean/symbol(ES6)/undefined/null
2.referance types===>
object/function/array(function/array is object )
//so we can say that we have two catagories of type in js (primitivestypes(values types),referane(object)types)
the question how primitives(value types)and referance types(objects) behave differently?
*/
//declare two primitives
let x = 10;
let y = x; //here i copy value of x
x = 20;
console.log(x); //20//last update foe x
console.log(y); //10
//in value types ===>each variable independent from each other
//declare objects //referance types
let o1 = { value: 10 };
let o2 = o1; //here i copy refferance of o1(adress)
o1.value = 20;
console.log(o1); //20
console.log(o2); //20

/*when i store object in variable this object is not stored in variable//the objeect stored in memory and the adress of that memory location stored in the variable.
so when i say o2=o1===>i copy the adress or the referance//so i store the adress and refferance also in o2
so o1,o2===>reffere(pointing) to same object===>so when i edit /change the object itself //the changes will be visible for other variable which store same adress 


//conclousion
1.primitives(value types) are copied by their values
2.referances(objects) are copied by their referrance(adress in memory)

*/
let number = 1;
function increase(number) {
  number++;
}
increase(number);
console.log(number); //1//two independent copies//one copy outside //one inside//from outside i can deal with the global .

let obee = { value: 10 };
function increase2(obee) {
  //copied by refeerance
  obee.value++;
}
increase2(obee);
//so changes will visible//because when i check referance (adress)==>changes apeare
console.log(obee.value);

let nu = 5;
nu = nu + 1;
console.log(nu);
//==========================Objects Adding or Removing Properties ===================================//
function Circle1(radius) {
  this.radius = radius;
  this.draw = function () {
    return `draw`;
  };
}

const cir1 = new Circle1(1);
console.log(cir1);
//adding proparty//add new prop(key==>location/value object)
cir1.location = { x: 1, y: 2 };

console.log(cir1);

//delete ===>delete operator
// console.log(delete cir1["location"]); //true

//======================for..in loop )enumerating proparties of objects

//=======================================Abstraction=====================================//
// function Circle3() {
//   this.radius = this.radius;
//   //private proparty ===>want not be access from outside
//  let defaultLocation = {
//     x: 0,
//     y: 0,
//   };
//   //private method===>expression way (local variable )
// // let computeOptimumLocation = function () {

// // };
//   this.draw = function () {
//   // computeOptimumLocation();
//     console.log(`draw`);
//   };
// }

const cir2 = new Circle3(1, 0, 0);

//i have core concept called abstraction ===>hide complixity(details)===>show essentials
//not all proparties/methods should be accessable for the consumer /client of this obj
/*
i can do abstraction (hide some prop/methods)==>can not access it outside by declare it as local variables inside function 
-in our example make default location(implementation detail) private===>we do not want be accessable from outside  /
*/

//In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time
//Then you declare a variable in a function, you can only access it in the function. These variables are said to be scoped to the function. If you define any inner function within another function, this inner function is called a closure
//to be more accurate in js i don not have private proparties because when i make some proparties
//local variables inside constructor it will not be in the object but we can reffer to them as private proparties of the object

/*
implemantation of abstraction ===>
1. i can not access defaultLocation from outside but what if i want to display it some where in the programme
*/
function Circle3(radius) {
  this.radius = radius;
  //private proparty ===>want not be access from outside
  let defaultLocation = {
    x: 0,
    y: 0,
  };

  this.draw = function () {
    console.log(`draw`);
  };
  //here i defined new proparty in this proparty i have get /set
  Object.defineProperty(this, "defaultLocation", {
    //if i want to get
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error(`invalid location`);
      }
      defaultLocation = value;
    },
  });
}
let cir = new Circle3(1);
console.log(cir);
//in do not have access to default location
console.log(cir.defaultLocation);

//exercise
//desighn stopwatch object
//const sw= new StopWatch
//  Date.getTime() method returns the number of milliseconds===>git the time value in millisecnds
function StopWatch() {
  let endTime,
    running,
    starTime,
    duration = 0;
  //reset
  this.reset = function () {
    starTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  //start
  this.start = function () {
    if (running) {
      throw new Error("watch already started");
    }
    running = true;
    console.log(`running: ${running}`);
    starTime = new Date();
    console.log(`starTime:${starTime}`);
  };
  //stop
  this.stop = function () {
    if (!running) {
      throw new Error("it is alredy stoped");
    }
    running = false;
    console.log(` running : ${running}`);
    endTime = new Date(); //date bject
    console.log(` endTime: ${endTime}`);
    const seconds = (endTime.getTime() - starTime.getTime()) / 1000;
    console.log(`seconds :${seconds}`);
    duration += seconds;
    console.log(`duration:${duration}`);
  };
  ////duration property//combuted property
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
let sw = new StopWatch();

// console.log(sw.duration);
