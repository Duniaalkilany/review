//constructor function ===> create and instiate objects in js instead of create objs manualyy each time 
//cleaner code 
//camelCase==> namevariables

//bascal==>constructor //first litter is capital

//literal object://variable with many values
//key :(coloumn)==>value
//seperated by comma 
// const dunia ={
// firstName:'dunia',
// lastName:'kilany',
// age:24,
// //this is a method ==>function
// walk:function(){
//     console.log('hello ');
// }
// }

//first important thing to call the function //method
// dunia.walk()
//if i did not use ()it will log function definition 

// console.log(dunia);

//if i want to create many objects like dunia literal object ==>instead of copy object each time , then change the values 
//of proparties===> i use constructor function 
//constructor==> function==>function mame(bascal)==>()===>parameters==>this parameters is key(name)of object proparties.
//seperated by semicoloumn ;
function Students(firstName,lastName,age){
    //this.key=value of this key
    
this.firstName=firstName;
this.lastName=lastName;
this.age=age;
//methods==> (function or actions on literal object)
// this.walk=function(){
//     console.log(`hello i am walking and iam ${this.firstName}`);
// }
}

//there is some thing called prototype ==> inside theobj ==> related to the function inside the object
//so the new way to build the method // instead to build the method or function inside the object or tje 
//constructor function // i build it outside the construtor  function but its related to the constructor  called it  prototype //decleare a function oytside the constructor

//build prototype outside the constructor // i can use this keyword inside the prototype //cause it is related 
//to the constructor 
Students.prototype.walk=function(){
    console.log(`hello i am walking and iam ${this.firstName}`);
}

Students.prototype.talk=function(){
    console.log('i am talking ', this.age);
}


//if i use this outside the object(glopally) it will refer to the window
// console.log(this);
// console.log(this.age)//outside the object it will give me undefined;

//to create objects using constructor function //i use magic word //new ==>pass arguments(values)for the parameters
//new objects//create new instance using constructor function 
 let dunia= new Students('dunia','kilany',24)
 console.log('create new instance or object for dunia using the constructor',dunia);
dunia.walk();
dunia.talk()
let malek= new Students('malek','kilany',23)
 
console.log(malek);
//calling functions or methods 
malek.walk();
malek.talk()

//so using new and the constructor function i create new instances (objects)==> if i want to store all
//objs that i am created in array 

let studentArray=[dunia,malek]
console.log(studentArray);//log array with 2objects {}
console.log(studentArray[1]);

console.log(Students.prototype);//  log the functions(methods)related to the constructor 


//DOM ==> lists 
//DOM ==> tables 

//get element by id 
let parent = document.getElementById('parent')
//create table element 
let table = document.createElement('table')
//append

parent.appendChild(table)

//components of table ==> tr ==< table row

//th ==> table header 
//td==> table ceils (data)

/*<table>
<tr>
<th><th/>
<th><th/>
<tr/>
<tr>
<td/>
<td/>
<tr/>
<table/>*/
//create tr for table header 
 let tr = document.createElement('tr')
 //append

 table.appendChild(tr)
 let th0 = document.createElement('th')

 tr.appendChild(th0)

 th0.textContent= 'firstName'

 let th1 = document.createElement('th')

 tr.appendChild(th1)

 th1.textContent= 'lasttName'


 let th2 = document.createElement('th')

 tr.appendChild(th2)

 th2.textContent= 'age'


 //i have student array [students,students]//contain objs that i am already created 
//so to fill td (loop through this array )
for (let i = 0; i < studentArray.length; i++) {
//2 rows //array elements
    let studentRow= document.createElement('tr')

    table.appendChild(studentRow)

    //td for firstName
    let td1= document.createElement('td')
    studentRow.appendChild(td1)
    td1.textContent=studentArray[i].firstName
//td for lastName
let td2= document.createElement('td')
studentRow.appendChild(td2)
td2.textContent=studentArray[i].lastName 
//td for age 

let td3= document.createElement('td')
studentRow.appendChild(td3)
td3.textContent=studentArray[i].age
} 


//make as alist 

let container= document.getElementById('container')
let h1 = document.createElement('h1')
container.appendChild(h1)
h1.textContent='students info'
let ul = document.createElement('ol')

container.appendChild(ul)

// create li 
//li numbers = array length 

for (let index = 0; index < studentArray.length; index++) {
  let li= document.createElement('li')
  ul.appendChild(li)
  li.textContent=studentArray[index].firstName + ' '+studentArray[index].lastName+' '+studentArray[index].age
    
}

