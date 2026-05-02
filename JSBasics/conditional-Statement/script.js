let n = 5;
if (n > 0) {
  console.log("positive number");
} else {
  console.log("positive number");
}

let age = 20;
if (age >= 20) {
  console.log("you can vote");
} else {
  console.log("you cannot vote");
}

let a = 10;
if (a % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

let marks = 100;
if (marks >= 90 && marks < 101) {
  console.log("A");
} else if (marks >= 75 && marks < 90) {
  console.log("B");
} else if (marks >= 50 && marks < 75) {
  console.log("C");
} else {
  console.log("fail");
}

let password = 1234;
let username = "priyanshu-60";
if (password == 1234 && username == "priyanshu-60") {
  console.log("login sucess");
} else {
  console.log("login unsuccessful");
}
// Check age and ID.
// Example:
// If age ≥ 18
// → then check hasID
// → print "Allowed" or "Not Allowed"

let age1 = 18;
let Checkid = true;
if (age1 >= 18) {
  if (Checkid) {
    console.log("allowed");
  } else {
    console.log("not allowed");
  }
} else {
  console.log("under age");
}

// Exercise 9

// Print numbers from 1 to 10.
// Stop when number becomes 5.

for (let i = 1; i <= 10; i++) {
  console.log(i);

  if (i == 5) {
    break;
  }
}
// Exercise 10

// Search a number in loop.
// Example:
// When number = 7 → stop loop

for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i == 7) {
    break;
  }
}

// Exercise 11

// Print numbers from 1 to 5.
// Skip number 3.
for (let i = 0; i <= 10; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
// Exercise 12

// Print only even numbers between 1 to 10.
// Skip odd numbers

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Exercise 14

// Create function to check even/odd.
// Return "Even" or "Odd"
let b = 2;
function checkEvenOdd(b) {
  if (b % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Exercise 15

// Create variable day.
// Print day name using switch.
// Example:
// 1 → Monday

let day = 75;
switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("day doesn't exists");
}
// Exercise 16

// Create menu system.
// Example:
// 1 → "Tea"
// 2 → "Coffee"
// 3 → "Juice"
let menu = 1;
switch (menu) {
  case 1:
    console.log("tea");
    break;
  case 2:
    console.log("coffee");
    break;
  case 3:
    console.log("juice");
    break;
  case 4:
    console.log("icecream");
    break;
  default:
    console.log("doesn't exists");
    break;
}
// Check fruit name.
// Example:
// "Mango" → print message
// If not matched → "Not available"

let fruit = "mango";
switch (fruit.toLocaleLowerCase()) {
  case "mango":
    console.log("mango available");
    break;

  default:
    console.log("not available");
    break;
}

// Use switch for calculator.
// Example:

// → add
// → subtract
let c = 1,
  d = 2;
let requirement = "add";
switch (requirement) {
  case "add":
    console.log(c + d);
    break;
  case "multiply":
    console.log(c * d);
    break;
  case "divide":
    console.log(c / d);
    break;
  case "subtract":
    console.log(c - d);
    break;
  default:
    console.log("not available");
}

// 11. Break Understanding
// Exercise 19

// Create switch without break.
// Observe how all cases execute.
// let c=1 , d=2;
// let requirement = "add";
// switch(requirement)
// {
//   case "add":
//   console.log(c+d);

//    case "multiply":
//   console.log(c*d);

//    case "divide":
//   console.log(c/d);
//   break;

//    case "subtract":
//   console.log(c-d);

//   default:
//     console.log("not available");
// }

// Exercise 20

// Create program:

// Take marks
// Use if-else for grade
// Use switch to display message
let marks1 = 91;
let grade;
if (marks1 >= 90 && marks1 <= 100) {
  grade = "A";
} else if (marks1 >= 75 && marks1 < 90) {
  grade = "B";
} else if (marks1 >= 50 && marks1 < 75) {
  grade = "C";
} else {
  grade = "D";
}

switch (grade) {
  case "A":
    console.log("topper");
    break;
  case "B":
    console.log("division 2");
    break;
  case "C":
    console.log("division 3");
    break;
  default:
    console.log("fail");
    break;
}

// Exercise 22

// Create login system:

// if username correct
// if password correct
// else show error

let username1 = "priyanshu60";
let password1 = 1234;
if(username1=="priyanshu60" &&password1 == 1234)
{
  console.log("login successful");
}
else
{
  console.log("login unsuccessful");
}

// Create function:

// take number
// return "Positive", "Negative", or "Zero"
let number1 =2;
if(number1<0)
{
  console.log("negative");
}
else
{
  console.log("positive");
}



password == 1234 && username == "priyanshu-60"
  ? console.log("login sucess")
  : console.log("login unsuccessful");

let data;
let name = "";

// data = name || "N/A";
// if(name)
// {
//   data = name;
// }
// else
// {
//   data = "N/A";
// }
// console.log(data);
