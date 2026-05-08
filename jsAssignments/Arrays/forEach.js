// forEach() in JavaScript

// 1. Explain forEach() and its syntax.
let arr = [1,2,3,4,5];
arr.forEach((el) => console.log(el));
// 2.Write a program to print all elements of an
// array using forEach().
arr.forEach((el) => console.log(el));
// 3.Write a program to print all elements of an
// array using arrow function syntax
// in forEach().
arr.forEach((el)=> console.log(el));
// 5.Create an array of fruits and display each fruit
// using forEach().
let arr5 = ["apple", "mango" , "pinapple"];
arr5.forEach((fruit)=> console.log(fruit));
// 6.Use forEach() to print both index and value of
// each element in an array.
arr5.forEach((fruit, index)=> console.log(index + " = " +fruit));
// 7.Create an array and print elements in format
// like "0: Apple" using forEach().
arr5.forEach((fruit, index)=> console.log(index + " : " +fruit));
// 8.Create an array and perform an action on
// each element (like adding some text while
// printing).
arr5.forEach((fruit, index)=> console.log("I like fruit :  " +fruit));
// 9.Create an array and modify each element
// manually inside forEach() and observe the
// change.

let arr9 = [1,2,3,4];
arr9.forEach((el,index,array)=>
{
    array[index] = el*10;
})

console.log(arr9);

// 12. Write a program and explain the role
// of element, index, and array parameters
// in forEach().
    let arr10 = [25,45,68,78];
    arr10.forEach((el,index,array)=>
    {
        array[index]= el*250;
    })
    console.log(arr10);
    let result = arr10.forEach((el)=> {
         return el*3
    });
    console.log(result);

// function details() {
//   let name = document.getElementById("name").value;
//   let city = document.getElementById("city").value;
//   console.log(name);
//   console.log(city);

//   document.getElementById("dataName").innerText = name;
//   document.getElementById("dataCity").innerText = city;
//   document.getElementById("result").style.display = "flex";
// }
