// Practice Questions on if else( )
// 1.What is the purpose of if statement in
// JavaScript?

// 2.Write a program to check if a number is greater
// than 10. If true print "Greater", else print
// "Smaller".
let q2 = 10;
if (q2 > 10) {
  console.log("greater");
} else {
  console.log("smaller");
}

// 3.Write a program to check if a number is even or odd.

let q3 = 5;
if (q3 % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

// 4.What is the role of else in JavaScript?

// 5.Write a program to check voting eligibility (age
// ≥ 18 → eligible, else not eligible).
let q5 = 20;
if (q5 >= 18) {
  console.log("eligible to vote");
} else {
  console.log("not eligible");
}

// 6.Write a program to simulate a traffic signal (if
// green → go, else → stop).
let q6 = "green";
if (q6 == "green") {
  console.log("go");
} else {
  console.log("stop");
}

// 7.Write a program to check if a number is
// positive or not.
let q7 = 1;
if (q7 > 0) {
  console.log("positive");
} else {
  console.log("negative");
}
console.log("Practice Questions on jump Statement");

// 1. What are jump statements in JavaScript?

// 2. Write a program using a loop that stops when
// the value becomes 5 using break.

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

// 3. Write a program to print numbers from 1 to
// 10 but stop the loop when the number is 6.

for (let i = 1; i <= 10; i++) {
  if (i == 6) {
    break;
  }
  console.log(i);
}

// 4. Write a program using continue to skip
// printing the number 3 in a loop from 1 to 5.

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// 5. Write a loop that skips one specific value and
// prints the rest using continue.

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
