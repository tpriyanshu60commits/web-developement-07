let a=1;
console.log(b);
var b = 2;

let test = "this is global variable";
function classA()
{
    console.log("classA" , test);
    {
       let v = 10;
       console.log(v); //bloak variable
    }
        // console.log(v);
}
function classB()
{
    console.log("classB" , test);
    // console.log("classC" , test2);

}
function classC()
{
    let test2 ="this is local variable";
    console.log("classC" , test);
    console.log("classC" , test2);

}

classA();
classB();
classC();


function test1() {
  "use strict";
  let y = 20; 
}
test1();
function show() {
  console.log(this);
}

show();