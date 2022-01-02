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

//access the set 
//Set     => Have Keys, Values, Entries
//keys(),values()===>methods to have set iterator===>iterate through the set 
// console.log(setOfNumbers.keys().next().value);

//i can use gorEach with Set

setOfNumbers.forEach((ele)=>{
    
setOfNumbers.keys().next().value ==undefined?console.log(ele):console.log("vvv");
})