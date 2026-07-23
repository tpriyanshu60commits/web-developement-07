import React from "react";
import api from "../config/ApiConfig";
import toast from "react-hot-toast";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      email: formData.email.toLowerCase(),
    };
    console.log("Frontend Payload:", payload);
    try {
      const res = await api.post("/auth/register", payload);
      toast.success(res.data.message);
    } catch (error) {
        toast.error(
            error.response?.data?.message,
        )
    }
  };
  return (
    <>
      <div className="bg-amber-200 h-screen flex items-center justify-center">
        <div className=" border p-5  rounded-xl">
          <h2 className="text-center opacity-80">Create Account</h2>
          <p className="opacity-50">
            Join us as a Customer, Restaurant, or Rider
          </p>

          {/* fullname */}
          <form onSubmit={handleSubmit}>
            <div className="mt-5 mb-3">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your fullName"
                className="w-full border p-2 rounded-sm"
              />
            </div>
            {/* email */}
            <div className="mt-5 mb-3">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full border p-2 rounded-sm"
              />
            </div>
            {/* phone */}
            <div className="mt-5 mb-3">
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone"
                className="w-full border p-2 rounded-sm"
              />
            </div>

            {/* dob */}
            <div className="mt-5 mb-3">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                placeholder="Enter your dob"
                className="w-full border p-2 rounded-sm"
              />
            </div>
            {/* gender */}
            <div className="mt-5 mb-3">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full border p-2 rounded-sm"
              >
                <option value="">Select gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
              </select>
            </div>
            {/* password */}
            <div className="mt-5 mb-3">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full border p-2 rounded-sm"
              />
            </div>
            {/*confirm password */}
            <div className="mt-5 mb-3">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Enter your confirm password"
                className="w-full border p-2 rounded-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-400 p-3 border-transparent rounded-2xl "
            >
              {" "}
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
