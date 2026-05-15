// let checkbox = document.getElementById("ok");
// console.log(checkbox.checked);
// function check()
// {
//     let checkbox = document.getElementById("ok");
// console.log(checkbox.checked);
// }

function sports() {
  let hobbies = document.querySelectorAll('input[type="checkbox"]');

  hobbies.forEach(function (hobby) {
    if (hobby.checked) {
      console.log("checked" + hobby.value);
    } else {
      console.log("unchecked : " + hobby.value);
    }
  });

  //   radio buttons
  let radioButtons = document.querySelector(`input[name = "account"]:checked`);
  if (radioButtons) {
    console.log("Account Type: " + radioButtons.value);
  } else {
    console.log("No account selected");
  }

  // select options
  let selectOptions = document.getElementById("city").value;

  console.log("City: " + selectOptions);

  // file input
  let fileInput = document.getElementById("Document");

  console.log(fileInput.files[0]);
  let isChecked = document.getElementById("subscribe").checked;
console.log(isChecked);
}
