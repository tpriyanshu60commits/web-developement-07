// Mouse Events Practice Questions
// 1.Create a button and show an alert message
// "Clicked!" when the user clicks it.
document.getElementById("q1").addEventListener("click",function(){
    alert("clicked")
})

// 2.Create a button and display the text "Button
// Pressed" inside a paragraph when clicked.
document.getElementById("q2").addEventListener("click",function(){
   console.log("button pressed");
})
// 3.Create a button and change the background
// color of the page when it is clicked.
document.getElementById("q3").addEventListener("click", function()
{
    this.style.backgroundColor = "pink";
})
// 4.Create a button and show an alert only when
// double-clicked.
document.getElementById("q4").addEventListener("dblclick", function()
{
    alert("dblCkicked")
})
// Create a paragraph and change its text color
// to blue when the user double-clicks it.
document.getElementById("q5").addEventListener("dblclick", function(){
    this.style.color = "blue";
})
// 6.Create a paragraph and change its text color
// to red when the mouse is placed over it.
document.getElementById("q6").addEventListener("mouseover", function(){
    this.style.color = "red";
})
// 7.Create a heading and display "Mouse is here!"
// when the user hovers over it.
document.getElementById("q7").addEventListener("mouseover", function()
{
       this.innerText = "Mouse is here!";
    
})
// 8.Create a button and change its text to "Clicked
// Successfully" when clicked
 document.getElementById("q8").addEventListener("click", function()
{
    this.innerText = "changed successfully"
})