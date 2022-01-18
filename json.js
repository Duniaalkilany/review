//json

//=============================json=================================================//
/*
JSON===>
-JSON ===> javascript object notation 
-not alanguage or tool
- is syntax/format ===>sharing data between server and client 
-object contain proparties and it is values 
-JsSON derived fron js (same idea of js objects )
-alternative to XML  
-extension is .json 
- MIME is aplication/json


//why jsom ??
-easy to use and read 
-use by ost programming languaged and it is frameworks 
-you can convert JSONbject to js object 
-you can convert js object ti JSON objet 
-API support ???

//JSON vs XML

===>JSON (js object notation)
-text based format (so it is format/syntax)
-light weight
-no tags used(objects)
-shorter
-can use arrays 
-not support comments
===>XML 
-markup language
-heavier
-using tags
-not short 
-can not use arrays
-support comment 
*/

//=================================syntax/data type==================================//
/*

===>syntax
-data written inside{ }
-data contains key==>value
-key and value seperated by :(colon)===>key:value
-key should be wrapped in double quotes ""===>"key":value
- data (each property "key":value)seperates by coma , //{"key":value,"key":value}
-can be writen in one line and multiple lines depend on data 
-[]===>square brackets contain arrays
-{}===>curely bracket contain object 


====>Data types : (for values )

number
string 
boolean 
null
array
json object differ from js object (key between double quote )
*/

/*
jSON editor online
*/

//==============API overview /json tools===================================//
/*

API :application programming interface

json tools
-json editor online
-myjson
-json.org
-jsonformatter
-https://jsonlint.com/
*/
//==========================complex json object /compare with js=========================//

/*- in js i can write key in double quotes/single quotes/if valid identifier i can use it as key without quotes
- in json object  just wrapped key with double quotes//also value i string with double quotes .

*/


//js objects
let productOne={
    "name":"pc",
    "price":2400
}
let productTwo={
    "name":"pc",
    "price":2400
}
let productThree={
    "name":"pc",
    "price":2400
}
let productFour={
    'name':"pc",
    "price":2400
}

console.log(productOne.name);
console.log(productFour.name);

//==========================accessing json data=========================//

const myObj= {
    "userName": "dunia",
    "location": "jordan",
    "age": 24,
    "married": false,
    "skills": [["html","css"],["js","node.js"],["react","vue"]],
    "skillsProgress":[{"html":70,"css":50},{"js":90,"node-js":90},{"react":80,"vue":null}],
    "address": {
      "USA": "marka",
      "JORDAN": "Amman",
      "UAE": ["newyork", "calefornia"],
      "Aliase": null
    }
  }

  /*this is json object //in js file i store it in avaraible /also i can require it 
accessing json object (double quotes for key ,value if string also double quotes )
1.dot notation
2.bracket notation 
*/
console.log(myObj.skills[0][1]);//css
console.log(myObj["skillsProgress"][1].js);//90
console.log(myObj["skillsProgress"][1]["node-js"]);//90
console.log(myObj.address.UAE[1]);//calefornia


