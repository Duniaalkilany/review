'use strict'
//building constructor function===> using for building the objs(instances)

//i have form //from form inputs ===>using constructors===> i build instances 
// naming of the constructor function===>bascal ==>capital litter 
//-----constructor function---------//
let travel=[];

function Travel (name,place,tarnsport){
this.name=name;
this.place=place;
this.tarnsport=tarnsport
travel.push(this)
}
//render function as aprototype//to render each instance
let container = document.getElementById('container')
let p=document.createElement('p')
container.appendChild(p)
Travel.prototype.render=function(id){

let nameData=document.createElement('h3')
p.appendChild(nameData)
nameData.textContent="Place Name:"+" "+this.name

let placeData=document.createElement('h3')
p.appendChild(placeData)
placeData.textContent=`Trip Place: ${this.place}`

let transportData=document.createElement('h3')
p.appendChild(transportData)
transportData.textContent=`Type Of Transport: ${this.tarnsport}`

//element for the img //create img from place selected data

let img=document.createElement('img')
p.appendChild(img)
img.setAttribute('src',`imgs/${this.place}.png`)

let span=document.createElement('span')
p.appendChild(span)

span.innerHTML = `<button onclick="deleteItem(${id})">delete</button>`;
}
// function renderAll() {
//     for( let i in travel ){
//      travel[i].render();
//     }
//   }
function renderAll(id){
    for (let i = 0; i < travel.length; i++) {

        let nameData=document.createElement('h3')
p.appendChild(nameData)
        nameData.textContent="Place Name:"+" "+travel[i].name
        
        let placeData=document.createElement('h3')
        p.appendChild(placeData)
        placeData.textContent=`Trip Place: ${travel[i].place}`
        
        let transportData=document.createElement('h3')
p.appendChild(transportData)
        transportData.textContent=`Type Of Transport: ${travel[i].tarnsport}`
        
        //element for the img //create img from place selected data
        
        let img=document.createElement('img')
       p.appendChild(img)
        img.setAttribute('src',`imgs/${travel[i].place}.png`)
        

        let span=document.createElement('span')
p.appendChild(span)

span.innerHTML = `<button onclick="deleteItem(${id})">delete</button>`;
    }
}

//-------form---------//
//access to html 
let form =document.getElementById('form')
form.addEventListener('submit',submitHandler)

function submitHandler(event){

    event.preventDefault()
    console.log(event);
 
let name=event.target.name.value

let place=event.target.place.value

let transport=event.target.transport.value

let newTravel= new Travel(name,place,transport)
//save to LS 
saveToLocal()
newTravel.render()

//see each instance i created 

}


//save to local storage 
function saveToLocal (){
    let stringifiedTravel=JSON.stringify(travel)
    console.log(stringifiedTravel);
    localStorage.setItem('stringifiedTravel',stringifiedTravel)
}

//check Local storage
function checkLocalStorage (){
    if(localStorage.stringifiedTravel){
        let recovered=localStorage.getItem('stringifiedTravel')
        console.log('recovered',recovered);
        let parse=JSON.parse(recovered)

        travel=parse
        console.log('travel',travel);
    }
//function to rendor from localStorage
renderAll()
}
checkLocalStorage()


function deleteItem(id){
 
travel.splice(id,1)

saveToLocal()


}




