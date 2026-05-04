// Practice Questions — JavaScript Scope
// 1.Declare a global variable and print it.
let a =20;
console.log(a);
// 2.Declare a global variable and access it inside a
// function.
function q2()
{
    console.log(a);
}
q2();
// 3.Create a function and declare a local variable
// using var, then print it inside the function.
function q3()
{
    var c=200;
    console.log(c);
}
q3();
// 4.Try to access a local variable outside the
// function and observe the error.

    // console.log(c);

// 5.Create a function and declare a variable inside
// an if block using let, then print it inside the
// block.
function q5()
{
    if(true)
    {
        let a=40;
        console.log(a);
        
    }
}
q5();
// 6.Try to access the let variable outside the block
// and observe the error.

function q6()
{
    if(true)
    {
        let d=40;        
    }
     console.log(d);
}
// q6();
// .Declare a variable using const inside a block
// and print it inside the block.
function q7()
{
    {
    const a=400;
    console.log(a);
    }
    
}
q7();
//  10. Write a program to demonstrate:
// • var works inside entire function
// • let and const work only inside block { }
function again() {
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
  {
    var d = 40;
    console.log(d);
  }
  console.log(d);
}
console.log("again");
again();