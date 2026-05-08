document.getElementById("color").addEventListener("change" , changeColor);
function changeColor()
{
    const gettingCOlor = document.getElementById("color").value;
     document.getElementById("clock").style.backgroundColor = gettingCOlor;

}