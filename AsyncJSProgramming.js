//======================= CallStack, WebAPI, Event Loop, Callback Queue==============//
/*
1-Call Stack
-calls (things you called it in script)
   -mechanism to make interpreter(مترجم اللغة ) track your calls 
   -when you call a function it is added to stack 
   -when function executed it is removed from stack 
   -the interpreter continue calling from the last point reached 
-call stack detect Web API methods and leave it to prowser to handle it 
2-Web API
---- Methods Available From Environment => Browser
  --- When Complete It(get vallback from method) Add The Callback To The Callback Queue
3-Event Loop
--- Wait The Call Stack To Finish
  --- Get Callback From Callback Queue
--- Add Callback To Call Stack
4-call back queue
*/

// Example One

let i = 10;
let j = 20;

console.log(i + j);

function first() {
  console.log("hello first");
}

function second() {
  first();
  console.log(`hello second `);
}

second();
window.setTimeout(() => {
  console.log("last");
}, 1000);
console.log("one");
window.setTimeout(() => {
  console.log("two");
}, 0);
console.log("three");

//one, three,tep,last
//example//i will not have the usuall error ===> can not access before initialization
window.setTimeout(() => {
  console.log(myVariable);
}, 0);
let myVariable = 100;
myVariable += 200;
//=================== Asynchronous vs Synchronous=======================//
/*
Sync:
-each statement should finished (executed ) to go on to the next statement 
Send request
Wait for response
go on with other code after response
example for sync

 console.log("dunia");
 window.alert("hello")
 console.log("alkilany");



Async:
-thread ===>
*A thread is a single sequential flow of control within a program. 
*thread of execution (موضوع للتنفيد)
*sequence of instructions that execute on a single stack.
* related set of instructions that are executed in order. 

-js is single thread language 
-not "Parallel Tasks"/parallel processing//multi threads  ===>like -java, c++ is multi thread 
*a model of program execution that allows for multiple threads to be created within a process, executing independently but at same time. 
*separate parts of an overall complex task are broken up and run simultaneously =====> reducing time of processing===>
* js can not do multi tasks at same time 
* js has one call stack 

-js has one call stack ? one task or one call in one time  (js can not do multi call in same times )
-so what is async , how js is async ===>
1.in js there are two types of queue
*stack queue===>first in last out 
*callback queue===>first in first out 

2.so in js when have async tasks ===>(Methods Available From Environment =>like : web API m
    like window.method(alert,setTimeOut)) ===> Browser is the environment ===>
call stack don not handle it leave it to browser(it is environment) to nandle it
4. When Complete It(get callback/response from it) Add The Callback To The Callback Queue
3. call stack continue===> go on with other code (continue calling from last point reached )
4.role of event loop : 
*when call stack finished(no tasks in call stack)
*event loop check if there are call back in callback queue
*then added it to call stack (first in in callback queue first out)==>first add to callstack 
*call stack handle it 
Async:

Send request
go on with other code
response come in any time on a callback

*/

//example 2
console.log("function one");
// alert("delay")
console.log("function 2 , execute me do not wait ");
/*what will happen above
1. call stack ===>mechanism to make iterpreter track calls 
2.first statement added to stack ===>exexuted===>removed from stack
3.next statement will stop the programm from executed (until i get response/callback)
4.then call stack continue for third statement (go up with the rest code ) 
-الذي حدث سابقا نفس مبدأ عمل sync programming
*/

//examole of async

console.log("one");
console.log(
  setTimeout(() => {
    console.log("three");
  }),
  1000
);

console.log(
  setTimeout(() => {
    console.log("four");
  }, 2000)
);
console.log("two");

//what happen above
/*

1.this what mean js is async
2.statement 1 added to call stack and executed
3.need time to get call back ===>browser handle it add xallback to callback queue
3.same thing 
4.thisstatement will added to call stack and executed
4.when call stack finshes
5.event loop check callback queue add callbacks to call stack 
6.call stack execute it
//so here i do not wait every thing execute at same time i use single thread (one call stack)
-web api handle  the script async in background 
*/

//==============================================================================
/*why i use Async programming 
1.improve performane //not freeze my programme (stop execute) like in sync

*/

//handeling async operations in js  :(تنفيدها عن طريق)
/*
1.Callback===>simplest way for handleing async operations
2.Promises
3. Generators
4. Async/Await
*/

