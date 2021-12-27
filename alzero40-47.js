//==================================video 40=====================================//
/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/
let myFriend = ["sara", "tasneem", "malek"];

//access string ([index],charAt())
//access array [index]

console.log(`hello ${myFriend[1]}`); //hello tasneem
//access array elements
//log r charachter from sara
console.log(myFriend[0].charAt(2)); //r//access array then acceee string
console.log(myFriend[0][2]); //r//access array then acceee string

//nested array
let friends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];
//access array inside array
console.log(friends[3][0]); //Marwan
console.log(friends[3][1]); //Ali
//acees elements inside nested array (array inside array)
console.log(friends[3][1][2]); //i
console.log(friends[3][1].charAt(2)); //i

//change array elements//simply by access element then updating value of it
console.log(friends);
friends[2] = "malek";
console.log(friends);
friends[3][1] = "hussam";
console.log(friends);
//change all elements of nested array
friends[3] = ["ameer", "bahaa"];
console.log(friends);
//change nested array to string
friends[3] = "sameh";
console.log(friends); //['Ahmed', 'Mohamed', 'malek', 'sameh']

//string to array
friends[0] = ["sara", "mlk"];
console.log(friends);
//change to number
friends[0] = 1;
console.log(friends);

////typeof array is object to solve this (check if it is array)i use Array method (isArray())
//Array.isArray(name of array)

let str = "dunia";
console.log(typeof friends); //object
console.log(Array.isArray(friends)); //true
console.log(Array.isArray(str)); //false

//==================================video 41=====================================//
/*
  Array Methods
  -isArray
  - Length//number of elements
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myFriends.length); //4
myFriends[3] = "gamal";
console.log(myFriends);

//add element to array using index
myFriends[4] = "sara";
console.log(myFriends);
console.log(myFriends.length); //5
myFriends[8] = "tasneem";
console.log(myFriends); //['Ahmed', 'Mohamed', 'Sayed', 'gamal', 'sara', empty x 3 'tasneem']
console.log(myFriends.length); //9
console.log(myFriends[5]); //undefined
console.log(myFriends[6]); //undefined
myFriends[9] = "eman";
console.log(myFriends.length); //10
console.log(myFriends);

//add element to array dynamically(with out count the index)//(at the end of array )
let arr = ["mlk", "dunia", "hussam"];
arr[arr.length] = "rawan";
console.log(arr);
//replace last element dynamically//updating last element
arr[arr.length - 1] = "baraa";
console.log(arr);

//if i edit(update) the length of the array (make less )//delete elements of array
myFriends.length = 2;
console.log(myFriends); //["Ahmed", "Mohamed"]
console.log(myFriends.length); //2
//so using lrngth methiod
//1.add at last in array
//2.delete (control lenght of array)
//3.update lastvalue in array

//==================================video 42=====================================//
/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/
let myFriends1 = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myFriends1);
console.log(myFriends1.length); //4
//add to the first(unshift)
myFriends1.unshift("dunia", "dalia");
console.log(myFriends1); //add to the first and updating array["dunia", "dalia","Ahmed", "Mohamed", "Sayed", "Alaa"]
console.log(myFriends1.length); //6
//add to end of array(push)
myFriends1.push("manar", "rawaa");
console.log(myFriends1); // ['dunia', 'dalia', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'manar','rawaa']
console.log(myFriends1.length); //8

//remove from the first (shift) and return it
//i can store it in variable //it will remove from array also i can use the returned(removed) value ehich store in the variable
let var1 = myFriends1.shift();
console.log(myFriends1); //['dalia', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'manar', 'rawaa']//delete dunia
console.log(var1); //return the removed value
//remove from the last (pop)//returned removed value

let var2 = myFriends1.pop(); //rawaa
console.log(myFriends1); // ['dalia', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'manar']
console.log(var2);
console.log(myFriends1.pop()); //manar

//==================================video 43=====================================//
/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]===indexOF("")>=07
*/

let myFriends2 = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Mohamed", "Ahmed"];
console.log(myFriends2);

