/*====================================video 79===========================================*/
/*Object
- Intro and What Is Object
-object===>(proparties//methods(actions//functions))
- Testing Window Object
- Accessing Object*/

//1. window object
console.log(typeof window); //obj
console.log(window.location.href); //window==>obj//location===>obj(nested obj)//hrefis proparty
console.log(typeof window.location); //obj
//href is a proparty
console.log(typeof window.location.href); //string(href is proparty have value of the nested obj ===>location)
//to assign new location to window//assign is a method
// console.log(window.location.assign("https://google.com")); //open google window
// window.close();
//so proparty return info but method===>do action(function )

//2. create object
let user = {
  //proparties
  theName: "dunia",
  theAge: 25,
  //method
  sayHello: function () {
    return "hellllllllllllllllllo people";
  },
};

//3.access the object//dot notation //

console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());

/*====================================video 80===========================================*/
/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
  
  
*/

//create user obj (have to proparty(theName,country))

let user2 = {
  user2Name: "dunia alkilany",
  //unvalid identifier//naming of the proparties ===>same rules as variables (identifier===>can not start with # $ - can not have space )===>to naming as you want make the identifier string an access it using bracket notation
  "country of": "jordan",
};
//dot notation
console.log(user2.user2Name);

//bracket notation

//objName["propartyName"]
console.log(user2["user2Name"]);
console.log(user2["country of"]);

//  - Dynamic Property Name

let propName = "country of";

console.log(user2[propName]); //jordan
console.log(user2.propName); //undefined//user2."country of"===>undefined

/* so using dot notation //if identifier of the proparty is named according to the naming rules 
if not naming according to rules //key is a string so using beacket notation //i can use it with the dentifier of the proparty is named according to the naming rules but also i put the name inside " "in the bracket
//i can use bracket notation without " "if i have dynamic proparty name ===>let a ="proparty name "


*/
/*====================================video 81===========================================*/

/*
  Object
  - Nested Object And Trainings
*/
let available = true; //global variable//i have this variable inside the obj as probarty but with another value //if i access using the object //i will use the value insidethe obj