//Callback
const button = document.querySelector("button");
const div = document.querySelector("div");

//write three functions ===>arrow function (ES6)

const setText = (text) => {
  div.textContent = text;
};
//cb is para for checkAuth and it is afunction ===>(para)
const checkAuth = (cb) => {
  setText("checking Auth...");
  //this checkAuth function ===> i pass function cb to check Auth , this function will execute once timer executed
  //after timer completed i call cb function and i pass true to it
  setTimeout(() => {
    cb(true);
  }, 2000);
};

const fetchUser = (cb) => {
  setText("Fetch User ....");
  setTimeout(() => {
    cb({ name: "dunia" });
  }, 2000);
};

button.addEventListener("click", () => {
  checkAuth((auth) => {
    if (auth) {
      fetchUser((user) => {
        setText(user.name);
      });
    }
  });
});

//you have to do this task in the future when the timer is done /at later point of time
// callback function is a function passed into another function as an argument,
//callback hell (many nested callbacks)===>difficult to error handeling

//=========================Http requests================================================//

/*
  -send or receive data from a server side resource.
  -we make http request to get data/reach external server or database ===>get data then do something with it 
  -we can make http request to API's endpoints 
  -API's endpoints===>url's  that a particular api or server exposes to us  
  -example 
  (how http request done?)
  1.from browser make request to a server endpoint
  2.this server will look to this request and say it is okey you want this data i will send it back 
  to you as a response 
  3. then i get data in our code as response then we can do something with it like render it to browser 
  -you can make your own api using back-end language (like node-js) 
  -make a request from browser to endpoint(api endpoint/own api server,.. we gwt back a selection of data in json format)
  -json ===>(syntax , format to share data between server client )
  -https://jsonplaceholder.typicode.com/===>free fake REST api 
  -we i write (url) directly inside the browser ===>dirctly request from browser t this endpoint===>then i will get response from server side (endpoint api) to browser 
  -go to dev tool===>inspect===>network===>headers ===>general===> request info 
  -http request to get data from some kind of api endpoint 
  - i said before to make request from js code/client 
  //==================================================
  http request using XMLHTTPRequest:
  1-make request object
   2.use open()method with object request ===>open method take two argument==>("METHOD","endpoint url")
   3.http method (request mthod)===>type of request you want to make
   -get ==>get data
   -post ===>send data
   -put===>to updata data
   -delete===>delete data 
   -patch===> 
4.then i have to use send method to send the request  
5.you can check request/response in network in devtool 
6.to know in code when request complete/get response/and how access data (response)
7. so to track the progress of request use event listener 
8.specific event called ready state change ===>fires every time there is state change in the request
9.state change mean ===>that the request going throudh different phases of the request (4) 
10.readyState===>property of request object 
-0===>UNSENT====>client create reuest.open() not called yet.
-1===>OPENED===>reuest.open('','') called
-2===>HEADERS-RECIEVED/send() methos called===>Headers,status are available
-3===>loading/Downloading (response text) holds partial data 
-4===>DONE===>operation complete (i send request recieve response)
10.when make request /track===<using addEvenListener('readystatechange')/open/send===>each time there is ready state change in request 
  */

//make request using XMLHttpRequest constructor
//XML===>(Extensible Markup Language )older data  format  than json (format using to share data like jsin but it is older)

const myRequest = new XMLHttpRequest(); //use it to send request from browser to endpoint url to get data

//myRequest object ====>created from XMLHttpRequest constructor ===>have proparties and methods

//to track request progress
//use addEventListner('onstatechange)===>this fires every time there is state change in the rerquest
//state change mean that the request going through different phases of the request (in reuest object {readystate:1,4}
let myDiv = document.getElementById("data");
myRequest.addEventListener("readystatechange", () => {
  if (myRequest.readyState === 4 && myRequest.status === 200) {
    //just have response if status===200
    console.log(myRequest, myRequest.readyState);
    console.log("response", myRequest.responseText);
    let jsonObj = myRequest.responseText; //i get from endpoint api ===>json object
    console.log(typeof jsonObj);
    //to use it and access it i have to parse it
    let jsObj = JSON.parse(jsonObj);
    console.log(jsObj);
    console.log(jsObj[0].title);
    for (let i = 0; i < jsObj.length; i++) {
      let nestedDiv = document.createElement("div");
      let eleText = document.createTextNode(jsObj[i].title);
      nestedDiv.appendChild(eleText);
      myDiv.appendChild(nestedDiv);
      // document.body.appendChild(nestedDiv);
    }
  } else if (myRequest.readyState === 4) {
    console.log("could not fetch data ");
  }
});
myDiv.style.textAlign = "center";
myDiv.style.color = "blue";
//use open method===>this method take two argument (method,url)/url==>where you want to make the request to ===>(endpoint)you want to get data from
myRequest.open("GET", "https://jsonplaceholder.typicode.com/todos/");

