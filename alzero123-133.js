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
  ------ Map => Better Performance When Add Or Remove Data//(سرعة)
  ------ Object => Low Performance When Comparing To Map
*/

// let object1 = {
//   var1: "dunia",
// };
// console.log(object1.var1);
// console.log(object1[var1]);//error//var1===>not defined


//empty object 
let myobj={}
console.log("my object",myobj);//{}==>[[Prototype]]: Object
//create+null
let emptyObj=Object.create(null)
console.log("empty obj",emptyObj);//{}===>no properties 

//map===>empty===>no proprties 
let myMap= new Map()

console.log('myMap',myMap);



let myNewObject = {
  10: "Number",
  "10": "String",
  true:"hhhh",
  false:"false",

};
//overWrite
console.log(myNewObject);//{10: 'String'}
console.log(myNewObject[10]);//string
console.log(myNewObject.false);//false

//adding to map 
myMap.set( 10,"Number")
myMap.set("10","String")
console.log(myMap);//) {10 => 'Number', '10' => 'String'}


//the key in object ===>variable according to rules //string ""//symbol

//in map can be any permitive data type //object/function /boolen 

myMap.set({a:"1",b:"2"},{key:"value"})


myMap.set(function hello()
{},"function")
myMap.set(true,"boolean")

console.log(myMap);

//access map //using mapName.get(key)

console.log(myMap.get(10));
console.log(myMap.get("10"));
console.log(myMap.get(true));

// console.log("####");

// console.log(myNewObject);
// console.log(myNewMap);

//size in map and object 
let testObj={
  a:"1",
  b:2,
  c:3
}

let testMap=new Map()
console.log(testMap);
testMap.set("key1","1")
testMap.set("key2","2")
console.log(Object.keys(testObj).length);//3
console.log(testMap.size);//2

//=======================================video126==================================================//
/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

//create map 
//1.by set /===>(key,value)
let map1= new Map()
map1.set(10,1)
map1.set("b",1)
console.log(map1);
//accessing to map 
console.log(map1.get(10));//1
console.log(map1.get("b"));//1
console.log(typeof(map1));
console.log(Array.isArray(map1));//false

//2.directly

let myMap2=new Map([
  [10,"Number"],
  ["10","string"],
  [false,"boolean"],
])

console.log(myMap2);//{10 => 'Number', '10' => 'string', false => 'boolean'}
//access map //get()
console.log(myMap2.get(10));
console.log(myMap2.get("10"));
console.log(myMap2.get(false));


//size===>proparty
console.log(myMap2.size);

//delete
console.log(myMap2); 
console.log(myMap2.delete(10));//key(10)==>exist===>true
console.log(myMap2);//{'10' => 'string', false => 'boolean'}
console.log(myMap2.delete(10))//false
console.log(myMap2.delete("10"))//true
console.log(myMap2)//{false => 'boolean'}


//has
console.log(myMap2.has(10));//false
console.log(myMap2.has(false));//true
//clear

myMap2.clear()
console.log(myMap2);//{}

//=======================================video127==================================================//
/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its(remove inaccessable stored objects==>no referances ===>like weak set) Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/
//create obj 
let mapUser={
  theName:"dunia"
}

//############create map

let myMap3= new Map()//empty 

//add by set

myMap3.set(mapUser,"objectValue")//key is object

console.log(myMap3);

//make the object unaccessible(no referance)//make key===>null
mapUser=null//// Override The Reference
console.log("after override",myMap3);//object key (myMap3)===>still stored in the map 
console.log("",mapUser);//null //this object is not exsist //override
console.log("after override",myMap3);//object key (myMap3)===>still stored in the map 

console.log("#".repeat(20));


//###############create weakMap
 let wMap= new WeakMap()
//try to add string key 
// wMap.set("string","string")//Invalid value used as weak map key
// console.log(wMap);


//add object as key to weakMap 

let weakObj= {
  nam:"dunia"}
wMap.set(weakObj,"object")

console.log("before override",wMap);
//access the weakMap by get (objName)
console.log(wMap.get(weakObj));


