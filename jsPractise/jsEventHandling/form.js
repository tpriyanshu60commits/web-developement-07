document.getElementById("city").addEventListener("change", function()
{
    alert("city changed")
})
document.getElementById("myform").addEventListener("submit", function(event)
{
    event.preventDefault();
    alert("Form Submitted!");
})
document.getElementById("input").addEventListener("focus", function()
{
    this.style.backgroundColor = "pink"
})