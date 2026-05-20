// Practice Questions – Execution Context
// 1.Create a variable a = 10 and log it before and
// after declaration to observe hoisting
// behavior.

var a;
console.log(a);
a = 10;
console.log(a);

// 2.Write a function test() with a variable b = 20
// and log a + b using a global variable a.
let q2a = 10;
function test() {
  let b = 20;
  console.log(a + b);
}
test();
// 3.Create two functions functionA() and
// functionB() and call them in nested form to
// observe execution flow in console.
function A() {
  console.log("function A call");
  function B() {
    console.log("function B call");
  }
  B();
  console.log("function A finishes");
}
A();
// 4.Write a program with a global variable and a
// function variable having the same name,
// then log both to observe scope behavior.
let value = 10;
function test() {
  let value = 20;
  console.log(value);
}
console.log(value);
test();
// 5.Create a function and log this inside it (in
// strict mode and non-strict mode) to compare
// results.
function q5() {
  console.log(this);
}
q5();
// 6.Create an object with a method and use this
// inside the method to print object properties.

const q6 = {
  name: "priyanshu",
  age: 20,
  A() {
    console.log(this.name);
    console.log(this.age);
  },
};

q6.A();

// 8.Create multiple nested function calls and
// manually trace the call stack order (Global →
// functionA → functionB).
function functionA() {
    console.log("Function A Start");

    functionB();

    console.log("Function A End");
}

function functionB() {
    console.log("Function B Start");

    functionC();

    console.log("Function B End");
}

function functionC() {
    console.log("Function C Running");
}

functionA();




