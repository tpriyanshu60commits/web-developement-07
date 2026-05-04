// const greet = function () {
//   console.log("hellojiii");
// };
// greet();
// //  Passed as argument (callback)
// setTimeout(function()
// {
//     console.log("welcome to vs code");
// },2000)

// let name = "priyanshu";
// const hi = () =>
// {
//     console.log(name);
// }
// hi();
// setTimeout(()=> console.log(name),3000);

// (function(){
//     console.log("I run instantly");
// })();

const greet = function () {
  console.log("hello");
};
greet();
// (b) Passed as argument (callback)
setTimeout(function () {
  console.log("hello ji");
}, 2000);

// (c) Immediately Invoked Function (IIFE)
(function () {
  console.log("beta i");
})();

let name = "priyanshu";
let name1 = (name) => console.log(name);
name1("satakshi");

// 1.Create an anonymous function and assign it to
// a variable.
let q1 = function () {
  console.log("hello ji q1");
};
q1();
// 2.Create an anonymous function that prints
// "Hello" using a variable.
let q2 = function () {
  console.log("hello q2");
};
q2();
// 3.Create an anonymous function that adds two
// numbers and returns the result.
let q3 = function (val1, val2) {
  return val1 + val2;
};
console.log(q3(4, 5));
// 5.Pass an anonymous function
// inside setTimeout().
let q5 = setTimeout(function () {
  console.log("q5 hello");
}, 2000);
  // 7.Create an Immediately Invoked Function
  // (IIFE) using an anonymous function.
(function () {
    console.log("q7 hello");
  }
)();

// 10. Pass an anonymous function as a callback
// inside another function.
let q10 = function()
{
    setTimeout(function()
{
    console.log("q10 hello");
    
},3000)
};
q10();