//in array//indexOf
console.log(myFriends2.indexOf("Ahmed")); //start from index 0//0//i have to elements (Ahmad)//it will return the position of first element
console.log(myFriends2.indexOf("Ahmed", 2)); //5//start fron index 2 //search for "Ahmad"//return index of Ahmad
//lastIndexOf//search from last
console.log(myFriends2.lastIndexOf("Ahmed")); //start from the last //first ahmad//index of it //4
console.log(myFriends2.lastIndexOf("Ahmed", -2)); //0//"Ahmed"===>-1//"Alaa"===>-2
console.log(myFriends2.lastIndexOf("Mohamed")); //4
console.log(myFriends2.lastIndexOf("Mohamed", -2)); //4
console.log(myFriends2.lastIndexOf("Mohamed", -3)); //1
console.log(myFriends2.lastIndexOf("Mohamed", 4)); //strt from index0- 4//4
console.log(myFriends2.lastIndexOf("Mohamed", 1)); //strt from index 0-1//1
console.log(myFriends2.lastIndexOf("Mohamed", 0)); //strt from index 0-0//-1
//includes
console.log(myFriends2.includes("Ahmed")); //true
console.log(myFriends2.includes("Sayed", 2)); //true
console.log(myFriends2.includes("Sayed", 3)); //false
console.log(myFriends2.includes("Ahmed", 2)); //true

if (myFriends2.indexOf("Ahmed") === -1) {
  console.log("Ahmad not found");
} else {
  console.log("Ahmad found");
}

if (myFriends2.indexOf("Sayed", 3) === -1) {
  console.log("Sayed not found from index 3 to end ");
}

if (myFriends2.lastIndexOf("Alaa", -4) === -1) {
  console.log("not found");
}

console.log(myFriends2.indexOf("dunia")); //-1

myFriends2.lastIndexOf("Sayed", 3) === -1
  ? console.log("nottttt found")
  : console.log("founddd it is index =", myFriends2.lastIndexOf("Sayed", 3)); //2

let sentance = "Elzero Webe Schoole";

//sreach method in string //indexOf//lastIndexOf//includes
//1. // lastIndex as string method ===>stringname.lastIndexOf("",(strart the string from index-0-number))//then from last find the element and then find its position
console.log(sentance.lastIndexOf("o", 4)); //-1
console.log(sentance.lastIndexOf("o", 5)); //5//from 0-5 //what is last index of
console.log(sentance.lastIndexOf("o", 4)); //from 0-4 //last index of o //no 0 //-1
console.log(sentance.lastIndexOf("e", 12)); //10//from index0-12//last e //index 10
console.log(sentance.lastIndexOf("e", 9)); //8

//2.indexOf("",start position (start index))
console.log(sentance.indexOf("o")); //5//start from position 0
console.log(sentance.indexOf("o", 6)); //15//start from index 6

//in lastIndex===>aarray===>>arrayname.lastIndexOf("",(strart the string from index-0-number))//positive
//or i can do like negative number ( start searching from -1/-2)
//but in string.lastIndexOf i can not add negative number to start from just from (0to positive index)

//==================================video 44=====================================//
/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
  //array//using sort //new array will sorted //also original sorted //so if i do changes on array it affected original//updated//so the second change will update the updated array
*/
let myFriends3 = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];
console.log(myFriends3);
console.log(myFriends3.sort()); //i will use compare function to sort according to what i want
console.log(myFriends3); //updated//sorted
console.log(myFriends3.reverse()); //new update//reverse
console.log(myFriends3); //updated (sorted ,reversed)
//chain with array
console.log(myFriends3.sort().reverse());

//==================================video 45=====================================//
/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)//in string start [MAND]
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/

