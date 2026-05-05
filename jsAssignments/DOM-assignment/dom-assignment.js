function changes()
{
    let name = document.getElementById("input1").value;
    let city = document.getElementById("input2").value;
    console.log(name);
    console.log(city);
    
    document.getElementById("mydata").innerText = "Name : " + name;
    document.getElementById("mydata1").innerText ="City : " + city;
    document.getElementById("resultBox").classList.remove("d-none");
    
}