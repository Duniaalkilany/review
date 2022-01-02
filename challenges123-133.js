//challenges 123-133

//challenge 1
/*
 Needed Output
Set(3) {10, 20, 2}
2 */

//create set ==>object to store unique elements
//new Set(Iterable)[]===>array

let setOfNumbers=new Set([10])//iterable
console.log(setOfNumbers);//object{10}
//add 20 
setOfNumbers.add(20).add(setOfNumbers.size)
console.log(setOfNumbers);//object{10,20,2}
console.log(Array.from(setOfNumbers)[setOfNumbers.size-1]);
console.log([...setOfNumbers][2]);

//challenge 2
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log([...new Set(myFriends)].sort());
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']


console.log(Array.from(new Set(myFriends)).sort());


//challenge 3
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
let stringKeys=Object.keys(myInfo)//['username','role','country']
let objValues=Object.values(myInfo)
let myMap=new Map([[stringKeys[0],objValues[0]],[stringKeys[1],objValues[1]],[stringKeys[2],objValues[2]]]);
  
 console.log(myMap)
 console.log(myMap.size);
 console.log(myMap.has("role"));
  // Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true


//
console.log(Array.isArray(Object.entries(myInfo) ) );
console.log(Object.entries(myInfo));//[[key,value],[],[]]//array of arrays 

myMap2=new Map(Object.entries(myInfo))
console.log(myMap2);
//challenge 4
let theNumber = 100020003000;

// Needed Output
// 123

let stringIte=theNumber.toString()
console.log(Number([...new Set(theNumber.toString())].sort().join("")));//Number("0123")===>123
// console.log([...new Set([...theNumber.toString()])]);

//challenge 5

let theName = "Elzero";

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

console.log([...theName]);
console.log(Array.from(theName));
console.log(theName.split(""));
let arr=[]
for(i=0;i<theName.length;i++){
    arr.push(theName[i])
}
console.log(arr);

console.log([...new Set(theName)]);


console.log(Object.values(theName));

let name="dunia"
console.log(Object.values(name));//['d', 'u', 'n', 'i', 'a']
console.log(Object.keys(name));//['0', '1', '2', '3', '4']
///i can assume that string is object 


//challenge 6

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
//lopp through array ===>ele number count + 
//for loop //type number [array of numbers]
//concat 
//.coppyWithin(0,)

let removed=[]

    for(let i=0;i<chars.length;i++){
      
        if (typeof chars[i]==="number"){
          console.log(chars[i]);
          console.log(i);
    removed=chars.splice(i,1)//array updated//also i have removed elements returned 

console.log(removed);
        }
    }

    let conc=[...removed,...chars]
    console.log('firstttt',conc);
  for (let i=0;i<conc.length;i++){
      if(typeof conc[i]==="string"){
         start=i
         break
      }
  }
  console.log(start);    

    console.log(conc);
    conc.copyWithin(0,start,start+removed.length)
    console.log(conc)
// console.log(chars);

//challenge7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Needed Output
// [1, 2, 3, 4, 5, 6]

// numsOne=numsOne.concat(numsTwo)
// console.log(numsOne);
// console.log([...numsOne,...numsTwo]);

// numsOne.push(...numsTwo);

// numsTwo.unshift(...numsOne);

// console.log(Array.from([...numsOne,...numsTwo]));
// console.log(Array.from(new Set([...numsOne,...numsTwo])));

// numsOne[numsOne.length]=numsTwo
// console.log(numsOne);
// numsOne=numsOne.flat()
// console.log(numsOne);

console.log(Array.from([numsOne,numsTwo]).flat());

console.log(Array.of(...numsOne,...numsTwo));