myRequest.send();
//if reradyState is 4 which mean done i get response (json text)//i can access and deal with it in addEventListener(function)

//================================== response Status Codes=======================================//
/*
send request===>response(status)codes ===> in range of (100,200,300,400,500)
for example get method ===> 200 mean i have response with the desired data i want ( i get the data )
-in 200 ===>ok===>successful response (requestrd sucess ===>mean of suceess depend on http method )
-in 300 ===> redirection messages 
-400===>Client error responses===>error in browser (client)such is syntax error in the client code ,use wrong end point
401===>server could not understand the client request because invalid syntax 
(403)===>forbidden ===>client do not have access to server content(unauthorized)===>server refuse to give the requested resourse 
(404)===> not found/wrong endpoint in request (not found the resourse that trying to make request to it because is not exist )
-500===>Server error responses
500===>enternal erroe response (error in server ===>encounterd situation===>server dose not know how to handle it  )
505===>http version not support (http version in request not supported on server )
*/

//==========================promises===========================================//
/*
- promise is one of the important features of ES6 
- Promise Make It Easy To Support Asynchronous Programming(easy to handeling Async tasks/programming)
-promise in js is like promise in real life 
-promise is something will happen in future 
-promise is placeholder for the future value 
- You Booked A Cinema Ticket, You Have A Promise From Cinema Owner to  Have A Seat
-You Got Task To Do, U Promised Your Boss To Do The Task
 - You Ordered Food From Restaurant
  --- [ Promise ] Is The Order Record
  --- [ The Future Value ] Is The Food You Will Receive
- You Ordered iPhone From Souq Shop
  --- [ Promise ] Is The Order Record
  --- [ The Future Value ] Is The iPhone You Will Receive

  (async ===> i did not waiting response )
  in async ===>multi promises (independent)

  -Promise Is An Object===>((async operation))هاد الاوبجيكت بيمثل نتيجة او حالة انتهاء العملية او ال طلب اللي قمت به )
- Promise Is The Event Completion Or Failure of Async Operation & Its Resulting Value.

- JavaScript Use Callbacks For Asynchronous Programming
  --- [1] Function Called And Do The Task
  --- [2] Action Complete
  --- [3] Another Function Called
  --- [4] Action Complete
  --- [5] Another Function Called
  - In Complex Cases => Every Call Add Nesting Level ===>Pyramid Of Doom===>callback hell
  - http://callbackhell.com/
  - Promise Avoiding Callback Hell Or Pyramid Of Doom

   - Promise Is One Of This States(resulting value of Async operation ===>event of completion or fauiler of async operation )
  [1] Pending => Not Fulfilled Or Rejected
  [2] Fulfilled => Operation Succeeded/i have desired  response
  [3] Rejected => Operation Failed/

*/
/*
-promise is object 
-Promise()===>built in constructor using to create promise object 
-promise constructor take a function as parameter==>executer function
-executer function take two parameters (resolve,reject)
-two args of executor function is handlers===>responsiable of resolve /reject of promise
   Asynchronous Operation
    Fulfilled => resolve
    Rejected => reject
*/
const myPromise = new Promise((resolve, reject) => {
  let connect = true;
  if (connect) {
    resolve("connection fulfilled"); //promise(connect)fulfilled
  } else {
    reject(Error("connection failed/rejected")); //promise(connect)rejected
  }
}).then(
  //then is method for promise object //take two functions asarguments (onfulfilled,onrejected)
  (resolved) => {
    console.log(resolved);
  }, //resolved===>take the content of resolve para in the executor function which is a para for promise object
  (rejected) => {
    console.log(rejected);
  } //take the content of reject para in executor function
);

