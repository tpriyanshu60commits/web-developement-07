let greet = function hello()
{
    console.log("hi everyone");
    
}
greet();
//  With Parameters
let addition =  function add(num1 , num2)
{
    return num1+num2;
} 
console.log(addition(4,6));

// Function Expressions – Practice Questions

// .Write a function expression and execute it
// using the variable name.
let helloji = function (num1 , num2)
{
    console.log(num1-num2);
}
helloji(4,9);
// 3.Create a function expression that takes one
// value and displays it.
let q3 = function(name)
{
    console.log(name);
}
q3("help");
// 4.Write a function expression that stores and
// prints a message.
let q4 = function()
{
    let message ="showing message";
    console.log(message);   
}
q4();
// 5.Create a function expression with two
// parameters and display both values.
let q5 = function(val1 , val2)
{
    return [val1 ,val2];
}
console.log(q5(4,5));


// 7.Create a function expression and assign it to
// another variable, then call both.
 q7i();
let q7 = function(name)
{
    console.log("priyanshu");
}
 let q7i = q7;
q7i();

