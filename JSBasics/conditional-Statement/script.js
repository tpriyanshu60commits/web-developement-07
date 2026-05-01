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

for(let i=1 ; i<=10 ; i++)
{
  console.log(i);

  if(i==5)
  {
    break;
  }
}
// Exercise 10

// Search a number in loop.
// Example:
// When number = 7 → stop loop

for(let i=0 ; i<=10 ; i++)
{
  console.log(i);
  if(i==7)
  {
    break;
  }
  
}

// Exercise 11

// Print numbers from 1 to 5.
// Skip number 3.
for(let i=0 ; i<=10 ; i++)
{
  if(i==3)
  { continue;
  }
  console.log(i);
  
}
// Exercise 12

// Print only even numbers between 1 to 10.
// Skip odd numbers

for(let i=1 ; i<=10 ; i++)
{
  if(i%2==0)
  { 
    console.log(i);
  }
}

// Exercise 14

// Create function to check even/odd.
// Return "Even" or "Odd"
let b=2;
function checkEvenOdd(b)
{
  if(b % 2 == 0)
  {
    return "Even";
  }
  else
  {
    return "Odd";
  }
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
