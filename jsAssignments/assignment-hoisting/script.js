// Practice Questions — JavaScript Hoisting
// 1.Write a program using var where you log the
// variable before declaration and observe the
// output. 
console.log(a);
var a = 20;
console.log(a);
// 2.Write a program using var where you log the
// variable before and after initialization.
console.log(b);
var b=30;
console.log(b);
// 3.Write a program using let and try to access the
// variable before declaration. 
// console.log(c);
// let c = 40;

// 4.Write a program using const and try to access
// the variable before declaration. 
// console.log(c);
// const c = 40;

// 5.Create a program using a function declaration
// and call the function before defining it. 
hello();
function hello()
{
    console.log("hello");
}
// 6.Create a program using a function expression
// and call it before assignment.
// greet();
// let greet = function()
// {
//     console.log("hello");
// }
// 7.Write a program to show that function
// expressions behave like variables in hoisting. greet();4
// greet();
// let greet = function()
// {
//     console.log("hello");
// }
// .Create a block and try to access a let variable
// before declaration to observe TDZ
// {
//   console.log(x);  

//   let x = 10;

//   console.log(x);
// }