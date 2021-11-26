'use strict'

//ask the user to enter some data //interact with the user //get info from the user //text field
//return the value if ok is clicked //if i enter the data then i press ok the data will saved in the variable and i can return the data by using the variable .
let score=0
let name = prompt('hello , enter your name please ??')

alert(`hello ${name} , answer this questions`)

//q1

function question1(){
    let college = prompt('hashemite is your college?')
/*
switch//if
is used to perform different actions based on different conditions.
//select one of code blocks to be executed 

*/
switch(college.toLocaleUpperCase()){
case 'YES':
case 'Y':
alert('your answer is correct ')
score++
break;
case 'NO':
case 'N':
    
alert('your answer is not correct')
break;

default:
    alert('pkease enter just Yes or No')
}
}

question1()


//functions
/**
 1.declearation
 function myFunction (){}
 2.expression

 const myFunction= function(){}
 */
/**
 equal to (value)==> ==
 equal (value/type)==> ===
 */
 const question2=function(){

    let color= prompt('red is your fav color?')
console.log('color',color);
// let upperColor=color.toLocaleUpperCase()
// console.log(upperColor);
    if(color.toUpperCase()=='YES'||color.toUpperCase()=='Y'){
        alert('your answer is true')
        score++;
      

    }

    else if(color.toUpperCase()=='NO'||color.toUpperCase()=='N'){
alert('false')

    }else(
        alert('invalid , answer Yes or No')
    )
 }

 question2()


 function question3(){

    let movie=prompt('ggg is your fav movie')

    switch(movie.toUpperCase()){
    
        case 'YES':
    
        case'Y':

    
        alert('true')
    
        score+=1
    
        break;

    
        case 'NO':
        case 'N':
        alert('false')

        default:
        alert('write yes or no ')
    }
 }

question3()



const question4 = function(){
    let play=prompt('do you like to play?')

    if(play.toUpperCase()=='YES'||play.toUpperCase()=='Y'){
alert('true')
score++;

    }else if (play.toUpperCase()=='NO'||play.toUpperCase()=='N'){
alert('falseeee')
    }else(
alert('enter yes/y or no/n')
    )
}
question4()


//gusseing game //have for tries 

alert(`hi ${name} lets guess???`)

function question5(){
    
let counter=0
for (let index = 0; index < 4; index++) {
    let guess=Number(prompt('my month??')) 
  console.log(typeof(guess));


if(guess===11){
alert('true')
score++;
break;
    }

else if (guess<11){
alert('too low')
counter++;
 } 
 
else if(guess>11){
alert('too high')
counter++
 }

}
if(counter>=4||counter===0){
    alert('sorry , youfinished your tries')
}else {
    alert('you gussed')
}


}

question5()


//using arrays with for function //also i have number of tries so ==> instead for loop 


function question6(){
    let count=0

    let foodAray=['MANSAF','BURGER','PIZZA']
    for (let index = 0; index < 4; index++) {
      let food=prompt('what my fav food (mansaf,burger,pizza)')

      for (let i = 0; i < foodAray.length; i++) {
    if(food.toUpperCase()===foodAray[i]){
alert('true')
score++;
index=4;
break
    }
          
      }
    if(index!=4) {
        alert('guess again')
        count++
    }   
    }

    if(count>=4){
        alert('soory you finished your tries')
    }else(
        alert('you gussed')
    )
}
question6()

alert('your score'+" "+score)