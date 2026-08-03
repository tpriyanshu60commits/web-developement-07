import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../config/ApiConfig";

const Register = () => {
  const [formData, setFormData] = useState({
    userType: "customer",
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputData = (e) => {
    console.log(e.target.name, e.target.value);
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.fullName.trim()) newErrors.fullName = "FullName is Required";
    if (!data.phone.trim()) newErrors.phone = "Phone is Required";
    if (!data.email.trim()) newErrors.email = "Email is Required";
    if (!data.gender) newErrors.gender = "Gender is Required";
    if (!data.dob) newErrors.dob = "DOB is Required";
    if (!data.confirmPassword)
      newErrors.confirmPassword = "confirmPassword is Required";
    if (!data.agreeTerms) newErrors.agreeTerms = "agreeTerms is Required";
    if (!data.password || data.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (data.password !== data.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors(false);

    const validateErrors = validateForm(formData);
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      setIsLoading(false);

      return;
    }
    console.log("Form submitted:", formData);
    const payload = {
      ...formData,
      email: formData.email.toLowerCase(),
    };
    console.log(payload);

    try {
      const res = await api.post("/auth/register", payload);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unknown error occurred during registration. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen bg-blue-500 flex items-center justify-end bg-cover bg-center p-10 md:pe-30">
        <div className="bg-white rounded-lg shadow-md px-10 py-6 max-w-md w-full overflow-y-auto max-h-[85vh]">
          <h1 className="text-3xl font-bold text-(--color-primary) mb-2 text-center">
            Create Account
          </h1>
          <p className="text-(--color-secondary) text-center mb-4">
            Join us as a Customer, Restaurant, or Rider
          </p>

          <div className="mb-6">
            <label className="block text-(--color-neutral) font-semibold mb-3">
              Register as:
            </label>
            <div className="flex gap-5">
              {["customer", "restaurant", "rider"].map((type) => (
                <label
                  htmlFor=""
                  key={type}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="userType"
                    value={type}
                    className="cursor-pointer"
                    onChange={handleInputData}
                    checked={formData.userType === type}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Full Name */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                onChange={handleInputData}
                placeholder="Enter your fullName"
              />
              {errors.fullName && (
                <span className="text-(--color-error) text-xs mt-1 block">
                  {errors.fullName}
                </span>
              )}
            </div>
            {/* Email */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputData}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
              />
              {errors.email && (
                <span className="text-(--color-error) text-xs mt-1 block">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="mb-4">
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputData}
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
              />
              {errors.phone && (
                <span className="text-(--color-error) text-xs mt-1 block">
                  {errors.phone}
                </span>
              )}
            </div>
            {/* gender */}
            <div className="mb-4">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputData}
                className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              {errors.gender && (
                <span className="text-(--color-error) text-xs mt-1 block">
                  {errors.gender}
                </span>
              )}
            </div>
            {/* Dob */}
            <div className="mb-4">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputData}
                placeholder="Enter your dob"
                className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
              />
              {errors.dob && (
                <span className="text-(--color-error) text-xs mt-1 block">
                  {errors.dob}
                </span>
              )}
            </div>
            {/* Password */}
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputData}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
              />
              {errors.password && (
                <span className="text-(--color-error) text-xs mt-1 block">
                  {errors.password}
                </span>
              )}
            </div>
            {/* Confirm Password */}
            <div className="mb-6">
              <input
                type="text"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputData}
                placeholder="Confirm your password"
                className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
              />
              {errors.confirmPassword && (
                <span className="text-(--color-error) text-xs mt-1 block">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
            {/* agreeTerms */}
            <div className="mb-6">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                className="mt-1 cursor-pointer"
                onChange={handleInputData}
              />
              <span className="text-sm">
                I agree to the{" "}
                <span className="text-(--color-primary) hover:underline">
                  terms and conditions.
                </span>
              </span>
              {errors.agreeTerms && (
                <span className="text-(--color-error) text-xs mt-1 block ml-7">
                  {errors.agreeTerms}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-(--color-primary) text-white font-semibold rounded-md hover:bg-orange-700 transition-colors duration-300 mb-4 cursor-pointer"
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
