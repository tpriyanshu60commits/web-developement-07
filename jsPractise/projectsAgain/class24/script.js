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
