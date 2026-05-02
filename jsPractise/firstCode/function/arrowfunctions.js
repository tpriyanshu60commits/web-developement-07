// (No Parameter)
let sayhello = () => {
  console.log("hello bhai");
};
sayhello();
// (With Parameter)
let greet = (name) => {
  console.log("hello" + name);
};
greet("priyanshu");
// (Return value)
let add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(2, 3));

// Arrow Function - practice questions
// 1.Create an arrow function that prints “Welcome
// to JavaScript”.
let q1 = () => {
  console.log("welcome to javascript");
};
q1();
// 2.Write an arrow function that takes a name and
// prints a greeting message
let q2 = (name) => {
  console.log(name);
};
q2("priyanshu");
// 5.Create an arrow function that returns
// the square of a number
let square = (num) => {
  console.log(num * num);
};
square(5);
// 7.Create an arrow function that returns
// the length of a given string.
let q7 = (name) => name.length;
console.log(q7("priyanshu"));
// 8.Create an arrow function that checks whether a
// number is positive or negative.
let num = (num1) => {
  if (num1 > 0) {
    return "positive";
  } else {
    return "negative";
  }
};
console.log(num(2));
// 9.Write an arrow function that finds the
// difference between two numbers.
let diff = (a, b) => a - b;
console.log(diff(10, 4));



