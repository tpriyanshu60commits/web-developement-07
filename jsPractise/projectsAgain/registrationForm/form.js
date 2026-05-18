document.getElementById("registrationForm").addEventListener("submit", function(event)
{
    event.preventDefault();
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let mobileNumber = document.getElementById("mobileNumber").value;
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector("input[name='gender']:checked");
    if(gender)
    {
        console.log(gender.value);
    }
    else
    {
        console.log("no gender value provided");   
    }
    let lastCompletedQualification = document.getElementById("lastCompletedQualification").value;
    let percentage = document.getElementById("percentage").value;
    let preferredCourse = document.getElementById("preferredCourse").value;
    let batchTiming = document.querySelectorAll("input[name='batchTiming']:checked").forEach((items)=>{
        console.log(items.value);
        
    });
    let residentialAddress = document.getElementById("residentialAddress").value;
    let city = document.getElementById("city").value;
    let pinCode = document.getElementById("pinCode").value;
    let guardiansFullName = document.getElementById("guardiansFullName").value;
    let guardiansContactNumber = document.getElementById("guardiansContactNumber").value;
    let hearAboutUs = document.getElementById("hearAboutUs").value;

    let registrationData =
    {
        fullName: fullName
        ,
    }
      
    
    
    
    
})