console.log(typeof myPromise); //object

//another syntax
// const theResolved=(resolved)=>{console.log(resolved);}
// const theRejected=(rejected)=>{console.log(rejected);}
// myPromise.then(theResolved,theRejected)

//=============================promises, then /catch ==================================//

//first example

const myPromise2 = new Promise(function (resolve, reject) {
  //only one state executed ===>resolve or reject
  if (Math.random() * 100 < 50) {
    resolve("good");
  } else {
    reject("bad");
  }
})
  .then(
    //handle resolve /reject
    (onFulFilled) => {
      console.log(onFulFilled);
    }
    // (onRejected)=>{console.log(onRejected)}
  )
  .catch(
    //catch error/exceptions

    (onRejected) => {
      console.log(onRejected);
    }
  );

//instead of using catch() i can but null instead of resolved fun in then method
//call back hell===>Pyramid Of Doom====>each call add nested level
// firstRequest(function (response) {
//   secondRequest(
//     response,
//     function (nextResponse) {
//       thirdRequest(
//         nextResponse,
//         function (finalResponse) {
//           console.log("Final response: " + finalResponse);
//         },
//         failureCallback
//       );
//     },
//     failureCallback
//   );
// }, failureCallback);

// //promise

// firstRequest
//   .then(function (response) {
//     return secondRequest(response);
//   })
//   .then(function (nextResponse) {
//     return thirdRequest;
//   })
//   .then(function (finalResponse) {
//     console.log("Final response: " + finalResponse);
//   })
//   .catch(failureCallback);

//=======================================================
/*promise example :
  -promise is something which will going to take sometime to do 
  -promise(lookni will do someyhing and i am going to resolvr or rejected )
  -promise is lead to one of two outcomes(promise states /resulting of promise )
  --1-fulfilled===>promise resolved ====>we get the data we want
  --2-rejected===>meaning there is error 
  --3-pending(not fullfilled or rejected (do not have response and do not have error ))
inside executor function (resolve,reject)===>as parameters these two are functions built into promise api in js and automatically we recieve it as parameter in executor function 
-then is also method for promise object ===>take two callback functions as argu
-promise say ok "then" i will fire that function when we resolve the promise (and pass data we passed when resolve)
-so when we resolve something in promise , it fires the callback function in then methodand this call back function
takes the data we passed through the resolved function 
-if reject the promise we said that mean there is error===>second call back function inside then and it fire  if promise rejected  
*/

const getSomeThing = () => {
  return new Promise((resolve, reject) => {
    //inside executor function i do the network reequest
    //fetch something
    //if request success we call resolve and pass data we get to it as argu
    //if request not success(error) we call reject()and pass error through it
    // resolve("something we get it from request ");
    reject("some error");
  });
};

//when call getSomeThing() will return new promise inside promise either resolve or reject will call
getSomeThing().then(
  //fulfilled promise
  (data) => {
    console.log(data);
  },
  //rejected promise
  (error) => {
    console.log(error); // Uncaught (in promise) some error
  }
);
//away to do previouse in sugar syntax
//then inside it callback function which is fire if promise resolve (fulfilled)
//catch method and inside it i will use callback function which fired if promise reject
getSomeThing()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//====================== Promise – And XMLHTTPRequest=========================//

const getData = (resource) => {
  return new Promise((resolve, reject) => {
    //do request
    const newReq = new XMLHttpRequest();
    newReq.addEventListener("readystatechange", () => {
      if (newReq.readyState === 4 && newReq.status === 200) {
        const data = JSON.parse(newReq.responseText);
        resolve(data);
      } else if (newReq.readyState === 4) {
        //request complete(end request states 0-4) but status not 200

        reject("error getting resourse");
      }
    });
    newReq.open("GET", resource);
    newReq.send();
  });
};

// getData("https://jsonplaceholder.typicode.com/todos/")
//   .then((data) => {
//     console.log(data);

