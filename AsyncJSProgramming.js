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
  [2] Fulfilled => Operation Succeeded/i hqve response
  [3] Rejected => Operation Failed/

*/
/*
-promise is object 
-Promise()===>built in constructor using to create promise object 
-promise constructor take a function as parameter==>executer function
-executer function take two parameters (resolve,reject)
-two parametrs of executor function is handlers===>responsiable of resolve /reject of promise
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

//====================== Promise – And XMLHTTPRequest=========================//

//====================== Promise – Ignoring The Pyramid Of Doom=========================//

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
  -https://jsonplaceholder.typicode.com/
  -we i write (url) directly inside the browser ===>dirctly request from browser t this endpoint===>then i will get response from server side (endpoint api) to browser 
  -go to dev tool===>inspect===>network===>headers ===>general===> request info 
  -http request to get data from some kind of api endpoint 
  - i said before to make request from js code 
  1.http request using xml 
  */
//===========================Promise – Fetch And Training’s==============================//
//fetch API===>fetch return promise(بترجع promise)
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

// fetch API for making requests and fetching resources.
//to make http requests :
