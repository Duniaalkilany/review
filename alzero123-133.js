//=======================================video123==================================================//
/*
  - Set Data Type//بشيل عناصر مكررة من array
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index


  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

//array//set is object

let myData = [1, 1, 1, 2, 3];
let myUniqueData = new Set(myData);
console.log(myUniqueData); //obj{1,2,3}
console.log(typeof myUniqueData); //object

//differences (array//set)
//=====>1.array.lenght //set.size

console.log(myData.length); //5
console.log(myUniqueData.size); //3

//=====>2.accessing
console.log(myData[2]); //1//accessing by index in array
console.log(myUniqueData[2]); //can not accessing(set) by index//undefined

//set methods
//1.====>add()

let arr = [2, 2, 2, 3, 3, 4];
// let uniqueArr = new Set([2, 2, 2, 3, 3, 4]); //{2,3,4}
// let uniqueArr = new Set(arr); //{2,3,4}
// let uniqueArr = new Set();
// uniqueArr.add(2).add(2).add(2).add(3).add(3).add(4);
let uniqueArr = new Set().add(2).add(2);
uniqueArr.add(2).add(3).add(3).add(4);
console.log(uniqueArr);

//2.====>delete()

// uniqueArr.delete(2);
console.log(uniqueArr.delete(2)); //delete//return true(item exisit)
console.log(uniqueArr); //{3,4}
console.log(uniqueArr.size); //2

let val = uniqueArr.delete(20);
console.log(val); //false//20 not exist
console.log(uniqueArr); //{3,4}

//3.====>clear()
uniqueArr.clear(); //delete all elements

console.log(uniqueArr); //empty set//size 0

//3.====>has()//in array.includes()

let arr2 = [1, 1, 1, 2, 2, 3, "A"];

let uniArr2 = new Set(arr2);
console.log(uniArr2); //set//{1,2,3}
console.log(uniArr2.has(1)); //true
console.log(uniArr2.has(10)); //false
console.log(uniArr2.has("A")); //true
uniArr2.clear();
console.log(uniArr2.has("A")); //false
//=======================================video124==================================================//
/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/
/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/
//differances between Set /WeakSet
// Type Of Data
//create new set /data1,1,1,2,3,"A","A"
let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]); //Set//object
console.log(mySet); //Set{1,2,3,"A"}//unique elements

// Size //det have size prpparty
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// // Values + Keys==> [Alias For Values]//same thing i can use keys()/values()==>this two methods to have SrtIterator

// let iterator = Object.keys(mySet);//so i can not deal with set like object (keys)
let iterator = mySet.keys(); //SetIterator {1, 2, 3, 'A'}
console.log(iterator);
//in SetIterator===>next method

// console.log(iterator.next()); //{value: 1, done: false}//done false===>iteration not completed//SetIterator still have elements
console.log(iterator.next().value); //1
// console.log(iterator.next().done); //false
console.log(iterator.next().value); //2
console.log(iterator.next().value); //3
console.log(iterator.next()); //{value:"A",done:false};
//when next.value===undefined//===>done=true//iteration completed
console.log(iterator.next().value);
console.log(iterator.next());

let mySet2 = new Set([1, 1, 1, 1, 0, 0, "k"]);
let itrtartor2 = mySet2.values();
console.log(itrtartor2); //SetIterator{1,0,k}===>to aceess the set

let ite1 = itrtartor2.next().value; //1
let ite2 = itrtartor2.next().value; //0
let ite3 = itrtartor2.next().value; //k
let ite4 = itrtartor2.next(); //{value:undefined,done:true}
console.log(ite1);
console.log(ite2);
console.log(ite3);
console.log(ite4);

// forEach

mySet.forEach((ele) => {
  return console.log(ele);
});

mySet2.forEach((ele) => console.log(ele));

console.log("#".repeat(20));
////=====================WeakSet============================/////
// // Type Of Data// WeakSet => Collection Of Objects Only//(memory manegement)remove stored object when they do not have referance ===>i do not have access on it(inaccessible)

// let mWS = new WeakSet([1, 2, 2, 2, 3, "A"]);
// console.log(mWS); // Invalid value used in weak set//so WeakSet ===>take array have  collection of objects

let myws = new WeakSet([{ a: 1, b: "f" }]);

console.log(myws);
console.log(myws.size); //so not have size proparty//undefined
//do not have keys/values/forEach methods
//have add, delete , has methods
myws.add({ c: "dddd" });
console.log("weaksEEEEt", myws); //WeakSet{object,object}//just i can add objects
// let ress = myws.delete({ a: 1, b: "f" });
// console.log(ress);
// console.log(myws); //WeakSet{object}
let myWeak = new WeakSet([{ po: 1, b: 2 }]);
let ob = { c: 4 };
myWeak.add(ob);
console.log(myWeak);
console.log(myWeak.has(ob));
let ress = myWeak.delete(ob);
console.log(ress);
console.log("my", myWeak);
//clear not exisit iv ES6
// myWeak.clear();
// console.log("my", myWeak);

//=======================================video125==================================================//
/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

// let object1 = {
//   var1: "dunia",
// };
// console.log(object1.var1);
// console.log(object1[var1]);//error//var1===>not defined

let object1 = {
  10: "dunia",
  "10": "malek",
};

console.log(object1[10]);//malek//overwrite
//empty object 
let myobj={}
console.log("my object",myobj);//{}==>[[Prototype]]: Object
//create+null
let emptyObj=Object.create(null)
console.log("empty obj",emptyObj);//{}===>no properties 
// let myObject = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();

// console.log(myObject);
// console.log(myEmptyObject);
// console.log(myMap);

// let myNewObject = {
//   10: "Number",
//   10: "String",
// };

// console.log(myNewObject[10]);

// let myNewMap = new Map();
// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// myNewMap.set(true, "Boolean");
// myNewMap.set({ a: 1, b: 2 }, "Object");
// myNewMap.set(function doSomething() {}, "Function");

// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));

// console.log("####");

// console.log(myNewObject);
// console.log(myNewMap);
