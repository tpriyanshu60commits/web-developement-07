import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login1()
{
  const navigate = useNavigate();
  const[registrationData , setRegistrationData] = useState({
    fullName:"",
    email:"",
    gender:"",
    dob:"",
    phone:"",
    password:"",
    confirmPassword:"",
  });
  const handelChange=(e)=>
  {
    const name = e.target.name;
    const value = e.target.value;

    setRegistrationData((prevData)=>({...prevData,[name]:value}))
  }


  return(
    <>
    <input type="text" 
    name="fullName"
    value={registrationData.fullName}
    onChange={handelChange} 
    />
    </>
  )
}
export default Login1;