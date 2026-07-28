import React from "react";
import api from "../config/ApiConfig";
import { useState } from "react";
import toast from "react-hot-toast";
const Register = () => {
  const [formData, setFormData] = useState({
    userType: "",
    email: "",
    fullName: "",
    phone: "",
    gender: "",
    dob: "",
    password: "",
    confirmPassword: "",
    agreeTerms: "",
  });
  const [errors, setErrors] = useState({});
  const [isloading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const {name, value, type, checked} = e.target;
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

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.fullName.trim()) newErrors.fullName = "FullName is required";
    if (!data.email.trim()) newErrors.email = "email is required";
    if (!data.phone.trim()) newErrors.phone = "phone is required";
    if (!data.gender) newErrors.gender = "gender is required";
    if (!data.password || data.password.length < 6)
      newErrors.password = "password must be of atleast 6 characters";
    if (!data.confirmPassword)
      newErrors.confirmPassword = "confirmPassword is required";
    if (data.password !== data.confirmPassword)
      newErrors.confirmPassword = "Password do not match";
    if (!data.agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms and condition";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    const validateErrors = validateForm(formData);
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      setIsLoading(false);
      return;
    }
    console.log("FormData", formData);
    try {
      const res = await api.post("/auth/register", {
        ...formData,
        email: formData.email.toLowerCase(),
      });
      console.log(res);
      console.log(res.data);
      console.log(res.data.message);
      toast.success(res?.data?.message);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unknown error occurred during registration. Please try again.",
      );
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-(--color-base-100) h-[90vh] flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md px-10 py-6 max-w-md w-full overflow-y-auto max-h-[85vh]">
          <p className="text-(--color-secondary) text-center mb-4 ">
            Join us as a Customer, Restaurant, or Rider
          </p>
          {/* usertype */}
          <div>
            <label className="text-(--color-neutral) font-semibold mb-3">
              Register as:
            </label>
            <div className="flex gap-5">
              {["customer", "restaurant", "rider"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="userType"
                    value={type}
                    checked={formData.userType === type}
                    onChange={handleUserTypeChange}
                  />
                  <span className="text-(--color-neutral) capitalize">
                    {type}
                  </span>
                </label>
              ))}
            </div>
            {/* fullName */}
            <form onSubmit={handleSubmit}>
              <div className="mt-3 mb-3">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-(--color-primary) "
                />
                {errors.fullName && (
                  <span className="text-(--color-error) text-xs mt-1 block">
                    {errors.fullName}
                  </span>
                )}
              </div>
              {/* email */}
              <div className="mt-3 mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-(--color-primary) "
                />
                {errors.email && (
                  <span className="text-(--color-error) text-xs mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>
              {/* phone */}
              <div className="mt-3 mb-3">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-(--color-primary) "
                />
                {errors.phone && (
                  <span className="text-(--color-error) text-xs mt-1 block">
                    {errors.phone}
                  </span>
                )}
              </div>
              {/* gender */}
              <div className="mt-3 mb-3">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
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
              {/* dob */}
              <div className="mt-3 mb-3">
                <input
                  type="date"
                  name="dob"
                  placeholder="Enter your dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-(--color-primary) "
                />
                {errors.dob && (
                  <span className="text-(--color-error) text-xs mt-1 block">
                    {errors.dob}
                  </span>
                )}
              </div>
              {/* password */}
              <div className="mt-3 mb-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-(--color-primary) "
                />
                {errors.password && (
                  <span className="text-(--color-error) text-xs mt-1 block">
                    {errors.password}
                  </span>
                )}
              </div>
              {/*confirm password */}
              <div className="mt-3 mb-3">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter your confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-(--color-primary) "
                />
                {errors.confirmPassword && (
                  <span className="text-(--color-error) text-xs mt-1 block">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
              {/*agree terms */}
              <div className="mt-3 mb-3">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  value={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mt-1 cursor-pointer"
                />
                <span className="text-sm ml-2">
                  I agree to the{" "}
                  <span className="text-(--color-primary) hover:underline">
                    terms and conditions.
                  </span>
                </span>
                {errors.agreeTerms && (
                  <span className="text-(--color-error) text-xs mt-1 block">
                    {errors.agreeTerms}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-(--color-primary) text-white font-semibold rounded-md hover:bg-orange-700 transition-colors duration-300 mb-4"
              >
                {isloading ? "Registering..." : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
