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

password == 1234 && username == "priyanshu-60"
  ? console.log("login sucess")
  : console.log("login unsuccessful");

  let data;
  let name = "";

  data = name || "N/A";
//   if(name)
//   { 
//     data = name;
//   }
//   else
//   {
//     data = "N/A";
//   }
  console.log(data);