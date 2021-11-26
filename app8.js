
//global array for hours 
let hours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm ', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


//glopbal array to store each create element 

let theStoreDetailsArray=[]

let totalEachHour
let totalTotal =0

//constructor function

function storeDetails (location,min,max,avgCookieSale,randCustomerPerHour,salesPerHour,totalPerDay ){
this.location = location;
this.min = min;
this.max = max;
this.avgCookieSale = avgCookieSale;
//random customer per hour in array
this.randCustomerPerHour = [];
//sales per hour ==>
this.salesPerHour = [];
this.totalPerDay = 0;
this.totalEachHour = 0;

theStoreDetailsArray.push(this)
}

//here function to generate randomCustomerperhour//as prototype

storeDetails.prototype.randomCustomer=function(){
    for (let i = 0; i < hours.length; i++) {
       this.randCustomerPerHour.push(randomnumber(this.min,this.max))
        
    }
}

//prototype to find salesperhour ,total perday

storeDetails.prototype.amountOfCookiesPurchased=function(){
    for (let i = 0; i < hours.length; i++) {
        let amount=Math.floor(randomnumber(this.min,this.max) * this.avgCookieSale)
        this.salesPerHour.push(amount)
        this.totalPerDay+=amount
    }
}

//function to generate random number

function randomnumber (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//render functions

//access html element to render table1
//get elementby id
//create element
//append child
let table1=document.getElementById('table1')

//create table1 




//function to render header row

function headerRow (){
    //create header row 
    let headerRow=document.createElement('tr')
    table1.appendChild(headerRow)
    let thElement=document.createElement('th')
    headerRow.appendChild(thElement)
    thElement.textContent='locations'

    for (let i = 0; i < hours.length; i++) {
       let thElement2=document.createElement('th') 
       headerRow.appendChild(thElement2)
       thElement2.textContent=hours[i]
        
    }

    let thElement3=document.createElement('th')
    headerRow.appendChild(thElement3)
    thElement3.textContent='Daily Location Total'

}




// render table1 data //as prototype

storeDetails.prototype.render=function(){
//call the methods //prototypes

this.randomCustomer()
this.amountOfCookiesPurchased()
    let trElement=document.createElement('tr')
table1.appendChild(trElement)

let locationData=document.createElement('td')
trElement.appendChild(locationData)
locationData.textContent=this.location


for (let i = 0; i < hours.length; i++) {
    
   let salesData =document.createElement('td')
   trElement.appendChild(salesData)
   salesData.textContent=this.salesPerHour[i] 
}

//total per day 

let totalData=document.createElement('td')
trElement.appendChild(totalData)
totalData.textContent=this.totalPerDay





}

//footer function 

function footerRow (){
    let footRow=document.createElement('tr')
    table1.appendChild(footRow)
    
    let td1=document.createElement('td')
    footRow.appendChild(td1)
    td1.textContent='Totals'

    for (let i = 0; i < hours.length; i+=1
         ) {
    let totalEachHour=0
        for (let index = 0; index < theStoreDetailsArray.length; index++) {
         
            totalEachHour+=theStoreDetailsArray[index].salesPerHour[i]
        }
        console.log(totalEachHour);
        let td2=document.createElement('td')
        footRow.appendChild(td2)
        td2.textContent=totalEachHour
        totalTotal+=totalEachHour
    }

    let td3=document.createElement('td')
    footRow.appendChild(td3)
    td3.textContent=totalTotal
}

//new instances 
let amman = new storeDetails('amman',23,65,6.3,[],[],0)
let syria=new storeDetails('syria',3,24,1.2,[],[],0)
let dubai = new storeDetails('dubai',11,38,3.7,[],[],0)
let america=new storeDetails('america',20,38,2.3,[],[],0)

//render the table1 
function all(){
    headerRow()
    amman.render()
    syria.render()
    dubai.render()
    america.render()
    
    footerRow()
}


//**form and events */

let form=document.getElementById('form')
form.addEventListener('submit',submithandler)
function submithandler (e){
e.preventDefault();
table1.deleteRow(table1.rows.length-1)
let location=e.target.location.value
console.log(location);
let min = e.target.min.value

let max=e.target.max.value

let avgCookieSale=e.target.avgCookieSale.value

let newStore=new storeDetails(location,min,max,avgCookieSale)
newStore.render()
footerRow()

saveToLocal()
// theStoreDetailsArray.push(newStore)

console.log(theStoreDetailsArray);
document.getElementById('form').reset()
}

function saveToLocal (){
    let stringified=JSON.stringify(theStoreDetailsArray)
    localStorage.setItem('stringified',stringified)
}

function checkLocalStorage(){
    //checklocalstorage
    if(localStorage.stringified){
        let recovered=localStorage.getItem('stringified')
        console.log('hiiiihhhhhiiiiiiii');
        let parse=JSON.parse(recovered)
        theStoreDetailsArray=parse
      all() 
    }


}
checkLocalStorage()
//why i use parsient 

//converts its first argument to a string, parses that string, then returns an integer or NaN 