let myFriends4 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends4.slice()); //all array
console.log(myFriends4.slice(1)); //from index 1 to end //["Sayed", "Ali", "Osama", "Gamal", "Ameer"]]
console.log(myFriends4.slice(1, 3)); //from index 1 to index 3 //3 not include ["Sayed", "Ali"]
console.log(myFriends4.slice(1, -2)); //["Sayed", "Ali", "Osama"]
console.log(myFriends4.slice(0, -2)); //["Ahmed", "Sayed", "Ali", "Osama"]
//so if in slice i only have negative number so start count from end and slice the counted
console.log(myFriends4.slice(-2)); //[ "Gamal", "Ameer"]//[array from -1-==>-2]
console.log(myFriends4.slice(-1)); //["Ameer"]//[array from -1-==>-1]
console.log(myFriends4.slice(-3)); //[ "Osama", "Gamal", "Ameer"]//[array from -1-==>-3]
//
console.log(myFriends4.slice(-4, -2)); //["Ali", "Osama"]
let sliceArray = myFriends4.slice(-4, -2);
console.log(
  `in slice the original array not updated but it return new array with the changes you did like :${sliceArray}`
);
console.log(typeof sliceArray); //object
console.log(Array.isArray(sliceArray)); //true
console.log(myFriends4); //original array not updated
//i added to end
myFriends4.push(sliceArray); //["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer","Ali", "Osama"]
//after push it is updated
console.log(myFriends4);
//
myFriends4[0] = sliceArray;
//added to begining and updated
console.log(myFriends4);
//added ti index 2 and updated
myFriends4[2] = sliceArray;
console.log(myFriends4);
//added to begining and updated
myFriends4.unshift(sliceArray);
console.log(myFriends4);
//remove from end and updated//return removed
let removed = myFriends4.pop();

console.log(myFriends4);
console.log(removed);
let removed1 = myFriends4.shift();
console.log(myFriends4);
console.log(removed);
//so in pop /shift its removed return what removed and updated the original array
//but in slice it s return new slicing array //but not updated the original

/////splice ======>return new array if i removed and updated the array (remove,add)
let myFriends5 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends5.splice(1, 2)); //start from index 1//count//then splice and return new array with what delete // and updated original
console.log(myFriends5);
myFriends5.splice(0, 0, "dunia"); //at index 0 add dunia
console.log(myFriends5); //updated// ['dunia', 'Ahmed', 'Osama', 'Gamal', 'Ameer']
console.log(myFriends5.splice(1, 2, "marah", "razan")); //return what deleted///['Ahmed', 'Osama']//added new //updated
console.log(myFriends5); //['dunia',"marah", "razan" , 'Gamal', 'Ameer']

//==================================video 46=====================================//
/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array//all arrays not updated i have new array 
  - join(Separator)
*/

let myFriends6 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allfriends = myFriends6.concat(myNewFriends);
console.log(allfriends); //["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer", "Samar", "Sameh"];
allfriends = myFriends6.concat(myNewFriends, schoolFriends);
console.log(allfriends);
allfriends = myFriends6.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);
console.log(allfriends);

//join(array==========>string//i can choose the sroerator ""==>nothing," "===>space,\,|,etc)
let joined = allfriends.join("");
console.log(joined); //string

joined = allfriends.join(" ");
console.log(joined);
console.log(allfriends.join(" | "));
console.log(allfriends.join("|").toUpperCase()); //can use any string nethod

/*
  Arrays Methods [flat]
 
*/

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]

//==================================video 47=====================================//
/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
//removing from array //play with lenght//pop(end)//splice
console.log(my.splice(4, 2)); //removed array//["Gamal", "Ameer"]]
// console.log(my); //["Ahmed", "Mazero", "Elham", "Osama"]
my.reverse();
// console.log(my);

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
let slArray = my.slice(++zero, counter);
console.log(slArray); // ["Elham", "Mazero"]
//array===>string
let joinstr = slArray.join("");

console.log(
  joinstr.slice(--zero, --counter) +
    joinstr.slice(--joinstr.length - ++counter, joinstr.length)
); // "Elzero"
let str2 = joinstr.slice(joinstr.length - --counter, joinstr.length);
console.log(str2);
console.log(str2[zero] + str2[++zero].toUpperCase()); // "rO"
