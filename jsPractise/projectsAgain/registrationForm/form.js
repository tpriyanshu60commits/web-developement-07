document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let mobileNumber = document.getElementById("mobileNumber").value;
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector("input[name='gender']:checked");
    let selectedGender = "";
    if (gender) {
      selectedGender = gender.value;
    } else {
      console.log("no gender value provided");
    }
    let lastCompletedQualification = document.getElementById(
      "lastCompletedQualification",
    ).value;
    let percentage = document.getElementById("percentage").value;
    let preferredCourse = document.getElementById("preferredCourse").value;
    let selectedBatchTiming = [];
    document
      .querySelectorAll("input[name='batchTiming']:checked")
      .forEach((items) => {
        selectedBatchTiming.push(items.value);
      });
    let residentialAddress =
      document.getElementById("residentialAddress").value;
    let city = document.getElementById("city").value;
    let pinCode = document.getElementById("pinCode").value;
    let guardiansFullName = document.getElementById("guardiansFullName").value;
    let guardiansContactNumber = document.getElementById(
      "guardiansContactNumber",
    ).value;
    let hearAboutUs = document.getElementById("hearAboutUs").value;

    let registrationData = {
      fullName: fullName,
      email: email,
      mobileNumber: mobileNumber,
      dob: dob,
      selectedGender: selectedGender,
      lastCompletedQualification: lastCompletedQualification,
      percentage: percentage,
      preferredCourse: preferredCourse,
      selectedBatchTiming: selectedBatchTiming,
      residentialAddress: residentialAddress,
      city: city,
      pinCode: pinCode,
      guardiansFullName: guardiansFullName,
      guardiansContactNumber: guardiansContactNumber,
      hearAboutUs: hearAboutUs,
    };

    console.log(registrationData);
    validateData(registrationData);
  });

function validateData(data) {
  let fullNameRegix = /^[A-Za-z\s]+$/;
  let emailRegix = /^[A-Za-z\.\d]+@(gmail|outlook|ricr)(\.com|\.in)$/;
  let mobileNumberRegix = /^[6-9]\d{9}$/;
  let percentageRegix = /^(A-F|1-100)$/;
  let cityRegix = /^[A-Za-z\s]+$/;
  let pinCodeRegix = /^[0-9]\d{5}$/;
  let guardiansFullNameRegix  = /^[A-Za-z\s]+$/;
  let guardiansContactNumberRegix = /^[6-9]\d{9}$/;



  if (!data.fullName) {
    document.getElementById("fullNameError").innerText = "full name required";
  } else if (!fullNameRegix.test(data.fullName)) {
    document.getElementById("fullNameError").innerText =
      "digits are not allowed";
  }
}

document
  .getElementById("registrationForm")
  .addEventListener("reset", function () {
    document.querySelectorAll(".manualError").forEach((items) => {
      items.innerHTML = "";
    });
  });
