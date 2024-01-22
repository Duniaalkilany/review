# What Is JavaScript ?

1.Scripting Or Programming Language

2.Working On Client Side And Server Side

3.Implement Complex Features On A Web Page By Making It Interactive

- Core Language

- DOM //document object model===interact with html from js 

- BOM //browser object model

- OOP //object oriented programming

-  notes :

- check last version ===> help==>check for updates
- bracket pair colorize
- EditorConfig for Visual Studio Code====>settings that i do in a config file and i can share it with a team . (useful when i work in a team )
- eslint ===>to write code complies with the js rules and show you if you have errors

- Indent-Rainbow ===> code more readable ===> useful if you have nested components

- live server ===>localhost server to check your program
- Path Intellisense===>autocompletes filenames.
- Prettier ===>Formatter===>format if you have spaces ...===>ctrl+s===>you will have formatted code
- Emmet : Quick structure for html and css https://www.freecodecamp.org/news/how-to-write-faster-html-and-css-using-emmet/

# connect html with js file

using script tag in

- in head //if i use it here ===> use window.onload=function(){

}to read all the elements in the documents even

- at the end of the html body//recommanded

# Work With Chrome Developer Tools

opening===>inspect===>console(very useful developer tool //logs//running js )

- you can directly write on console and trying what you want using for example or write on js file
  1.document.write('< h2>hellllllllllo</ h2>')
  2.styling using ==>document.querySelector('h2').style.color="red"
  3.window
  4.window.close()===>close document
  5.window.onload=function(){

  }

  # Comments in js

  use to add comments ===>when i have more than one senario and prevent execution ===> ctrl+/ to convert js line or code to comment

  1. single line comment //
  2. multiple line comment

  # output to screen

  ## window===>is object

  1.window.alert('')===>alert('')===>show something to user===>stop appering all things until confirm the alert ===>dont use alert , use pop up instead .
  2.window.close()

  ## document===>its html page

1.  document.write()===>write something to html page from js ===>we do not use document.write('<h1>hello</h1>')===>we use document.createElement('h1')===>DOM
2.  document.getElementById('id').style.color='red'
3.  document.querySelector('h1').style.color='red'

## console===>is object have properties//actions

1.  console.log('')===>write or print something on console
2.  console.error('Error')
3.  console.table([])===>if i want to log the array as table (two col===>index,value)
4.  %c===>c directive ===>styling the console
    console.log('%first Edit%csecnd Edit','color:;font-size','color:;font-size')
5.  console.group('group name')//cinsole.groupEnd("")

- console not related to js it is related to web APIs===>apllication programming interface===>When writing code for the Web, there are a large number of Web APIs available. Below is a **list of all the APIs and interfaces (object types) that you may be able to use while(developing your Web app or site) .**
  **Web APIs are typically used with JavaScript,** although this doesn't always have to be the case.
  //console API//canvas API

## web APIs

https://developer.mozilla.org/en-US/docs/Web/API

# ES6===>ECMAScript15 or ECMAScript6 is the newer version of JavaScript that was introduced in 2015 (Modern JS)

//object
//oop
//BOM
//
//json /api's

