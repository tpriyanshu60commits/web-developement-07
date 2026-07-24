import React, { useState } from "react";
import api from "../config/ApiConfig";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    userType: "",
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
    dob: "",
    agreeTerms: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleUserTypeChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      userType: e.target.value,
    }));
  };

  const validateData = (data) => {
    const newErrors = {};

    if (!data.fullName.trim()) newErrors.fullName = "Fullname is required";
    if (!data.email.trim()) newErrors.email = "email is required";
    if (!data.phone.trim()) newErrors.phone = "phone is required";
    if (!data.gender) newErrors.gender = "gender is required";
    if (!data.dob) newErrors.dob = "dob is required";
    if (!data.password.trim() || data.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!data.confirmPassword.trim())
      newErrors.confirmPassword = "confirmPassword is required";
    if (data.password !== data.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    // if (!data.agreeTerms)
    //   newErrors.agreeTerms = "You must agree to terms and conditions";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log("Submit clicked");

    setLoading(true);
    const validateErrors = validateData(formData);
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      setLoading(false);
      return;
    }

    const payload = {
      ...formData,
      email: formData.email.toLowerCase(),
    };
    console.log(payload);

    try {
      const res = await api.post("/auth/register", payload);
      console.log(res.data);
      toast.success(res.data?.message);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unknown error occurred during registration. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-[90vh] bg-[url('/foodTable.webp')] flex items-center justify-end bg-cover bg-center p-10 md:pe-30">
        <div className="bg-white rounded-lg shadow-md px-10 py-6 max-w-md w-full overflow-y-auto max-h-[85vh]">
          <h1 className="text-3xl font-bold text-(--color-primary) mb-2 text-center">
            Create Account
          </h1>
          <p className="text-(--color-secondary) text-center mb-4">
            Join us as a Customer, Restaurant, or Rider
          </p>

          {/* User Type Selection */}
          <div>
            <label className="block text-(--color-neutral) font-semibold mb-3">
              Register as:
            </label>
            <div className="flex gap-5">
              {["customer", "restaurant", "rider"].map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="userType"
                    value={type}
                    checked={formData.userType === type}
                    onChange={handleUserTypeChange}
                    className="cursor-pointer"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>
          {/* fullname */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
              />
              {errors.fullName && (
                <span className="text-(--color-error) text-xs mt-1 block">
                  {errors.fullName}
                </span>
              )}
            </div>
            {/* email */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
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
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone "
                className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
              />
              {errors.phone && (
                <span className="text-(--color-error) text-xs mt-1 block">
                  {errors.phone}
                </span>
              )}
            </div>
            {/* Password */}
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your Password"
                className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
              />
              {errors.password && (
                <span className="text-(--color-error) text-xs mt-1 block">
                  {errors.password}
                </span>
              )}
            </div>
            {/* Confirm password */}
            <div className="mb-4">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Enter your Confirm password "
                className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
              />
              {errors.confirmPassword && (
                <span className="text-(--color-error) text-xs mt-1 block">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
            {/* gender */}
            <div className="mb-4">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>{" "}
              </select>
              {errors.gender && (
                <span className="text-(--color-error) text-xs mt-1 block">
                  {errors.gender}
                </span>
              )}
            </div>
            {/* dob */}
            <div className="mb-4">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                placeholder="Enter your dob "
                className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
              />
              {errors.dob && (
                <span className="text-(--color-error) text-xs mt-1 block">
                  {errors.dob}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-orange-700 text-black font-semibold rounded-md"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
