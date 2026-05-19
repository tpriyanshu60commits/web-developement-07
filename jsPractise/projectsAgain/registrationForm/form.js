document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobileNumber = document.getElementById("mobileNumber").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let gender = document.querySelector("input[name='gender']:checked");
    let selectedGender = "";
    if (gender) {
      selectedGender = gender.value;
    } else {
      console.log("no gender value provided");
    }
    let lastCompletedQualification = document.getElementById(
      "lastCompletedQualification",
    ).value.trim();
    let percentage = document.getElementById("percentage").value.trim();
    let preferredCourse = document.getElementById("preferredCourse").value.trim();
    let selectedBatchTiming = [];
    document
      .querySelectorAll("input[name='batchTiming']:checked")
      .forEach((items) => {
        selectedBatchTiming.push(items.value);
      });
    let residentialAddress =
      document.getElementById("residentialAddress").value.trim();
    let city = document.getElementById("city").value.trim();
    let pinCode = document.getElementById("pinCode").value.trim();
    let guardiansFullName = document.getElementById("guardiansFullName").value.trim();
    let guardiansContactNumber = document.getElementById(
      "guardiansContactNumber",
    ).value;
    let hearAboutUs = document.getElementById("hearAboutUs").value.trim();

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
  document.querySelectorAll(".manualError").forEach((items) => {
    items.innerHTML = "";
  });

  let fullNameRegix = /^[A-Za-z\s]+$/;
  let emailRegix = /^[A-Za-z\.\d]+@(gmail|outlook|ricr)(\.com|\.in)$/;
  let mobileNumberRegix = /^[6-9]\d{9}$/;
  let percentageRegix = /^(100|[1-9]?\d|[A-F])$/;
  let cityRegix = /^[A-Za-z\s]+$/;
  let pinCodeRegix = /^[0-9]\d{5}$/;
  let guardiansFullNameRegix = /^[A-Za-z\s]+$/;
  let guardiansContactNumberRegix = /^[6-9]\d{9}$/;

  if (!data.fullName) {
    document.getElementById("fullNameError").innerText = "full name required";
  } else if (!fullNameRegix.test(data.fullName)) {
    document.getElementById("fullNameError").innerText =
      "digits are not allowed";
  }

  if (!data.email) {
    document.getElementById("emailError").innerText = "email required";
  } else if (!emailRegix.test(data.email)) {
    document.getElementById("emailError").innerText = "write email properly";
  }

  if (!data.mobileNumber) {
    document.getElementById("mobineNumberError").innerText =
      "mobile number required";
  } else if (!mobileNumberRegix.test(data.mobileNumber)) {
    document.getElementById("mobineNumberError").innerText =
      "write mobile number properly";
  }
  if (!data.percentage) {
    document.getElementById("percentageError").innerText =
      "percentage required";
  } else if (!percentageRegix.test(data.percentage)) {
    document.getElementById("percentageError").innerText =
      "either A-F or 1-100";
  }

  if (!data.city) {
    document.getElementById("cityError").innerText = "city name required";
  } else if (!cityRegix.test(data.city)) {
    document.getElementById("cityError").innerText = "write city name properly";
  }

  if (!data.pinCode) {
    document.getElementById("pinCodeError").innerText = "pincode required";
  } else if (!pinCodeRegix.test(data.pinCode)) {
    document.getElementById("pinCodeError").innerText =
      "write pincode properly";
  }

  if (!data.guardiansFullName) {
    document.getElementById("guardiansFullNameError").innerText =
      "full name required";
  } else if (!guardiansFullNameRegix.test(data.guardiansFullName)) {
    document.getElementById("guardiansFullNameError").innerText =
      "digits are not allowed";
  }

  if (!data.guardiansContactNumber) {
    document.getElementById("guardiansContactNumberError").innerText =
      "mobile number required";
  } else if (!guardiansContactNumberRegix.test(data.guardiansContactNumber)) {
    document.getElementById("guardiansContactNumberError").innerText =
      "write guardians mobile number properly";
  }

  if (!data.selectedGender) {
    document.getElementById("selectedGenderError").innerText =
      "gender required";
  }
  if (!data.preferredCourse) {
    document.getElementById("preferredCourseError").innerText =
      "select preferred course";
  }
  if (!data.lastCompletedQualification) {
    document.getElementById("lastCompletedQualificationError").innerText =
      "select qualification";
  }

  if (data.selectedBatchTiming.length === 0) {
    document.getElementById("selectedBatchTimingError").innerText =
      "select batch timing";
  }
  if (!data.hearAboutUs) {
    document.getElementById("hearAboutUsError").innerText = "select one option";
  }

  // dob condition
  if (!data.dob) {
    document.getElementById("dateError").innerText = "dob is empty";
  } else {
    let birthdate = new Date(data.dob);
    let currentDate = new Date();

    let age = currentDate.getFullYear() - birthdate.getFullYear();
    if (age < 15) {
      document.getElementById("dateError").innerText =
        "minimum age requirement is 15";
    }

    if (!data.residentialAddress) {
      document.getElementById("residentialAddressError").innerText =
        "address required";
    }
  }
}

document
  .getElementById("registrationForm")
  .addEventListener("reset", function () {
    document.querySelectorAll(".manualError").forEach((items) => {
      items.innerHTML = "";
    });
  });
