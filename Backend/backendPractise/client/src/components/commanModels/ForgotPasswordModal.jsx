import React, { useState } from "react";
import api from "../../config/ApiConfig";
import toast from "react-hot-toast";
import { ImCross } from "react-icons/im";

const ForgotPasswordModal = ({ open , onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleClose = () => {
    onClose();
    setFormData({
      email: "",
      otp: "",
      newPassword: "",
      confirmNewPassword: "",
    });
    setIsOtpSent(false);
    setIsOtpVerified(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      if (!isOtpSent) {
        const res = await api.post("/auth/send-otp", formData);
        toast.success(res.data.message);
        setIsOtpSent(true);
      }
      if (isOtpSent && !isOtpVerified) {
        const res = await api.post("/auth/verify-otp", formData);
        toast.success(res.data.message);
        setIsOtpVerified(true);
      }
      if (isOtpSent && isOtpVerified) {
        const res = await api.post("/auth/reset-password", formData);
        toast.success(res.data.message);
        setIsOtpVerified(true);
        handleClose();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unknown error occurred during registration. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };
  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-999">
        <div className="bg-white w-xl rounded shadow max-h-[80vh] overflow-y-auto relative">
          <header className="flex justify-between p-4 border-b border-(--color-secondary)">
            <div className="font-bold text-xl text-(--color-primary)">
              Forgot Password
            </div>
            <button onClick={handleClose}>
              <ImCross className="text-red-700 hover:text-(--color-primary) text-xl" />
            </button>
          </header>
          <main>
            <div className="p-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-semibold">
                  Your Registered Email
                </label>
                <input
                  type="email"
                  onChange={handleInputChange}
                  className="border border-(--color-secondary) rounded px-3 py-2 disabled:bg-(--color-secondary) disabled:text-(--color-secondary-content)"
                  name="email"
                  value={formData.email}
                  disabled={isLoading || isOtpSent}
                />
              </div>
              {isOtpSent && (
                <div className="flex flex-col gap-2">
                  <label htmlFor="otp" className="font-semibold">
                    Your OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    value={formData.otp}
                    onChange={handleInputChange}
                    className="border border-(--color-secondary) rounded px-3 py-2 disabled:bg-(--color-secondary) disabled:text-(--color-secondary-content)"
                    disabled={isLoading || isOtpVerified}
                  />
                </div>
              )}
              {isOtpSent && isOtpVerified && (
                <>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="newPassword" className="font-semibold">
                      Create Your New Password
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      className="border border-(--color-secondary) rounded px-3 py-2 disabled:bg-(--color-secondary) disabled:text-(--color-secondary-content)"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="confirmNewPassword"
                      className="font-semibold"
                    >
                      Confirm Your New Password
                    </label>
                    <input
                      type="text"
                      id="confirmNewPassword"
                      name="confirmNewPassword"
                      value={formData.confirmNewPassword}
                      onChange={handleInputChange}
                      className="border border-(--color-secondary) rounded px-3 py-2 disabled:bg-(--color-secondary) disabled:text-(--color-secondary-content)"
                      disabled={isLoading}
                    />
                  </div>
                </>
              )}
            </div>
          </main>
          <footer className="w-full p-4 border-t border-(--color-secondary) flex justify-end gap-3">
            <button
              onClick={handleClose}
              className="flex items-center gap-2 bg-(--color-secondary) text-(--color-secondary-content) px-3 py-1 rounded text-sm"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              className="flex items-center gap-2 bg-(--color-primary) text-(--color-primary-content) px-3 py-1 rounded text-sm"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading
                ? "loading..."
                : isOtpSent
                  ? isOtpVerified
                    ? "Reset-password"
                    : "Verify-Otp"
                  : "Send-otp"}
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordModal;