//why weak map 
//override for weakObj

weakObj=null
console.log(weakObj);
console.log("after override",wMap);//note that the object do not remove due to collect GarBadge(delete from memeory)

//so i use weak map //weak set ===>when the object have no referance (i can not access it )===>delete it from the memory ===>garbadge collector====>if does not work auto ===>from performance/memoryon chrome
//like weakset ==>weakmap does not have size /forEach 

//=======================================video128==================================================//

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)//make array from the iterable===>SetIterable//map iterable
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/
//accept iterable (sequance)(string is a sequance)

console.log(Array.from("DUNIA"));//["D","U","N","I","A"]
console.log(Array.from(12345));//not iterable//[]
console.log(Array.from("12345"));//["1","2","3","4","5"]
//using map funcion 
console.log(Array.from("12345",(ele)=>{return Number(ele)+Number(ele)}));//[2,4,6,8,10]


//Array.from with Set /Map data types

let myArry=[1, 1, 1, 2, 3, 4]
//using Set to return object(iterable) have just the unique values 

let mySt=new Set (myArry)
console.log(mySt);//Set{1,2,3,4}
//using Array.from===>iterable===>array
let ar=Array.from(mySt)
console.log(ar);//[1,2,3,4]

//===========================spread operator### array with unique values 
console.log([...new Set(myArry)]);

//arguments//Shorten The Method + Use arguments

function testArgs(){
  return arguments
}

console.log((testArgs("dunia","alkilany",1996)));//iterable[]
console.log(Array.from(testArgs("dunia","alkilany",1996)));//array["dunia","alkilany",1996]

function af (){
  return Array.from(arguments)
}

console.log(af("d","a","k"));//array["d","a","k"]

//so Array.from ===>iterable===>arrray
//iterable(""===>string(sequance)//object{values}===>iterable (output of Set data type ))
//i use Set()===>iterable[array]===>unique iterable {unoque array values}
//arguments ===>arguments of the function [iterable]
//so i can use it with Array.from ===>to have array of arrguments 


//=======================================video129==================================================//
/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)//updated the origin array
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

let myArrayy = [10, 20, 30, 40, 50, "A", "B"];
//lenghth of array remain the same 
// myArrayy.copyWithin(3)//[10, 20, 30, 10, 20, 30, 40]
//i want just copy "B"add it to index 4//[10, 20, 30, 40,"B", "A", "B"]
// myArrayy.copyWithin(4,6,7)
//"B"==>at the end ===>no need to add end 
// myArrayy.copyWithin(4,myArrayy.length-1)// [10, 20, 30, 40, 'B', 'A', 'B']
//same result with negative values===>negtive values start count from the end 
// // myArrayy.copyWithin(4,-1)// [10, 20, 30, 40, 'B', 'A', 'B']
// myArrayy.copyWithin(1,-2)//[10, "A", "B", 40, 50, "A", "B"]
myArrayy.copyWithin(1,-2,-1)// [10, "A", 30, 40, 50, "A", "B"]
myArrayy.copyWithin(0,-4,-1)//[40, 50, "A", 40, 50, "A", "B"]
console.log(myArrayy);

//=======================================video130==================================================//
/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
  -if condition true ===>return true 
*/

let nums = [1, 2, 3, 4, 5, 6, 7];


let myNumber = 5;

let check=nums.some((ele)=>ele>5)//true

let check2=nums.some((ele)=>ele>10)//false
let check3=nums.some(function(ele){

  console.log("test");//print 6 times //first true(condition executed)//stop .
  return ele>5})
// console.log(check);
// console.log(check2);
console.log(check3);



///this argument array.some(cbf(),this argument)
// let check4=nums.some(function(ele){
//   console.log(this);//owner of the function /heree is the window
//   return ele>5
// })
// console.log(check4);//print window object 6 times then true 

