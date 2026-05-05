// Assignment 1

function changes()
{
    let name = document.getElementById("input1").value;
    let city = document.getElementById("input2").value;
    console.log(name);
    console.log(city);
    
    document.getElementById("mydata").innerText = "Name : " + name;
    document.getElementById("mydata1").innerText ="City : " + city;
    document.getElementById("resultBox").classList.remove("d-none");
    document.getElementById("mydata").style.color = "blue";
    document.getElementById("mydata1").style.color = "blue";

}

// Assignment 2
function changes2(event)
{
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(email);
    console.log(password);
    document.getElementById("emailData").innerText = "Email : " + email
    document.getElementById("passwordData").innerText = "password : " + password
    document.getElementById("resultdiv").style.backgroundColor = "pink";
    document.getElementById("resultdiv").classList.remove("d-none")
    // button.remove();

}