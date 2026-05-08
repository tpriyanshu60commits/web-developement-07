// Practice Questions — JavaScript map()

// 1.Create an array of numbers and use map() to
// multiply each number by 2. 
let arr = [1,2,3,4];
let result = arr.map((el) => el*3);
console.log(result);
// 2.Create an array of numbers and use map() to
// add 10 to each element. 
let result1 = arr.map((el)=>el+10);
console.log(result1);
// 3.Create an array of names and convert all
// names to uppercase using map().
let arr3 = ["priyanshu" , "rai" , "sharma"];
let result3 = arr3.map((el)=>el.toUpperCase());
console.log(result3);
// 4.Create an array of numbers and use map() to
// find the square of each number
let result4 = arr.map((el)=> {
    return el*el;
})
console.log(result4);
// 5.Create an array of numbers and use map() to
// convert each number into a string.
let result5 = arr.map((el)=>el.toString());
console.log(result5);
//6 .Create an array of names and use map() to add
// "Mr." before each name
let result6 = arr3.map((el)=> {return "MR " + " " + el})
console.log(result6);

// 7.Create an array of numbers and use map() to
// return only the last digit of each number.

let arr7 = [151,65658,548484,26262,979,94944,464];
let result7 = arr7.map((el) => el%10);
console.log(result7);
// 8.Create an array of numbers and use map() to
// check if each number is even (return
// true/false). 

let result8 = arr7.map((el)=> el%2==0);
console.log(result8);

// 9.Create an array of objects (id, name) and use
// map() to return only names.
let obj = [
    {id:1 , name:"priyanshu"},
    {id:2 , name:"Shashank"},
]
let result9 = obj.map((el) => el.name);
console.log(result9);
// 10. Create an array of prices and use map() to
// apply a 10% discount to each price.

let result10 = arr7.map((el)=> (el*10)/100);
console.log(result10);