let check4=nums.some(function(ele){
    console.log(this);//owner of the function /heree is the window
  return ele>this
 }, myNumber)//give value for this ===> this=5
 console.log(check4);//print Number {5}===>6 times then true


 //write function take two parameters //array/value ===>check if i have the value in the array 

 function checkValues(arr,val){
 return arr.some((ele)=>{
  return ele==val
})
 }

 console.log(checkValues([1,23,2],2));

 console.log(checkValues(nums,10));


 //array of numbs //range //check if i have inside array number in range 
 let numbersss= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
let objectOfRange={
  min:10,
  max:20
}
 let result=numbersss.some(function(ele){
   console.log(this.min);
return this.min <=ele &&ele<=this.max
 },objectOfRange)

 console.log(result);


 //Arrow functions don't have the arguments object. Therefore, if you have a function that use arguments object, you cannot use the arrow function
 //this argumrnt===>object //some===>use argument this===>if its object===>this===>argument object 
//  function checkRange(arr){
//   return arr.some((ele)=>{
//     console.log(this.min);
//     return this.min < ele< this.max
//   },objectOfRange)
//  }

function checkRange(arr){
  return arr.some(function(ele,idx){
    // // console.log(ele);
    // // console.log(idx);
    console.log(this.min);
    // console.log(this.max);
 //1 < 2 < 3 // "1 is less than 2" is true, true is 1, "1 is less than 3" is true.
          // Javascript returns true.
//3 < 2 < 1 // "3 is less than 2" is false, false is 0, "0 is less than 1" is true.
// Javascript returns true.

//chained  comparison in js not as in mathmatics 
//left===>right
//true=1//false=0
//then compared(1,0)//third element to compare 
    
    // return (this.min < ele < this.max)//1//10<1<20===>0<20===>true //so i can not used chined comparision in js 
 return this.min<ele&&ele<this.max
  },objectOfRange)
 }

 console.log(checkRange(numbersss));

 //=======================================video131==================================================//

/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/
// the condition applies on  all (every)element shold to return true )

//on some if the condition applies on one element ===>return true 

//i have object 
const locations = {
  20: "Place 1",
  30: "Place 2",
  50: "Place 3",
  40: "Place 4",
};
//array of numbers (keys of the object )
//have value 
//check if value < all elements of the array


let keysStrings=Object.keys(locations)

console.log(keysStrings);

let keysNumbers=keysStrings.map((ele)=>+ele)
console.log(keysNumbers);

let myVal=15

function checkMyValue(arr,val){
 return arr.every((ele)=>{
    return ele>=val
  })
}

console.log(checkMyValue(keysNumbers,myVal));

let resss=keysNumbers.every((ele)=>ele>=myVal)
console.log(ress);

let ress4=keysNumbers.every(function (ele){
  console.log(this);
  console.log(ele);
  return ele>this
},myVal)//i have argument object//this//this argument//i can not use arrow function 
console.log(ress4);
//=======================================video132==================================================//
/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
  (extract for the elements from iterable in the place)
*/
console.log([...new Set([1,1,1,2,2])]);
//[...iterable]===>array(extract iterable elements and put them in array[place])


// Spread With String => Expand String

console.log("dunia");
console.log(..."dunia");//allow string (iterable) to expand in place//extract of the string elements in place
console.log([..."dunia"]);//string(iterable) expand in array



// Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

// console.log(myArray1=myArray1.concat(myArray2));//concat 
// let allaraays=myArray1.concat(myArray2)
let allaraays=[...myArray1,...myArray2]
console.log(allaraays);
console.log([...myArray1, ...myArray2]);


// Copy Array
//coppy of myArray1
let copiedArray=[...myArray1]
console.log(copiedArray);

//coppy of myArray2

let copied2=[...myArray2]

console.log(copied2);

//// Push Inside Array

let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

// let pushed=[...allFriends,...thisYearFriends]
// console.log(pushed);

allFriends.push(...thisYearFriends)
console.log(allFriends);


// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums));
console.log(Math.min(...myNums));


// Spread With Objects => Merge Objects
let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};
let allObjs={...objOne ,...objTwo,e:5}
console.log(allObjs);
console.log({...objOne ,...objTwo});