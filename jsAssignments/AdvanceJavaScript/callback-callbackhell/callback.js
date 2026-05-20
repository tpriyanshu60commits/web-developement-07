// Practice Questions – Callback& CallbackHell

// 1.Create a function greet() that accepts a
// callback function and executes it after
// printing "Hello User".
function greet(name, callback) {
  console.log("name : ", name);
  callback();
}
function sayBye() {
  console.log("saybye");
}
greet("priyanshu", sayBye);
// 2.Create a callback function sayBye() and pass
// it inside another function

function q2(functionCalling) {
  functionCalling();
}
function q2saybye() {
  console.log("q2 saybye");
}
q2(q2saybye);

// 3.Use setTimeout() to print "Welcome" after 2
// seconds.
setTimeout(() => {
  console.log("q3 - welcome after 2 seconds");
}, 2000);
// 4.Print "Start" and "End" immediately, then
// print "Async Task" after 3 seconds using
// setTimeout().
console.log("q4 starts");
setTimeout(()=>
{
    console.log("q4 - Async Task");

},3000);
console.log("q4 ends");

// 5.Create two nested setTimeout() calls and
// print "Step 1" and "Step 2" with delays.
setTimeout(() => {
  console.log("q5 step-1");
  setTimeout(() => {
    console.log("q5 step-2");
  },1000);
},2000);

// 6.Create three nested callbacks to simulate
// food order steps: "Order Taken", "Cooking",
// "Served".

setTimeout(() => {
  console.log("Order Taken");
  setTimeout(() => {
    console.log("Cooking");

    setTimeout(() => {
      console.log("Served");
    },5000);
  },2000);
},1000);

// 7.Write a program that demonstrates callback
// hell using 4 nested setTimeout() calls.

setTimeout(() => {
  console.log("timeout- 1");
  setTimeout(() => {
    console.log("timeout- 2");
    setTimeout(() => {
      console.log("timeout- 3");
      setTimeout(() => {
        console.log("timeout- 4");
      },1000);
    },1000);
  },1000);
},1000);

// 8.Create a function that accepts a user's name
// and a callback function to display a custom
// message.

document.querySelector("button").addEventListener("click", function (event) {
  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;
  function q8(username, callback) {
    console.log("name: " + username);
    callback();
  }
  function q8i() {
    console.log("message: " + message);
  }
  q8(name, q8i);
});

// 10.Create a sequence of asynchronous tasks
// using nested callbacks and print steps in
// order
setTimeout(() => {
  console.log("Step 1: Login");

  setTimeout(() => {
    console.log("Step 2: Fetch User Data");

    setTimeout(() => {
      console.log("Step 3: Fetch Orders");

      setTimeout(() => {
        console.log("Step 4: Payment Complete");
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
