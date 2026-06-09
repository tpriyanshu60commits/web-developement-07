document.querySelector("button").addEventListener("click", function(event)
{
    event.preventDefault();
    let dob = document.getElementById("dobYear").value;
    let currentdate = document.getElementById("currentYear").value;

    console.log(dob);
    console.log(currentdate);
    let dobYear = dob.split("-")[0];
    let currentYear = currentdate.split("-")[0];
    console.log(dobYear);
    console.log(currentYear);
    
    let age = currentYear - dobYear;
    document.getElementById("ageDisplay").innerText = age;
    
    
    




})