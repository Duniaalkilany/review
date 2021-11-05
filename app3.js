'use strict'

let cats=[]

//builds constructor

function Cats (name,likes,img,isGoodWithCats,isGoodWithDogs,isGoodWithKids){
this.name=name;
this.likes=likes;
this.img=img;
this.isGoodWithCats=isGoodWithCats;
this.isGoodWithDogs=isGoodWithDogs;
this.isGoodWithKids=isGoodWithKids;

cats.push(this)

}

//methods//functions//prototype

Cats.prototype.getAge=function(){
    this.age=randomAge(2,5)+" "+"years"
}


//method or function to render 

Cats.prototype.render=function(){
    let profile=document.getElementById('kittenProfiles')

    let h2=document.createElement('h2')

    profile.appendChild(h2)

    h2.textContent=this.name


    let p = document.createElement('p')
    profile.appendChild(p)
    p.textContent=this.age


    let ul=document.createElement('ul')
    profile.appendChild(ul)
    for (let index = 0; index < this.likes.length; index++) {
      let li=document.createElement('li')
      ul.appendChild(li)
      li.textContent=this.likes[index]
     
    }


    let p2=document.createElement('p')
    profile.appendChild(p2)
    p2.textContent="is good with cats ?"+this.isGoodWithCats


    let p3=document.createElement('p')
    profile.appendChild(p3)
    p3.textContent="is good with dogs ?"+this.isGoodWithDogs

    
    let p4=document.createElement('p')
    profile.appendChild(p4)
    p4.textContent="is good with kids ?"+this.isGoodWithKids


    let img = document.createElement('img')

    profile.appendChild(img)
//i cant do img.textContent

// img.setAttribute('src','images/'+this.name+'.jpg')
img.setAttribute('src',this.img)
    

}






function randomAge(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min)
  //using floor to remove fractions
}


//HTML forms and js events 
//js events //usually with forms 

//i have html form 
//get this form by id 
//addEventListener(event, name of the target function)
//decleare the function 
//related function ==>event as paramenter
//preventDefault==> used to prevent the browser from executing the default action of the selected element.
//method stops the default action of an element from happening.
//each time i submit the page will refresh so i cant see the output
//so stop the page from refreching on submitting the form //event when submitting the form is refreshing//so i prevent this event 
//target info from html pages ===>event.target.id.value

let form=document.getElementById('form')
form.addEventListener('submit',submitHandler)

function submitHandler(event){
    event.preventDefault()//prevent the default action of an element of happening
    
  console.log(event);

let name =event.target.name.value

let likes=event.target.likes.value
//The split() method splits a string into an array of substrings
let likesArray=likes.split(',')
console.log(likesArray);
let img= event.target.img.value
// console.log(img);
console.log(likes);
let isGoodWithCats=event.target.cats.checked
console.log('isGoodWithCats',isGoodWithCats);
let isGoodWithDogs=event.target.dogs.checked
let isGoodWithKids=event.target.kids.checked

let newCat= new Cats(name,likesArray,img,isGoodWithCats,isGoodWithDogs,isGoodWithKids)
newCat.getAge()
newCat.render()
//reset the form after submitting
document.getElementById('form').reset()
//i want to not lose info of previouses cat profiles when refresh===> keep output ==>something like LS


}




