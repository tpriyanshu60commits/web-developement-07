function hello()
{
    console.log('hi');
}
hello();

// Function with Parameters
// let rahul = "rahul ";
function hello1(name)
{
    console.log("hello" + name)
}
hello1("rahul");
// Function with Return Value
function add(a , b)
{
    return a+b;
}
// console.log(add(4,5));
let result = add(4,5);
console.log(result);

// JavaScript Functions – Practice Questions
// 6.Write a function that takes a number and
// prints its square.
function square(num)
{
    console.log(num*num);
}
square(5);
// 10.Write a function that returns the average of
// three numbers
function average(num1 , num2 , num3)
{
    return (num1+num2+num3)/3
}
console.log(average(1,2,3));
// 12. Build a function that takes two numbers and
// returns the greater number.
function greater(num1 , num2)
{
    if(num1>num2)
    {
        console.log("num1 is greater");
    }
    else
    {
        console.log("num2 is greater");   
    }
}
greater(4,5);
// 4.Write a function that takes a name as a
// parameter and prints "Hello [name]".
function name1(name)
{
    console.log("hello" + name);
}
name1("priyanshu");


