document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const MobileNumber = document.getElementById("number").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const city = document.getElementById("city").value.trim();
    const residentialAddress = document
      .getElementById("residentialAddress")
      .value.trim();
    const pinCode = document.getElementById("pinCode").value.trim();
    const gender = document.querySelector(
      "input[name='gender']:checked",
    )?.value;
    const lastCompletedQualification = document.getElementById(
      "lastCompletedQualification",
    ).value;
    const percentage = document.getElementById("percentage").value.trim();
    const preferredCourse = document.getElementById("preferredCourse").value;
    let selectedTimings = [];
    const batchTimingPreference = document
      .querySelectorAll("input[name= 'batchTiming']:checked")
      .forEach((item) => {
        selectedTimings.push(item.value);
      });

    let registrationFormData = {
      fullName: fullName,
      email: email,
      MobileNumber: MobileNumber,
      dob: dob,
      gender: gender,
      lastCompletedQualification: lastCompletedQualification,
      percentage: percentage,
      preferredCourse: preferredCourse,
      selectedTimings: selectedTimings,
      residentialAddress: residentialAddress,
      city: city,
      pinCode: pinCode,
    };
    console.log("registrationFormData : ", registrationFormData);
    validateData(registrationFormData); //validateData function calling
  });

function validateData(data) {
  let isValid = true;
  let nameReg = /^[A-Za-z\s]+$/;
  let emailReg = /^[A-Za-z][A-Za-z\.\d]+@(gmail|outlook|ricr)(\.com|\.in)$/;
  let numReg = /^[6-9]\d{9}$/;
  let percentageReg = /^(A-F|\d[0-100])/;
  let residentialAddressReg = /^[A-Za-z\d\.]+$/;
  let cityReg = /^[A-Za-z\d\.\s]+$/;
  let pincodeReg = /^[\d]{6}$/;

  document.querySelectorAll(".manualError").forEach((items) => {
    items.innerText = "";
  });

  if (!data.fullName) {
    document.getElementById("fullNameError").innerHTML = "Full name required";
    isValid = false;
  } else if (!nameReg.test(data.fullName)) {
    document.getElementById("fullNameError").innerText =
      "Only letters and spaces allowed";
    isValid = false;
  }

  if (!data.email) {
    document.getElementById("emailError").innerHTML = "full email required";
    isValid = false;
  } else if (!emailReg.test(data.email)) {
    document.getElementById("emailError").innerText = "Invalid email format";
    isValid = false;
  }

  if (!data.MobileNumber) {
    document.getElementById("numberError").innerHTML = "number required";
    isValid = false;
  } else if (!numReg.test(data.MobileNumber)) {
    document.getElementById("numberError").innerText = "Invalid number format";
    isValid = false;
  }
  if (!data.gender) {
    document.getElementById("genderError").innerHTML = "Select Gender";
    isValid = false;
  }

  // QUALIFICATION
  if (!data.lastCompletedQualification) {
    document.getElementById("qualificationError").innerHTML =
      "Select Qualification";
    isValid = false;
  }

  // COURSE
  if (!data.preferredCourse) {
    document.getElementById("courseError").innerHTML = "Select Course";
    isValid = false;
  }

  // TIMINGS
  if (data.selectedTimings.length === 0) {
    document.getElementById("batchTimingError").innerHTML =
      "Select at least one timing";
    isValid = false;
  }

  // ADDRESS
  if (!data.residentialAddress) {
    document.getElementById("addressError").innerHTML = "Address Required";
    isValid = false;
  }

  // CITY
  if (!data.city) {
    document.getElementById("cityError").innerHTML = "City Required";
    isValid = false;
  } else if (!cityReg.test(data.city)) {
    document.getElementById("cityError").innerHTML = "Only letters allowed";
    isValid = false;
  }

  // PIN CODE
  if (!data.pinCode) {
    document.getElementById("pinCodeError").innerHTML = "Pin Code Required";
    isValid = false;
  } else if (!pinReg.test(data.pinCode)) {
    document.getElementById("pinCodeError").innerHTML =
      "Enter valid 6-digit pin code";
    isValid = false;
  }

  return isValid;
}

document
  .getElementById("registrationForm")
  .addEventListener("reset", function () {
    document.querySelectorAll(".manualError").forEach((items) => {
      items.innerText = "";
    });
  });
