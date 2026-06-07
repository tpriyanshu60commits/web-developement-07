// Practice Questions — JavaScript Scope

// 1.Declare a global variable and print it.

let q1 = 5;
console.log(q1);







// 2.Declare a global variable and access it inside a
// function.

let q2 = 15;
function q2function()
{
    console.log(q2);
    
}






// 3.Create a function and declare a local variable
// using var, then print it inside the function.

function q3function()
{
    var q3 = 15;
    console.log(q3);
    
}






// 4.Try to access a local variable outside the 
// function and observe the error.

function q4function()
{
    let q4 =20;

}
// console.log(q4);





// 5.Create a function and declare a variable inside
// an if block using let, then print it inside the
// block.

function q5function()
{
    if(true)
    {
        let q5 = 15;
    }
    // console.log(q5);
    
}
q5function()







// 6.Try to access the let  variable outside the block and observe the error.

{
        let q6 = 15;
        
}
// console.log(q6);

// 7.Declare a variable using const inside a block
// and print it inside the block.


{
   const message = "Hello World";
    console.log(message);

}







// 8.Try to access the const variable outside the
// block and observe the error

{
    const q8 = 15;
}
// console.log(q8);







// 9.Create a program with:
// • one global variable
// • one local variable
// • one block variable
// and print them where accessible.

function q9function()
{
    let q9i= 1;

    if(true)
    {
        var q9ii = 2;
        {
            console.log(q9ii);
            
        }
    }
    console.log(q9ii);
    
}
q9function();







//  10. Write a program to demonstrate:
// • var works inside entire function
// • let and const work only inside block { }
function q10function()
{
    let q10i= 1;

    if(true)
    {
        var q10ii = 2;
        {
            console.log(q10ii);
            
        }
    }
    console.log(q10ii);
    
}
q10function();