//     for (let i = 0; i < data.length; i++) {
//       const ele = document.createElement("h2");
//       ele.textContent = `${i + 1}-${data[i]["completed"]};`;
//       ele.style.color = "red";
//       myDiv.appendChild(ele);
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//====================== Promise /chaining– Ignoring The Pyramid Of Doom=========================//
/*
-promises ===> when try to sequentially get data one after another because we can chain promises together (in callbacks ==>nested callbacks leads to messy unimaintainable code  ) 
-use promises to manage network request (async operations)
-chaining promises ===>(chain promises together so we can perforn one async task after another in order)
-nested callback(callback hell (messy code)/chaining promises (cleaner, easier))
*/

getData("https://jsonplaceholder.typicode.com/todos/") //return promise
  .then((data) => {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      const ele = document.createElement("h2");
      ele.textContent = `${i + 1}-${data[i]["completed"]};`;
      ele.style.color = "red";
      myDiv.appendChild(ele);
    }
    // getData().then()//i want to do another synchronuse operation (instead of do like this i can chaining promises), also i should return

    return getData("json.json");
  })
  .then((data) => {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      const ele = document.createElement("h2");
      ele.textContent = `${i + 1}-${data[i]["userName"]};`;
      ele.style.color = "yellow";
      myDiv.appendChild(ele);
    }
    return getData("https://fakestoreapi.com/products/");
  })
  .then((data) => {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      const ele = document.createElement("h2");
      ele.textContent = `${i + 1}-${data[i]["description"]};`;
      ele.style.color = "black";
      myDiv.appendChild(ele);
    }
  })

  .catch((error) => {
    //one catch at the end(catch any error in each promise) ===>callback function which fire if reject any promise of chaining promises
    console.log(error);
  });

//===========================

const myPromise3 = new Promise((resolve, reject) => {
  let thePosts = ["a", "b", "c", "d", "e", "f", "h"];
  resolve(thePosts);
});
myPromise3
  .then((result) => {
    console.log(`Total number of posts:${result.length} posts`);
    return result;
  })
  .then((result) => {
    console.log(`the first post is :${result[0]}`);
    return result;
  })
  .then((result) => {
    console.log(`The last post is ${result[result.length - 1]}`);
    return result;
  })
  .then((result) => {
    console.log(`Every Page Has 2 Posts`);
    let num = Math.ceil(result.length / 2);
    console.log(`number of bages :${num}`);
  });

//===========================Promise – Fetch And Training’s==============================//
/*

 -send or receive data from a server side resource./reach external server (api endpoint)/database
to make http request :
1.XMLHttpREQUEST object 
2.newer and quicker to make http request  ===>usimg native fetch api ===>built into js language
-fetch()===>built in function in js ===> to make request just call this function pass the url(resource we want to fetch it ) as argu to it
-fetch API===>fetch return promise(بترجع promise)===>promise say look at some point i will either resolve if we have success or reject if there is error 
-so because fetch return promise (promise project)===>resolve(success response status) /reject(error) i can use methods of returned promise object (then/catch)

*/
fetch("https://fakestoreapi.com/products/")
  .then((response) => {
    //pass reponse object
    //fire when promise is resolve(fulfilled), even though response status not 200

    console.log("resolved", response); //response object//inside response object ,prototype==>there is json() method

    return response.json(); //get response data from response object and parese it no nees to JSON.parse()and output of this method is js object i can access it directly
    //promise //so resObj.json()===>return promise==>something will takelittle time to do (either resolve or reject )
  })
  .then((data) => {
    console.log("resolvedddddddddddddddd:", data);
    console.log(typeof data); //object//no need to use json.parse
    data.map((ele) => {
      const element = document.createElement("h2");
      element.textContent = ele.title;
      element.style.color = "green";
      const image = document.createElement("img");
      image.setAttribute("src", `${ele.image}`);
      myDiv.appendChild(element);
      myDiv.appendChild(image);
    });
  })
  .catch((error) => {
    //promise is reject//in fetch the promise is only ever rejected when there is network erroe (just)()offline/can not reach api  for some reason )error object
    //so in fetch if status is not 200 for example is 404 / promise will not reject /it resolved .
    console.log("rejected", error);
  });

//example 2
//fetch ===>build in return promise
fetch("https://api.github.com/users/duniaAlkilany/repos")
  .then((response) => {
    //promise resolved //request complete //status
    console.log(response); //response object
    return response.json(); //to get daa from response object and parse it//this return promise(response.json())//so i do chaining
  })
  .then((data) => {
    data.map((ele) => {
      console.log(ele.name);
    });
    return data;
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.log(error);
  }); //promise rejected (network error)

