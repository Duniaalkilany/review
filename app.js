'use strict'
//201
//objects ==> itsavariables bur with many values 
/*decleare variable 
let name = 'dunia'*/

/*decleare object ==>

//usually using conston decleare object 
//object literal ==>way to decleare oe write object in js 

let dunia={
//object proparties 
//name:value
firstName ='dunia',
lastName='kilany',
age:24,
education:'electrical engineering',
likes:[writting,swimming,drawing],
fullName : function (){
    return dunia.firstName + '' +dunia.lastName
}
//object mehods ===>actions can performed on object 
//methods is a function stored as proparty //stored in obj proparties as function 
//access methods by using objName.method()//if not using paranteses it will return the function definition

}

*/
//DOM ==> document object modeling ==> access document like HTML, XML==>and add ,edit structure, style of document==> 

//document is the structure of HTML page . 
//console.log(document);//log the structureof html page

//1.if i want to add element (like h3)to html page from js file ==>---document.write-----
//h3 element will be after script element in html page  cause i use js to add it to html file 
//document.write('<h3>'+'hello , i am adding h3 element to the html document fromjs'+'<h3/>')

//2.i want to target 

//get element by id //adding some thing to specific place of html file 

//let parent= document.getElementById('parent')

//3.create element,child===>
//let child=document.createElement('p')//will crete element p in html page 
//console.log(parent);//log the div
//console.log(child);//log the p

//if i want to add the p element inside div element ===> div already in html page==> using js i create p element 
//4.i want div to pe parent element , and p to be child//append child

//parent.appendChild(child)

//console.log(parent);//log the div //inside div i have p element as a child 

//5.add text to the element which i created using js 

//child.textContent='hello i am adding text from js '

//inside div crete ul , and inside this list add likes proparty from the array in the object 


//1.crete object literal 
//get elemet by id 
let parent=document.getElementById('parent')
const dunia = {
firstName:'dunia',
lastName:'kilany',
likes:['drawing','writting','swimming'],
//method ==> actions can performed on object==>function
getAge:function (){
this.age=randomAge(20,30)+''+"years"
console.log(this.age);
}

}

//when i decleare a methode as function //prototype inside a object i ness to access oe call this method
//outside the object .
 dunia.getAge()
 console.log(dunia);

console.log('age',dunia.age);
//create element
let h1=document.createElement('h1')
let h2=document.createElement('h2')
//append
parent.appendChild(h1)
parent.appendChild(h2)
//textcontent

h1.textContent='dunia likes'
h2.textContent='age='+dunia.age
let unorderedList = document.createElement('ul')//crete ulelement
parent.appendChild(unorderedList)//append element
//loop through likes array ==> likes-->(proparty inside dunia obj)
for(let i=0;i<dunia.likes.length;i++){
    //create elements (li)

    let itemList=document.createElement('li')

    //append==>ul parent to li 
    unorderedList.appendChild(itemList)
//textcontent

itemList.textContent=dunia.likes[i]

}

//function to generatr random number
//Math.random==>generate random number between(min,max)
//Math.floor==>12.9==>12 //اقل عدد صحيح
//Math.ceil==>12.1==>13//اكبر عدد صحيح
//Math.round==>12.4==>12,12.5==>13//تدوير 

//in this function i generate ramdom number ==>this function take two numbers (min , max )==> then using 
//Math.floor to round it (12.9===>12 for example )
function randomAge (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//each time generate a random number between 20,30
console.log(randomAge(20,30));
console.log(randomAge(20,30));
console.log(randomAge(20,30));



