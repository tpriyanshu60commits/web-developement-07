import React from "react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useState } from "react";
import api from "../config/ApiConfig";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import ForgotPasswordModal from "../components/commanModels/ForgotPasswordModal";
const Login = () => {
  const { setUser, setRole, setIsLogin } = useAuth();  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreeTerms: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPasswordModal, setIsForgotPasswordModal] = useState(false);
  const [errors, setErrors] = useState({});
  const handleInputData = (e) => {
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
    if (!data.email.trim()) newErrors.email = "email is required";
    if (!data.password || data.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!data.agreeTerms) newErrors.agreeTerms = "rememberMe is required";
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
    try {
      const res = await api.post("/auth/login", {
        ...formData,
        email: formData.email.toLowerCase(),
      });
      toast.success(res.data.message);
      sessionStorage.setItem("cravingUser", JSON.stringify(res.data.data));
      setUser(res.data.data);
      setRole(res.data.data.userType);
      setIsLogin(true);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unknown error occurred during Login. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="h-screen bg-indigo-500 flex items-center justify-start bg-cover bg-center p-10 md:ps-30">
        <div className="bg-white rounded-lg shadow-md px-10 py-6 max-w-md w-full">
          <h1 className="text-3xl font-bold text-(--color-primary) mb-2 text-center">
            Welcome Back
          </h1>
          <p className="text-(--color-secondary) text-center mb-6">
            Login to your Cravings account
          </p>
          {/* Email */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="">Email</label>
              <input
                type="email"
                onChange={handleInputData}
                name="email"
                value={formData.email}
                className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
              />
              {errors.email && (
                <span className="text-(--color-error) text-xs mt-1 block">
                  {errors.email}
                </span>
              )}
            </div>
            {/* password */}
            <div className="mb-6">
              <div className="relative">
                <div>
                  <label htmlFor="">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    onChange={handleInputData}
                    name="password"
                    value={formData.password}
                    className="w-full px-3 py-2 border rounded-md text-sm text-(--color-neutral) placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                  />
                </div>
                <div className="absolute right-3 bottom-1.5">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEye className="text-sm cursor-pointer" />
                    ) : (
                      <FaEyeSlash className="text-sm cursor-pointer" />
                    )}
                  </button>
                </div>
              </div>
              {errors.password && (
                <span className="text-(--color-error) text-xs mt-1 block">
                  {errors.password}
                </span>
              )}
            </div>
            {/* Remember Me & Forgot Password */}

            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-col">
                <div>
                  <label
                    htmlFor=""
                    className="flex items-center gap-2 cursor-pointer text-(--color-secondary)"
                  >
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      className="cursor-pointer"
                      onChange={handleInputData}
                    />
                    <span className="text-sm">Remember me</span>
                  </label>
                </div>
                <div>
                  {errors.agreeTerms && (
                    <span className="text-(--color-error) text-xs mt-1 ">
                      {errors.agreeTerms}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="text-sm text-(--color-primary) hover:underline transition-colors"
                  onClick={() => setIsForgotPasswordModal(true)}
                >
                  Forgot Password
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-(--color-primary) text-white font-semibold rounded-md hover:bg-orange-700 transition-colors duration-300 mb-4 disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
      {isForgotPasswordModal && (
        <ForgotPasswordModal
          open={isForgotPasswordModal}
          onClose={() => setIsForgotPasswordModal(false)}
        />
      )}
    </>
  );
};

export default Login;
