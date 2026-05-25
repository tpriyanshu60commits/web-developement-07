// Practice Questions

// 1.Create an async function that returns "Hello
// Students" and print the result.
function q1() {
  return "hello";
}
async function q1print() {
  let result = await q1();
  console.log(result);
}
q1print();

// 2.Create a Promise that resolves after 2 seconds
// and use await to print "Data received".

function q2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data recieved");
    }, 2000);
  });
}
async function q2Print() {
  let result = await q2();
  console.log(result);
}
q2Print();
// 3.Create two asynchronous functions (step1() and
// step2()) and execute them sequentially using
// await.

function q3i() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step-1");
      resolve();
    }, 1000);
  });
}
function q3ii() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step-2");
      resolve();
    }, 3000);
  });
}
async function q3print() {
  await q3i();
  await q3ii();
}
q3print();

// 4.Create an async function that waits for a
// Promise and then prints "Task Completed".

function q4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task Completed");
      resolve();
    }, 2000);
  });
}
async function q4Print() {
  await q4();
}
q4Print();

// 5.Use try...catch with async/await to handle a
// rejected Promise.

function q5(value) {
  return new Promise((resolve, reject) => {
    if (value > 10) {
      resolve("Valid");
    } else {
      reject("Invalid");
    }
  });
}
async function q5print() {
  try {
    let result = await q5(54);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
q5print();

// 6.Create a function checkValue() that resolves
// when value is greater than 10 and rejects
// otherwise, then handle it using async/await.

// same as q5

// 7.Create an online order flow using async/await:
// "Order Placed" → "Shipped" → "Delivered".
function q7() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order Placed");
      resolve();

      setTimeout(() => {
        console.log("Shipped");
        resolve();

        setTimeout(() => {
          console.log("Delivered");
          resolve();
        },1000);
      }, 3000);
    }, 5000);
  });
}

async function q7Print(){
     await q7();

    
}
q7Print();