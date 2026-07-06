import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login1 = () => {

  const navigate = useNavigate();
  const[loginData, setLogindata] = useState({
    email:"",
    password:"",
  })
  const[validateError , setvalidateError] = useState();

  const handleClick=(e)=>
  {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name );
    console.log(value );
    
    setLogindata((prevData)=>({...prevData,[name]:value}))
  }
  const handleSubmit=(e)=>
  {
    e.preventDefault();
    console.log("Login data submitted:", loginData);
    const payload = {
      email : loginData.email.toLowerCase(),
      password: loginData.password,
    }
    console.log(payload);
  }


  return (
      <>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="enter your email" name="email" value={loginData.email} onChange={handleClick}/>
        <br />
        <input type="password" placeholder="enter your password" name="password" value={loginData.password} onChange={handleClick}/>
        <br />
        <button type="submit">submit</button>
        {validateError&&<p>{validateError}</p>}
      </form>
      </>
  )
}

export default Login1;