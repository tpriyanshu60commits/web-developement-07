function submit() {
  //     let name = document.getElementById("name");
  //     console.log(name.value);

  //     let checkbox = document.querySelectorAll(`input[type="checkbox"]:checked`);
  //     checkbox.forEach(function(hobby)
  // {
  //     console.log(hobby.value);

  // })

  // let radio = document.querySelector(`input[name="gender"]:checked`);
  // if(radio)
  // {
  // console.log(radio.value);
  // }
  // else
  // {
  // console.log("no radio selected");
  // }

  //     let select = document.querySelector("#city");
  //     console.log(select.value);

  let name = document.getElementById("name").value;
  let checkbox = document.querySelectorAll(`input[type="checkbox"]:checked`);
  checkbox.forEach(function (fn) {
    console.log(fn.value);
  });
  let radio = document.querySelector(`input[name="gender"]:checked`)?.value;
   let select = document.getElementById("city").value;

   console.log("name : "+name);
   console.log("radio : "+radio);
   console.log("select : "+select);
   
   
}
