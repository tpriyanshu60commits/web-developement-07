function Bulb1ON()
{
    document.getElementById("bulb1").style.backgroundColor = "yellow";
}
function Bulb1OFF()
{
    document.getElementById("bulb1").style.backgroundColor = "white";
}
function BulbRed()
{
    document.getElementById("bulb1").style.backgroundColor = "red";
}
function BulbBlue()
{
    document.getElementById("bulb1").style.backgroundColor = "blue";
}
function BulbGreen()
{
    document.getElementById("bulb1").style.backgroundColor = "green";
}

document.getElementById("bulbRed1").addEventListener( "click",BulbRed);
document.getElementById("bulbRed2").addEventListener( "click",BulbBlue);
document.getElementById("bulbRed3").addEventListener( "click",BulbGreen);

document.getElementById("bulbinput").addEventListener( "change",changeBulbColor);


function changeBulbColor()
{
    const color =  document.getElementById("bulbinput").value
        document.getElementById("bulb1").style.backgroundColor = color;

}