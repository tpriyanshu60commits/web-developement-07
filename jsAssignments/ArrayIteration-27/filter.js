// Practice Questions — JavaScript filter()

// 1.Create an array of numbers and use filter() to
// get only even numbers.
let arr = [10,25,14,21,5,6,88];
let result = arr.filter((el)=>el%2==0);
console.log(result);

// 2.Create an array of numbers and use filter() to
// get numbers greater than 10. 

let result2 = arr.filter((el)=>el>10);
console.log(result2);
// 3.Create an array of numbers and use filter() to
// get numbers less than 50. 
let result3 = arr.filter((el)=>el>50);
console.log(result3);
// 4.Create an array of numbers and use filter() to
// remove negative numbers.
let result4 = arr.filter((el)=> el<0);
console.log(result4);
// 5.Create an array of numbers and use filter() to
// get only odd numbers. 
let result5 = arr.filter((el)=>el%2!=0);
console.log(result5);
// 6.Create an array of names and use filter() to
// return names with length greater than 4. 
let arr6 = ["shivashu" , "satyanshu" , "priyanshu"];
let result6 =arr6.filter((el)=>el.length>4);
console.log(result6);
// 7.Create an array of numbers and use filter() to
// return numbers divisible by 5
let result7 = arr.filter((el)=> el%5==0);
console.log(result7);
// 8.Create an array of numbers and use filter() to
// remove duplicate values (basic logic). 