//
fetch("https://api.github.com/users/duniaAlkilany/repos")
  .then((result) => {
    //to return result as json
    let allrepos = result.json();
    console.log(allrepos); /*[[PromiseState]]: "fulfilled"
  [[PromiseResult]]: Array(30)*/
    return allrepos;
  })
  .then((repos) => {
    console.log(`total number of repos is ${repos.length}`);
    return repos;
  })
  .then((repos) => {
    console.log(`first repo is ${repos[0].name}`);
    return repos;
  })
  .then((repos) => {
    console.log(`last repo ${repos[repos.length - 1].name}`);
    return repos;
  })
  .then((repos) => {
    let parent = document.getElementById("repos");
    for (let i = 0; i < repos.length; i++) {
      //   let newElement = document.createElement("div");
      //   newElement.textContent = repos[i].name;
      //   parent.appendChild(newElement);
      //another way
      let neweEle = document.createElement("div");
      let eleText = document.createTextNode(`${i + 1} - ${repos[i].name}`);
      neweEle.appendChild(eleText);
      document.body.appendChild(neweEle);
    }
  });

//====================================Async & Await==========================================//

/*
 to make http request 
 1.XMLHTTPRequest 
 2.fetch api
 to make async operation 
 1.callback
 2.promise
 3.async/await
 -async/await is keywords in js (chain promises togrther in a clean and readable way)
 -in fetch we chain couple of promises together (from fetch function /and response.json())
-instead chainings many promises (something need times to do either (resolve/reject)===>async operations) so code will be little messy 
-using async/await ===>all asyncronose code (async operations )in single function===>asyncronouse function 
-then await keyword inside to chain promises together
so 
-create function (contain all async code)
-to make this function async use async keyword infront of parentheses 
-so like this i have async function 
-each time i call async function it will return promise 
const getSomeData = async () => {};
const res = getSomeData(); //calling async function will return promise
console.log(res);//promise{}
-inside async function (make async operations(like requests))
-fetch return promise ()//so i used to use then to fire function if promise resolve//instead of use then i use await keyword
-to user await instead of fetch.then((response)=>{})
-i say const response = await fetch('endpoint resourse')
-above mean fetch return promise and await stop assigning value into response variable until promise resolved
-when promise resolved ===>take the value from resolve function and assighn it into response var
-await notblocking rest of code because it is in async function which is not blocking rest code when it is called /it return promise (so async func handles somewhere in browser not stop oe freeze programme )
-response /variable store value of await fetch request ===> is response object 
-to get data from response object i user responseObject.json() method which is return also promise
-to chain it i use await ( await until promis is resolve )
-return data // to access it 

-inside async func it self it is do the asunc operation sequrntially (await the first until promise resolve /get reponse then move to the second async operation ) so it is blocking inside the async function but non -blocking outside when call it 
-inside of async function i replace all chaining then with await
-but when i call async function it will return a promise
-so i need to use then once with async/await when call async function itself
*/

const asyncOperations = async () => {
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  ); //if i have error in endpoint /promise will not reject (it will return response object /status 404)
  console.log("#################################", res); //response object
  if (res.status !== 200) {
    throw new Error("response status not 200, can not fetch the data "); //throe our own error in somepoint use this
  } //when i make throe new errpor inside async function ===>catch method will catch it when i call async fun
  const data = await res.json(); //return promise so it is async operation so instead return it and then use then i use await to chain it
  console.log(data); //is js obj
  return data;
};

// const test = asyncOperations(); //retirn promise (async function return promise )
// console.log("testttt", test);
asyncOperations() //non blocking code //not stop the code
  .then((data) => {
    console.log(data); //promise resolved
    //now i can access data and use it
    data.drinks.map((element) => {
      let ele = document.createElement("h2");
      ele.textContent = element.strDrink;
      let image = document.createElement("img");
      image.setAttribute("src", element.strDrinkThumb);
      myDiv.appendChild(ele);
      myDiv.appendChild(image);
    });
  })
  .catch((error) => {
    console.log(error); //promise reject//if ofline (something wrong in api itself)
    // console.log(error.message);
  });

//========================throwing errors===========================================//
//============================axios(make request using axios)========================//
