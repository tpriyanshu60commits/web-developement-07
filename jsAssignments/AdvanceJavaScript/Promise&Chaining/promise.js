// Practice Questions
// 1.Create a Promise that resolves with the
// message "Task completed" and print it using
// .then().

function q1() {
  return new Promise((resolve, reject) => {
    resolve("task completed");
  });
}
q1().then((data) => {
  console.log(data);
});
// 2.Create a Promise that rejects with the
// message "Something went wrong" and
// handle it using .catch().
function q2() {
  return new Promise((resolve, reject) => {
    reject("Something went wrong");
  });
}
q2().catch((data1) => {
  console.log(data1);
});
// 3.Use setTimeout() inside a Promise to print
// "Data received" after 2 seconds.

function q3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}
q3().then((data) => {
  console.log(data);
});

// 4.Create a Promise that checks if a number is
// greater than 10.
// If true → resolve "Valid Number"
// Else → reject "Invalid Number";
function q4(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("valid number");
    } else {
      reject("Invalid Number");
    }
  });
}
q4(5)
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });

//   7.Create three functions (step1, step2, step3)
// that return Promises and execute them
// using Promise Chaining.
function q7step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step -1 done");
      resolve();
    }, 3000);
  });
}
function q7step2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step - 2 done");
      resolve();
    }, 3000);
  });
}
function q7step3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step - 3 done");
      resolve();
    }, 3000);
  });
}
q7step1()
  .then(q7step2)
  .then(q7step3)
  .then(() => {
    console.log("steps completed");
  });

//8.Create a Promise chain that adds numbers
// step by step:
// Start with 5 → add 10 → multiply by 2 →
// print final result.

function q8(num) {
  return new Promise((resolve, reject) => {
    resolve(num + 10);
  });
}
q8(5)
  .then((data) => {
    console.log(data);
    return data * 2;
  })
  .then((data) => {
    console.log(data);
  });

// 9.Create a Promise that simulates an online
// order process:
// "Order Placed" → "Shipped" → "Delivered"
// using .then() chaining.

function q9i() {
  return new Promise((resolve, reject) => {
    resolve("Order Placed");
  });
}
function q9ii() {
  return new Promise((resolve, reject) => {
    resolve("Shipped");
  });
}
function q9iii() {
  return new Promise((resolve, reject) => {
    resolve("Delivered");
  });
}

q9i()
  .then((data) => {
    console.log(data);
    return q9ii();
  })
  .then((data) => {
    console.log(data);
    return q9iii();
  })
  .then((data) => {
    console.log(data);

    console.log("delievery successfull");
  });
//   10.Create a Promise with a random
// success/failure condition and handle both
// .then() and .catch().

function q10() {
  let success = true;
  return new Promise((resolve, reject) => {
    if (success) {
      resolve("success");
    } else {
      reject("failure");
    }
  });
}
q10()
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
// 11.Create nested asynchronous tasks using
// Promises instead of callbacks to avoid
// callback hell.
// same as q7

// 12.Create a Promise that resolves after 3
// seconds and print "Loading Complete".

function q12() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Loading Complete");
      resolve();
    }, 5000);
  });
}
q12().then();