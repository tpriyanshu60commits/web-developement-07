// 1. Store "Amit" as username in localStorage
// and print it in the console.
localStorage.setItem("username", JSON.stringify("amit"));
let q1 = localStorage.getItem("username");
console.log(q1);

// 2. Store "dark" as theme in sessionStorage and
// display it on the page.
sessionStorage.setItem("theme", "dark");
let q2 = sessionStorage.getItem("theme");
console.log(q2);
// Create a cookie "user=Rahul" and print it
// using document.cookie.
document.cookie = "user=Rahul";
console.log(document.cookie);
// 4.Add "city" → "Mumbai" in localStorage,
// then remove it and check the result.
localStorage.setItem("city", JSON.stringify("Mumbai"));
localStorage.removeItem("city");
let q4 = JSON.parse(localStorage.getItem("city"));
console.log(q4);
// 5. Store username = "Raj" and theme = "light"
// in localStorage and retrieve both
localStorage.setItem("username", JSON.stringify("Raj"));
localStorage.setItem("theme", JSON.stringify("light"));
let q5 = localStorage.getItem("username");
let q5i = localStorage.getItem("theme");
console.log(q5);
console.log(q5i);

// 6.Create a button that clears all localStorage
// data when clicked
function submit() {
  localStorage.clear();
}
// 7.Take input from a textbox and store the
// entered value in localStorage.

function savedataq7() {
  let q7 = document.getElementById("textq7").value;
  localStorage.setItem("q7", q7);
  console.log("Saved:", q7);
}

// 8.Retrieve stored username from localStorage
// and show it inside an <h1> tag. 
let q8 = JSON.parse(localStorage.getItem("username"));
console.log(q8);
document.getElementById("output").innerText = q8;
// 9.Update theme in localStorage from "light"
// to "dark" and print the updated value. 

let q9 = localStorage.getItem("theme");
console.log(q9);
localStorage.setItem("theme", "dark");
let q9i = localStorage.getItem("theme");
console.log(q9i);


// 10.Store a value in sessionStorage and verify
// that it is removed after closing the tab.
sessionStorage.setItem("name", "raisahab");
let q10 = sessionStorage.getItem("name");
console.log(q10);


