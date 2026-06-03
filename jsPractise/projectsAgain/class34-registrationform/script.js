document
  .querySelector(".registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobileNumber = document.getElementById("mobileNumber").value.trim();
    let dateofBirth = document.getElementById("dateofBirth").value.trim();
    let gender = document.querySelector(`input[name="gender"]:checked`);
    if (gender) {
      console.log(gender.value);
    } else {
      console.log("gender not selected");
    }
    let lastCompletedQualification = document
      .getElementById("lastCompletedQualification")
      .value.trim();
    let percentage = document.getElementById("percentage").value.trim();
    let preferredCourse = document
      .getElementById("preferredCourse")
      .value.trim();
    let batchTimingPreference = [];
    document
      .querySelectorAll(`input[name="batchTiming"]:checked`)
      .forEach((item) => {
        batchTimingPreference.push(item.value);
      });
    console.log(batchTimingPreference);
    let residentialAddress = document
      .getElementById("residentialAddress")
      .value.trim();
    let city = document.getElementById("city").value.trim();
    let pinCode = document.getElementById("pinCode").value.trim();
    let guardiansFullName = document
      .getElementById("guardiansFullName")
      .value.trim();
    let guardianContactNumber = document
      .getElementById("guardianContactNumber")
      .value.trim();

    let data = {
      fullName: fullName,
      email: email,
      mobileNumber: mobileNumber,
      dateofBirth: dateofBirth,
      gender: gender,
      lastCompletedQualification: lastCompletedQualification,
      percentage: percentage,
      preferredCourse: preferredCourse,
      batchTimingPreference: batchTimingPreference,
      residentialAddress: residentialAddress,
      city: city,

      pinCode: pinCode,
      guardiansFullName: guardiansFullName,
      guardianContactNumber: guardianContactNumber,
    };

    console.log(data);
    validateData(data);
  });

function validateData(data) {
  document.querySelectorAll(".manualError").forEach((items) => {
    items.innerText = "";
  });
  let fullNameRegix = /^[A-Za-z\s]+$/;
  let emailRegix = /^[A-Za-z\d\.]+@(gmail\.com|outlook\.in)$/;
  let mobileNumberRegix = /^[6-9]\d{9}$/;
  let percentageRegix = /^(100|[1-9]?\d|[A-F])$/;
  let cityRegix = /^[A-Za-z\s]+$/;
  let pinCodeRegix = /^[0-9]\d{5}$/;
  let guardiansFullNameRegix = /^[A-Za-z\s]+$/;
  let guardiansContactNumberRegix = /^[6-9]\d{9}$/;
  //   name validation
  if (!data.fullName) {
    document.getElementById("fullNameError").innerHTML = " full name required";
  } else if (!fullNameRegix.test(data.fullName)) {
    document.getElementById("fullNameError").innerHTML =
      "only alphabets are allowed";
  }
  //   email validation
  if (!data.email) {
    document.getElementById("emailError").innerHTML = " full email required";
  } else if (!emailRegix.test(data.email)) {
    document.getElementById("emailError").innerHTML = " proper email required";
  }
  //   mobileNumber validation
  if (!data.mobileNumber) {
    document.getElementById("mobileNumberError").innerHTML =
      " full mobile number required";
  } else if (!mobileNumberRegix.test(data.mobileNumber)) {
    document.getElementById("mobileNumberError").innerHTML =
      " proper mobile number required";
  }
  //   date of birth validation minumin 15 years
  if (!data.dateofBirth) {
    document.getElementById("dateofBirthError").innerText = "age required";
  } else {
    let currentDate = new Date();
    let birthdate = new Date(data.dateofBirth);
    let age = currentDate.getFullYear() - birthdate.getFullYear();
    if (age < 15) {
      document.getElementById("dateofBirthError").innerText =
        "minimum age requirement is 15";
    }
  }
//   gender
  if (!data.gender) {
  document.getElementById("genderError").innerText =
    "Gender is required";
}
//   lastCompletedQualification

  if(!data.lastCompletedQualification)
  {
    document.getElementById("lastCompletedQualificationError").innerText = " qualtification required";
  }

//   percentageRegix validation
  if (!data.percentage) {
    document.getElementById("percentageError").innerHTML = " percentage required";
  } else if (!percentageRegix.test(data.percentage)) {
    document.getElementById("percentageError").innerHTML =
      "percentageError is not allowed";
  }

// preferredCourse
   if (!data.preferredCourse) {
    document.getElementById("preferredCourseError").innerHTML = " preferredCourse required";
  } 
//   batchTimingPreference
    if (data.batchTimingPreference.length === 0) {
  document.getElementById("batchTimingPreferenceError").innerText =
    "Batch timing preference required";
}

//   residentialAddress
if (!data.residentialAddress) {
    document.getElementById("residentialAddressError").innerHTML = " residentialAddress required";
  } 
//   city
if (!data.city) {
    document.getElementById("cityError").innerHTML = " city required";
  } else if (!cityRegix.test(data.city)) {
    document.getElementById("cityError").innerHTML =
      "cityError is not allowed";
  }
//   pinCode
if (!data.pinCode) {
    document.getElementById("pinCodeError").innerHTML = " pinCode required";
  } else if (!pinCodeRegix.test(data.pinCode)) {
    document.getElementById("pinCodeError").innerHTML =
      "pinCodeError is not allowed";
  }
//   guardiansFullName
if (!data.guardiansFullName) {
    document.getElementById("guardiansFullNameError").innerHTML = " guardiansFullName required";
  } else if (!guardiansFullNameRegix.test(data.guardiansFullName)) {
    document.getElementById("guardiansFullNameError").innerHTML =
      "guardiansFullNameError is not allowed";
  }
//   guardianContactNumber
if (!data.guardianContactNumber) {
    document.getElementById("guardianContactNumberError").innerHTML = " guardianContactNumber required";
  } else if (!guardiansContactNumberRegix.test(data.guardianContactNumber)) {
    document.getElementById("guardianContactNumberError").innerHTML =
      "guardianContactNumberError is not allowed";
  }


}

document
  .querySelector(".registrationForm")
  .addEventListener("reset", function () {
    document.querySelectorAll(".manualError").forEach((items) => {
      items.innerText = " ";
    });
  });
