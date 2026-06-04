// JavaScript Functions – Practice Questions
// 1.Create a simple function that prints "Hello
// World".
function q1()
{
    console.log("hello world");
    
}
q1();





// 2.Write a function that displays your name in
// the console.
function q2()
{
    console.log("priyanshu tiwari");
    
}
q2();




// 3.Create a function that prints "Welcome to College".

function q3()
{
    console.log("welcome to college");
    
}
q3();



// 4.Write a function that takes a name as a
// parameter and prints "Hello [name]".

function q4(name)
{
    console.log(name);
    
}
q4("priyanshu");


// 5.Create a function that takes two numbers and
// prints their sum.
function q5(a,b)
{
    return a+b;
}
console.log(q5(2,5));



// 6.Write a function that takes a number and
// prints its square.
function q6(a)
{
    return a*a;
}
console.log(q6(2));



// 7.Create a function that takes two numbers and
// returns their addition.

function q7(a,b)
{
    return a+b;
}
console.log(q7(2,5));



// 8.Write a function that returns the
// multiplication of two numbers.
function q8(a,b)
{
    return a*b;
}
console.log(q8(2,5));




// 9.Create a function that takes a name and age
// and prints a message.
function q9(name , age)
{
    return("my name is" + name + " and age is " + age);
    
}
console.log(q9("priyanshu ", 22));



//  10.Write a function that returns the average of
// three numbers.

function q10(a,b,c)
{
    return (a+b+c)/3;
}
console.log(q10(2,3,4));




//  11. Create a function and call it multiple times
// with different values.
function q11(a,b)
{
    return a*b;
}
q11(2,5);
q11(2,6);
q11(2,5);




//  12. Build a function that takes two numbers and
// returns the greater number
function q12(a,b)
{
    if(a>b)
    {
        return a;
    }
    else
    {
        return b;
    }
}
console.log(q12(2,3));

console.log("Arrow Function - practice questions");
// 1.Create an arrow function that prints “Welcome
// to JavaScript”.
let q1arrow = ()=>
{
    console.log("Welcome to javascript");
}
q1arrow();

// 2.Write an arrow function that takes a name and
// prints a greeting message.

let q2arrow = (name)=>
{
    console.log(name);
    
}
q2arrow("priyanshu")





// 3.Create an arrow function that adds two
// numbers and returns the result.

let q3arrow= (a,b)=>
{
    return a+b;
}
console.log(q3arrow(4,5));




// 4.Write an arrow function that multiplies two
// numbers and prints the output.
let q4arrow= (a,b)=>
{
    return a*b;
}
console.log(q4arrow(4,5));






// 5.Create an arrow function that returns
// the square of a number.
let q5arrow= (a)=>
{
    return a*a;
}
console.log(q5arrow(4));






// 6.Write an arrow function that takes three
// numbers and returns their sum.
let q6arrow= (a,b,c)=>
{
    return a+b+c;
}
console.log(q6arrow(4,5,7));






// 7.Create an arrow function that returns
// the length of a given string.

let q7string =(str)=>
{
    console.log(str.length);
    
}
q7string("hello ji")





// 8.Create an arrow function that checks whether a
// number is positive or negative.

let q8arrow = (num)=>
{
    if(num>0)
    {
        return "positive";
    }
    else
    {
        return "negative";
    }
}
console.log(q8arrow(5));




// 9.Write an arrow function that finds the
// difference between two numbers.

let q9arrow= (a,b)=>
{
    return a-b;
}
console.log(q9arrow(4,5));





//  10.Create an arrow function that returns a
// message like “Learning Arrow Functions”.

let q10arrow= (message)=>
{
    return message;
}
console.log(q10arrow("Learning Arrow Functions"));