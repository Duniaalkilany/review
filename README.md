# practice

//use strict
//html ,xhtml
//input is string ===> using split to split strings intio array of substrings
likes=event.target.likes.value
let array=likes.split(',')
//localstorage
As a user, I would like to view all of my Places that I already added so that I can quickly view my Places in my page.
//localStorage
Whenever you add or create new instance/object using the form,
you should use the local storage in order to get all the objects you already created from it and render them using DOM.

//js commands nedded to write/read from LS
//allow to save key/value pairs in a web browser.

//localStorage.setItem(key,value)//write to LS
//localStorage.getItem(key)//read and render from local storage

//steps to save and get from Local Storage :

1.decleare a function to save to local storage //allow to save (key,value)==> in web browser
saveToLocal(){
//in the LS i saved my objs as strings , so i have at first to convert the js objs to strings ==>Json.stringify

so array of all objs that i am created i convert it ti strings ===>json.stringify
2.let stringifyarrayofobjs=JSON.Stringify(arrayofobjs)
//after this i can save it to local storage

//then i use localStorage.setItem('key','value')
//3.localStorage.setItem('stringifyarrayofobjs',stringifyarrayofobjs)

}

//read and render from local storage

1. declear function to check local Storage
   2.if(localStorage.storedkey)
   function checkLocalStorage (){
   if(localStorage.stringifyarrayofobjs){
   //if already stored in LS then get it
   3.let recovered =localStorage.getItem('key')
   //the recovered data will be strings because i saved it in local storage as strings so i will get it from local storage as strings(array of strings objs) so i need to parse the json string
   // The JSON.parse() method parses a JSON string
   4.let parse=JSON.parse(recoverd)

   travels=parse

   //call the function which is rendor all objs stored in ls

   render1()
   }
   }

//like textContent
//like innerHTML
//innerHTML is a property of every element. It tells you what is between the starting and ending tags of the element, and it also let you sets the content of the element
//buttons or a tag
<button onclick='' type='' >click</button>
<a href=''></a>

//splice

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//styling
1.external //using link tag

<link href='style.css'>

2.internal css===> i add style element/attribute in the html

<head>
<style>
    h1{
        color:red;

    }

</style>
</head> page insude it i do my style
3.inline ===> inside the tag it self
<h1 style="color:red ; text-alighn:center"></h1>

//hoe to add external font

//bg img
background-image:url("https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg") ;

&copy;Dunia Alkilany
