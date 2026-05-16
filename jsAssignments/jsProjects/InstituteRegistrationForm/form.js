document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const MobileNumber = document.getElementById("number").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const gender = document.querySelector(
      "input[name='gender']:checked",
    )?.value;
    const lastCompletedQualification = document.getElementById("lastCompletedQualification").value;
    const percentage = document.getElementById("percentage").value.trim();
    const preferredCourse = document.getElementById("preferredCourse").value;
    let selectedTimings = [];
    const batchTimingPreference = document.querySelectorAll("input[name= 'batchTiming']:checked").forEach((item)=>{
        selectedTimings.push(item.value);
    })

    let registrationFormData = {
        fullName : fullName,
        email : email,
        MobileNumber : MobileNumber,
        dob : dob,
        gender : gender,
        lastCompletedQualification : lastCompletedQualification,
        percentage : percentage,
        preferredCourse : preferredCourse,
        selectedTimings : selectedTimings,
    }
    console.log("registrationFormData : " , registrationFormData);
    

  });
