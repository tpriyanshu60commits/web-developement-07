document.getElementById("input").addEventListener("keydown" , function(event)
{
    // console.log(event.key);
    console.log(this.value)

})
document.getElementById("keyup").addEventListener("keyup" ,()=>{
    console.log("key Released");
})

document.getElementById("specificKey").addEventListener("keydown",(event)=>
{
    if(event.key==="Enter")
    {
        alert("Enter key pressed!");

    }
})