let user3 = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  //nested obj
  addresses: {
    ksa: "Riyadh",
    //nested inside nested
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  //method
  checkAv: function () {
    //access to proparty inside the object
    if (available === true) {
      //if i use without access the obj //undefined but if i have variable globally have value it will worl according to the global variable//Free For Work
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};
//access
console.log(user3.name); //"Osama"
console.log(user3.age); //38
console.log(user3.skills); // ["HTML", "CSS", "JS"]
console.log(user3.skills[0]); //"HTML"
console.log(user3.skills[0].charAt(0)); //"H"
console.log(user3.available); //false
// console.log(user3[available]); //undefined
console.log(available); //true
console.log(user3["available"]); //false
console.log(user3.addresses.ksa); //"Riyadh"
console.log(user3.addresses.egypt.one); //"Cairo"
console.log(user3["addresses"]["egypt"].one); //cairo//mixing
console.log(user3.skills.join(" | ")); //"HTML|CSS|JS"

//how to access the function ===>method
console.log(user3.checkAv()); //Not Free

/*====================================video 82===========================================*/
/*
  Object
  - Create With New Keyword new Object();
*/

let user4 = new Object({
  age: 24,
});

let user5 = {
  age: 28,
};

console.log(user4); //create object using new object ({})

//how can i add a proparties to an obj

user4.age = 38;
console.log(user4); //user4.age updated
user4["country"] = "jor"; //added new proparty
console.log(user4);

console.log(user5); //create object //normal
user5.age = 70;
console.log(user5); //updated
user5["country"] = "america";
console.log(user5); //added new proparty
//add method to user4 obj
user4.sayHello = function () {
  return `hellllllllllllllllllllo`;
};

console.log(user4);
console.log(user4.sayHello); //expression of the function
console.log(user4.sayHello()); //value returned of executed the function
//add method to user5 obj
user5.sayHi = () => {
  return `hiiiiiiiiiiiiiiiiiiiiii`;
};

console.log(user5);

let user6 = new Object({}); //creating new obj using new keyword
console.log(user6);

user6.name = "dodo";
user6["age of dodo "] = 25;

console.log(user6);
//so i can create obj in two ways
/*
1.let objName={
  prop1: ,
}
2. using new keyword 
let user = new object({
  prop1:,

})

3. i can updated obj proparty by accessing the proparty(dot notation//bracket notataion) then assighn (=)new value to it 
4.also you can add new proparty (objName.propartyName//objName["proName"])=value 
5.as the previouse i can add unction //method to the obj 
objName.funName=function(){

}

*/
/*====================================video 83===========================================*/
/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context//in global context===>this===window
  - Function Context//this===>owner of the function 

  Search
  - Strict Mode
*/
//1.this in global===window
console.log(this); //window//global context
console.log(this === window);
//Variable Scope Drama //using var ===>[Added To Window] ()===>can access to it using window.varName
//but using let to identify ===>not added to window

var myVar = 100; //or without var
console.log(window.myVar); //100
console.log(this.myVar); //100

function sayHello() {
  console.log(this);
  return this;
}
sayHello(); //window
console.log(sayHello() === window); //true

//2.this inside the function reffer to the ownwr of this function //window//button...

document.getElementById("cl").onclick = sayHello;
//here this associated to the owner of the function ==>owner here id the button so it will returned ==><button id="cl">click</button>

let user7 = {
  age: 25,
  ageInDays: function () {
    console.log(this); //it will print the owner of this function //object
    console.log(this.age); //this inside function inside obj ===>this reffered to the owner of this function===>obj ===>thisobj.age
    // return user7.age * 365;
    return this.age * 365; //return user7.age*365
  },
};

console.log(user7.age); //25

console.log(user7.ageInDays()); //9125
//3.function inside object(methods)===>this reffer to the obj
console.log(this.age); //undefined===>this ===>window===>age variable not in the window scope

/*====================================video 84===========================================*/
/*
  Object
  //this associated with the object which call the method(function)===>obj which own the function/method
  - Create Object With create Method
  //proto===>نموذج )(الاوبجيكت المثال او النموذج الذي انشات منه الاوبجيكت الجديد)
*/

let user8 = {
  age: 25,
  doubleAge: function () {
    return this.age * 2;
    // return user8.age * 2;
  },
};

console.log(user8.age);
console.log(user8.doubleAge());
//create new object using create
// let newObj = new Object({}); //new object
// let newObj = Object.create({}); //create empty object
let newObj = Object.create(user8); //take user8 as prototype and create newObj
console.log(newObj); //{}//inside this newObj i will have prototype //this prototype is {age: 25
//doubleAge: ƒ ()}
console.log(newObj.age); //25
console.log(newObj.doubleAge()); //50
//updated the user obj (prototype)===>updated inside the prototype of newObj
user8.age = 100;
console.log(newObj); //updated inside the prototype
console.log(newObj.age); //100
console.log(newObj.doubleAge()); //200
//update new value for age in the newobj created by user as prototype//

newObj.age = 50; //it will add new proparty in the newObj //prototype(user)==>not updates
console.log(newObj);
console.log(newObj.age); //50
console.log(newObj.doubleAge()); //check the value of age inside the prototype//100*2=200//to solve this problem and check the value of age for this newOBj i used this keyward inside the method ===>because this reffered to the obj called this method

//in can add functions and prpparties to the created obj
newObj.ageFunction = function () {
  return this.age + 1;
};

console.log(newObj.ageFunction()); //51

/*====================================video 85===========================================*/
/*
  Object
  - Create Object With assign Method
*/
let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

// let finalObject = Object.assign(targetObject, obj1);
// console.log("finalObject", finalObject);

// console.log(finalObject.prop1); //1
// console.log(finalObject.meth1()); //1

let finalObject = Object.assign(targetObject, obj1, obj2);
console.log("finalObject", finalObject);
console.log(finalObject.prop1); //1
console.log(finalObject.prop2); //2
console.log(finalObject.prop3); //3
console.log(finalObject.meth1()); //1
console.log(finalObject.meth2()); //2

//i can updated on the newObject

finalObject.prop1 = 200;
//i can added on the newObject
finalObject.prop4 = 4;

console.log(finalObject);
console.log(finalObject.prop1); //200
console.log(finalObject.prop4); //4
console.log(finalObject.meth1()); //200

//to create new obj using assighn//i do not have target object//create empty object

// let newOb = Object.assign({});
// console.log(newOb);

//to add to it
//1.
let newOb = Object.assign({}, obj1, {
  prop5: 5,
  prop6: 6,
  run: function () {
    return "runnnnn";
  },
});
console.log(newOb);
console.log(newOb.run());
//2.classic way
newOb.prop2 = 22;
console.log(newOb); //added

// let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

// console.log(newObject);

let jsObj = {
  name: "dunia",
  age: 25,
};

//to know lenght of the object
console.log(Object.keys(jsObj).length); //2
console.log(Object.keys(jsObj)); //array of strings["name","age"]
console.log(Object.values(jsObj)); //array of values //according to the original type["dunia",25]

let favFilms = {
  "me before you ": {
    actor: "aaa",
    year: 2000,
    oscars: {
      first: "kk",
      second: "gg",
    },
  },
  "twilight blabla": {
    actor: "bbb",
    year: 3000,
  },
  anyOne: {
    actor: "anyOne",
    year: 4000,
    oscars: {
      first: "unknowm ",
      second: "unknown",
    },
  },
};
console.log(Object.keys(favFilms).length); //3//important to loop through object like array

console.log(Object.keys(favFilms)); //3
for (i = 0; i < Object.keys(favFilms).length; i++) {
  console.log(`filmName ::: ${Object.keys(favFilms)[i]}`);
  console.log(`actor: ${favFilms[Object.keys(favFilms)[i]].actor}`);
  console.log(`year: ${favFilms[Object.keys(favFilms)[i]].year}`);
  if (favFilms[Object.keys(favFilms)[i]].oscars) {
    console.log(
      `OSCARS: ${favFilms[Object.keys(favFilms)[i]].oscars["first"]}`
    );
    console.log(
      `OSCARS: ${favFilms[Object.keys(favFilms)[i]].oscars["second"]}`
    );
  }
  console.log("**".repeat(30));
}
