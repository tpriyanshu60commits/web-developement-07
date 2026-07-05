import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Register = () => {
  const [registerData, setregisterData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullname: "",
  });

  const [errorhandle, seterrorhandle] = useState();
  const handleclick = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);

    setregisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      seterrorhandle("password does not match");
      return;
    }
    seterrorhandle("");
    console.log("Register data submitted:", registerData);

    const payload ={
      fullname:registerData.fullname,
      email:registerData.email,
      password:registerData.password,
    }

  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="fullname"
          value={registerData.fullname}
          placeholder="enter your name"
          onChange={handleclick}
        />
        <br />
        <input
          type="email"
          name="email"
          value={registerData.email}
          placeholder="enter your email"
          onChange={handleclick}
        />
        <br />

        <input
          type="password"
          name="password"
          value={registerData.password}
          placeholder="enter your password"
          onChange={handleclick}
        />
        <br />

        <input
          type="password"
          name="confirmPassword"
          value={registerData.confirmPassword}
          placeholder="enter your confirm password"
          onChange={handleclick}
        />
        <br />

        <button type="submit">submit</button>
        {errorhandle && <p>{errorhandle}</p>}
      </form>
    </>
  );
};

export default Register;