const weather=[
    {
        "data": [
            {
            "moonrise_ts": 1616530626,
            "wind_cdir": "SSW",
            "rh": 85,
            "pres": 1024.8334,
            "high_temp": 9.8,
            "sunset_ts": 1616552878,
            "ozone": 366.3854,
            "moon_phase": 0.779292,
            "wind_gust_spd": 3.5996094,
            "snow_depth": 0,
            "clouds": 60,
            "ts": 1616482860,
            "sunrise_ts": 1616508345,
            "app_min_temp": 1.3,
            "wind_spd": 0.98886496,
            "pop": 15,
            "wind_cdir_full": "south-southwest",
            "slp": 1029.5,
            "moon_phase_lunation": 0.36,
            "valid_date": "2021-03-23",
            "app_max_temp": 9.8,
                "vis": 23.121166,
                "dewpt": 5.1,
                "snow": 0,
                "uv": 3.4955893,
                "weather": {
                    "icon": "c03d",
                    "code": 803,
                    "description": "Broken clouds"
                },
                "wind_dir": 211,
                "max_dhi": null,
                "clouds_hi": 16,
                "precip": 0.1875,
                "low_temp": 5,
                "max_temp": 9.9,
                "moonset_ts": 1616502771,
                "datetime": "2021-03-23",
                "temp": 7.5,
                "min_temp": 5,
                "clouds_mid": 8,
                "clouds_low": 58
            },
            {
                "moonrise_ts": 1616621240,
                "wind_cdir": "S",
                "rh": 89,
                "pres": 1009.5417,
                "high_temp": 8.6,
                "sunset_ts": 1616639363,
                "ozone": 403.04166,
                "moon_phase": 0.863661,
                "wind_gust_spd": 15.296875,
                "snow_depth": 0,
                "clouds": 95,
                "ts": 1616569260,
                "sunrise_ts": 1616594624,
                "app_min_temp": 0.9,
                "wind_spd": 4.383793,
                "pop": 90,
                "wind_cdir_full": "south",
                "slp": 1014.4375,
                "moon_phase_lunation": 0.39,
                "valid_date": "2021-03-24",
                "app_max_temp": 8.6,
                "vis": 22.425667,
                "dewpt": 4.5,
                "snow": 0,
                "uv": 2.3655047,
                "weather": {
                    "icon": "r01d",
                    "code": 500,
                    "description": "Light rain"
                },
                "wind_dir": 178,
                "max_dhi": null,
                "clouds_hi": 35,
                "precip": 7,
                "low_temp": 4.7,
                "max_temp": 8.8,
                "moonset_ts": 1616591168,
                "datetime": "2021-03-24",
                "temp": 6.2,
                "min_temp": 4.7,
                "clouds_mid": 68,
                "clouds_low": 83
            },
            {
                "moonrise_ts": 1616712188,
                "wind_cdir": "SSE",
                "rh": 82,
                "pres": 1000.8333,
                "high_temp": 9.7,
                "sunset_ts": 1616725848,
                "ozone": 378.7396,
                "moon_phase": 0.931782,
                "wind_gust_spd": 3.5078125,
                "snow_depth": 0,
                "clouds": 89,
                "ts": 1616655660,
                "sunrise_ts": 1616680902,
                "app_min_temp": 1.5,
                "wind_spd": 1.1227753,
                "pop": 85,
                "wind_cdir_full": "south-southeast",
                "slp": 1011.8958,
                "moon_phase_lunation": 0.42,
                "valid_date": "2021-03-25",
                "app_max_temp": 9.7,
                "vis": 20.522167,
                "dewpt": 3.8,
                "snow": 0,
                "uv": 2.521648,
                "weather": {
                    "icon": "r01d",
                    "code": 500,
                    "description": "Light rain"
                },
                "wind_dir": 167,
                "max_dhi": null,
                "clouds_hi": 1,
                "precip": 6.125,
                "low_temp": 5.2,
                "max_temp": 9.8,
                "moonset_ts": 1616679248,
                "datetime": "2021-03-25",
                "temp": 6.8,
                "min_temp": 5,
                "clouds_mid": 15,
                "clouds_low": 89
            }
        ],
        "city_name": "Seattle",
        "lon": -122.33207,
        "timezone": "America/Los_Angeles",
        "lat": 47.60621,
        "country_code": "US",
        "state_code": "WA"
    },
    {
        "data": [
            {
                "moonrise_ts": 1618820363,
                "wind_cdir": "SSE",
                "rh": 45,
                "pres": 1011.86,
                "high_temp": 12.4,
                "sunset_ts": 1618858114,
                "ozone": 387.7,
                "moon_phase": 0.378309,
                "wind_gust_spd": 4.83376,
                "snow_depth": 0,
                "clouds": 40,
                "ts": 1618783260,
                "sunrise_ts": 1618807952,
                "app_min_temp": 11.5,
                "wind_spd": 1.52375,
                "pop": 0,
                "wind_cdir_full": "south-southeast",
                "slp": 1018.41,
                "moon_phase_lunation": 0.23,
                "valid_date": "2021-04-19",
                "app_max_temp": 16.2,
                "vis": 0,
                "dewpt": 2.8,
                "snow": 0,
                "uv": 0.580346,
                "weather": {
                    "icon": "c02d",
                    "code": 802,
                    "description": "Scattered clouds"
                },
                "wind_dir": 161,
                "max_dhi": null,
                "clouds_hi": 0,
                "precip": 0,
                "low_temp": 6.4,
                "max_temp": 16.2,
                "moonset_ts": 1618795181,
                "datetime": "2021-04-19",
                "temp": 14.8,
                "min_temp": 11.5,
                "clouds_mid": 23,
                "clouds_low": 30
            },
            {
                "moonrise_ts": 1618909990,
                "wind_cdir": "NE",
                "rh": 63,
                "pres": 1010,
                "high_temp": 17,
                "sunset_ts": 1618944604,
                "ozone": 372.781,
                "moon_phase": 0.479758,
                "wind_gust_spd": 6.77979,
                "snow_depth": 0,
                "clouds": 40,
                "ts": 1618869660,
                "sunrise_ts": 1618894236,
                "app_min_temp": 2,
                "wind_spd": 1.21594,
                "pop": 10,
                "wind_cdir_full": "northeast",
                "slp": 1016.61,
                "moon_phase_lunation": 0.27,
                "valid_date": "2021-04-20",
                "app_max_temp": 17,
                "vis": 0,
                "dewpt": 4.3,
                "snow": 0,
                "uv": 5.39188,
                "weather": {
                    "icon": "c03d",
                    "code": 803,
                    "description": "Broken clouds"
                },
                "wind_dir": 47,
                "max_dhi": null,
                "clouds_hi": 0,
                "precip": 0.0957031,
                "low_temp": 5.6,
                "max_temp": 17,
                "moonset_ts": 1618884240,
                "datetime": "2021-04-20",
                "temp": 11.9,
                "min_temp": 5.6,
                "clouds_mid": 36,
                "clouds_low": 11
            },
            {
                "moonrise_ts": 1619000197,
                "wind_cdir": "SE",
                "rh": 67,
                "pres": 1010.27,
                "high_temp": 17,
                "sunset_ts": 1619031094,
                "ozone": 362.823,
                "moon_phase": 0.584771,
                "wind_gust_spd": 8.97155,
                "snow_depth": 0,
                "clouds": 28,
                "ts": 1618956060,
                "sunrise_ts": 1618980521,
                "app_min_temp": 2.9,
                "wind_spd": 1.7877,
                "pop": 10,
                "wind_cdir_full": "southeast",
                "slp": 1016.86,
                "moon_phase_lunation": 0.3,
                "valid_date": "2021-04-21",
                "app_max_temp": 17,
                "vis": 0,
                "dewpt": 5.8,
                "snow": 0,
                "uv": 4.1868,
                "weather": {
                    "icon": "c02d",
                    "code": 802,
                    "description": "Scattered clouds"
                },
                "wind_dir": 141,
                "max_dhi": null,
                "clouds_hi": 4,
                "precip": 0.109375,
                "low_temp": 5.3,
                "max_temp": 17,
                "moonset_ts": 1618972810,
                "datetime": "2021-04-21",
                "temp": 12.2,
                "min_temp": 6.2,
                "clouds_mid": 14,
                "clouds_low": 20
            }
        ],
        "city_name": "Paris",
        "lon": 2.35,
        "timezone": "Europe/Paris",
        "lat": 48.86,
        "country_code": "FR",
        "state_code": "11"
    },
    {
        "data": [
            {
                "moonrise_ts": 1618905792,
                "wind_cdir": "WSW",
                "rh": 23,
                "pres": 913.456,
                "high_temp": 33.7,
                "sunset_ts": 1618935181,
                "ozone": 289.615,
                "moon_phase": 0.571386,
                "wind_gust_spd": 12.3056,
                "snow_depth": 0,
                "clouds": 64,
                "ts": 1618866060,
                "sunrise_ts": 1618887984,
                "app_min_temp": 20.8,
                "wind_spd": 2.33611,
                "pop": 0,
                "wind_cdir_full": "west-southwest",
                "slp": 1011.66,
                "moon_phase_lunation": 0.27,
                "valid_date": "2021-04-20",
                "app_max_temp": 31.2,
                "vis": 0,
                "dewpt": 3.5,
                "snow": 0,
                "uv": 7.40508,
                "weather": {
                    "icon": "c03d",
                    "code": 803,
                    "description": "Broken clouds"
                },
                "wind_dir": 255,
                "max_dhi": null,
                "clouds_hi": 49,
                "precip": 0,
                "low_temp": 15.8,
                "max_temp": 33.7,
                "moonset_ts": 1618875199,
                "datetime": "2021-04-20",
                "temp": 27,
                "min_temp": 21.8,
                "clouds_mid": 32,
                "clouds_low": 0
            },
            {
                "moonrise_ts": 1618995644,
                "wind_cdir": "W",
                "rh": 33,
                "pres": 915.771,
                "high_temp": 27.7,
                "sunset_ts": 1619021623,
                "ozone": 289.438,
                "moon_phase": 0.676877,
                "wind_gust_spd": 13.0126,
                "snow_depth": 0,
                "clouds": 27,
                "ts": 1618952460,
                "sunrise_ts": 1618974317,
                "app_min_temp": 15.8,
                "wind_spd": 2.48181,
                "pop": 0,
                "wind_cdir_full": "west",
                "slp": 1015.29,
                "moon_phase_lunation": 0.3,
                "valid_date": "2021-04-21",
                "app_max_temp": 26.5,
                "vis": 0,
                "dewpt": 3.6,
                "snow": 0,
                "uv": 8.63135,
                "weather": {
                    "icon": "c02d",
                    "code": 802,
                    "description": "Scattered clouds"
                },
                "wind_dir": 267,
                "max_dhi": null,
                "clouds_hi": 20,
                "precip": 0,
                "low_temp": 14.6,
                "max_temp": 27.7,
                "moonset_ts": 1618964045,
                "datetime": "2021-04-21",
                "temp": 21.2,
                "min_temp": 15.8,
                "clouds_mid": 7,
                "clouds_low": 0
            },
            {
                "moonrise_ts": 1619085721,
                "wind_cdir": "W",
                "rh": 17,
                "pres": 917.534,
                "high_temp": 27.3,
                "sunset_ts": 1619108065,
                "ozone": 302.281,
                "moon_phase": 0.676877,
                "wind_gust_spd": 10.8675,
                "snow_depth": 0,
                "clouds": 54,
                "ts": 1619038860,
                "sunrise_ts": 1619060650,
                "app_min_temp": 14.6,
                "wind_spd": 2.17971,
                "pop": 0,
                "wind_cdir_full": "west",
                "slp": 1017.37,
                "moon_phase_lunation": 0.33,
                "valid_date": "2021-04-22",
                "app_max_temp": 26.1,
                "vis": 0,
                "dewpt": -6.3,
                "snow": 0,
                "uv": 8.5652,
                "weather": {
                    "icon": "c03d",
                    "code": 803,
                    "description": "Broken clouds"
                },
                "wind_dir": 280,
                "max_dhi": null,
                "clouds_hi": 54,
                "precip": 0,
                "low_temp": 15.2,
                "max_temp": 27.3,
                "moonset_ts": 1619050445,
                "datetime": "2021-04-22",
                "temp": 20.6,
                "min_temp": 14.6,
                "clouds_mid": 0,
                "clouds_low": 0
            }
        ],
        "city_name": "Amman",
        "lon": 35.91,
        "timezone": "Asia/Amman",
        "lat": 31.95,
        "country_code": "JO",
        "state_code": "16"
    }
  ]


  //accessing 
  console.log(weather[2]['city_name']);
  console.log(weather[2].lon);
  //looping through json data ===>(array of objects , json onjects "key":value )

  weather.map((ele,idx,arr)=>{
console.log(idx,ele["city_name"],ele.lon,ele.data[0].weather["description"]);
  })


  //second array method called find 

