// Practice Questions - LocalStorage
// 1. Store "Rahul" as username in localStorage and
// print it in the console.
localStorage.setItem("username" , "Rahul");
let q1 = localStorage.getItem("username");
console.log(q1);
// 3. Store "city" → "Mumbai" in localStorage, then
// remove it and check the result.
localStorage.setItem("city" , "Mumbai");
localStorage.removeItem("city");
// 5. Store an object { name: "Rahul", age: 22 } in
// localStorage and retrieve the name from it. 
let student = {
    name:"Priyanshu",
    age:22
}
localStorage.setItem("student",JSON.stringify(student));
let q5 = JSON.parse(localStorage.getItem("student"));
console.log(q5.name);
// 6.Update an existing value in localStorage
// (change "theme" from "dark" to "light") and
// print the updated value.

localStorage.setItem("theme","light");
let q6 = localStorage.getItem("theme");
console.log(q6);
