// 1.Create an HTML page with an <h1> and use
// JavaScript to change its text using
// getElementById() and innerHTML.

function textChange()
{
    document.getElementById("heading").innerHTML="changed dear";
}

// 2.Create a button that changes the text of a
// paragraph when clicked.
function textChange2()
{
    document.getElementById("paragraph").innerHTML = "paragraph changed";
}

// 4.Create a paragraph and use JavaScript to read
// its content and print it in console.

function textChange4()
{
    let para = document.getElementById("paragraph4");
    console.log(para.textContent);
   
}
// 5.Create an element with an id and change its
// content using DOM.
function textChange5()
{
    document.getElementById("paragraph5").innerText = "helelo";
}
// 6.Create a button that updates text from "Hello"
// to "Changed!" when clicked. 
function textChange6()
{
    document.getElementById("paragrap6").innerText = "changed";
}
// 7.Create two elements (h1 and p) and change
// both contents using JavaScript.
function textChange7()
{
    document.getElementById("paragraph7").textContent = "new paragraph";
    document.getElementById("heading7").textContent = "new heading";
}