// function expression
const abc = function()
{
    console.log("hello world");
    
}
console.log(abc);
abc();

const bcd = function(a,b)
{
    return a+b;
}
console.log(bcd(4,5));

const arrowfun = () =>
{
    console.log("i am a arrow function");
}
arrowfun();

const arrowrow = (a,b) => a + b;

console.log(arrowrow(5,6));