let result=  weather.find((ele,idx)=>{
      return ele["city_name"]==="Amman"
  })


  console.log(result);

  let result2=weather.findIndex((ele,idx,arr)=>{
      return ele["city_name"]==="Amman"
  })

  console.log(result2);

//======================parse,stringify with js=======================//
//share data (json) betwwen server client 
//if client recieve json from server
//in client i want to edit this json obj ===>first step is to convert it from json obj to js by using JSON.parse(json==>js) 
let jsonObj=`[{"name":"dunia","age":24},{"first":1,"second-2":2}]`
console.log(jsonObj);
console.log(typeof jsonObj);
let jsObj=JSON.parse(jsonObj)
console.log(jsObj);
console.log(typeof jsObj);

//then if i want to send it to server i have to strigify it (js obj===>json obj )
let jsObj2={userName:"malek",age:23}
console.log(typeof jsObj2);
let jsonObj2=JSON.stringify(jsObj2)
console.log(jsonObj2);//{"userName":"malek","age":23}
console.log(typeof jsonObj2);


//

let test=JSON.parse('1')//1
console.log(test);
console.log(typeof test);//number


//writ a function take arr as argunent if type of element is nymber convert it to string 


let arr=[1,2,"3","4"]

function convToNum(arr){
return arr.map((ele)=>{
return typeof ele==="string"?JSON.parse(ele):ele
})
}

console.log(convToNum(arr));//[1,2,3,4]

//JSON.parse()===>delete ''===>covert json object to js object 
//JSON.strigify====>jsobject to json object 


// document.getElementById("name").innerHTML=jsObj[0].name
// document.getElementById("age").innerHTML=jsObj[0]["age"]
let jO={name:"dunia",age:24}
let jsoO=JSON.stringify(jO)//{"name":"dunia","age":24}"
console.log(typeof jsoO);//string
console.log(jsoO);
//can not access json object whwn it is as string i should (parse) it ===>convert it to js object 
document.getElementById("name").innerHTML=jsoO["name"]//undefined
document.getElementById("age").innerHTML=jsoO["age"]//undefined
document.getElementById("name").innerHTML=jsoO.slice(jsoO.indexOf("d"),jsoO.indexOf(",")-1)//will print json obj (string){"name":"hussam","age":23}


//===========================load json data with (jQuery & $.getJSON)=========================//