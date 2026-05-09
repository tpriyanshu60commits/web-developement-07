// Keyboard Events Practice Questions

// 1.Create an input box and print "Key Pressed" in
// the console whenever a key is pressed.
document.getElementById("q1").addEventListener("keydown", () => {
  console.log("key Pressed");
});
// 2.Create an input box and print "Key Released"
// in the console when a key is released.
document.getElementById("q2").addEventListener("keyup", () => {
  console.log("key released");
});
// 3.Create an input field and display an alert only
// when the Enter key is pressed.
document.getElementById("q3").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    alert("enter key pressed");
  }
});
// 4.Create an input box and display the typed
// value in the console using keyup.
document.getElementById("q4").addEventListener("keydown", function () {
  console.log(this.value);
});
//5 .Create an input box and display the typed text
// inside a paragraph in real-time (using keyup).
let input = document.getElementById("q5");
let para = document.getElementById("para");
document.getElementById("q5").addEventListener("keyup", () => {
  para.innerText = input.value;
});
//  6.Create an input field and show which key is
// pressed using event.key.
document.getElementById("q6").addEventListener("keydown", (event) => {
  console.log(event.key);
});
// 7.Create an input field and detect if the user
// presses the key "a", then show an alert.
document.getElementById("q7").addEventListener("keydown", (event) => {
  if (event.key === "a") {
    alert("a is pressed");
  }
});

//  8.Create an input box and:
// • On keydown → display "Typing..."
// • On keyup → display "Stopped typing"
document.getElementById("q8").addEventListener("keydown", () => {
  console.log("Typing...");
});
document.getElementById("q8").addEventListener("keyup", () => {
  console.log("Stopped typing");
});