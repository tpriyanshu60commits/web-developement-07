document.getElementById("btn").addEventListener("click", clickMethod)
function clickMethod()
{
    alert("hello")
}
document.getElementById("doubleClick").addEventListener("dblclick" , ()=>{
    alert("double click button");
})
document.getElementById("mouseOver").addEventListener("mouseover",function(){
    console.log("hello dear")
    
})