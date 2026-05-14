function submit() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(email=="" || password=="")
  {
    alert("please fill all fields")
  }
  else
  {
     alert("Login Successful");
  }

}
