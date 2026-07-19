import User from "../model/auth.model.js";
import bcrypt from "bcrypt";
import { genToken } from "../utils/auth.service.js";
import OTP from "../model/otp.model.js";
import { sendOTPEmail } from "../utils/email.service.js";
import { genOtpToken } from "../utils/auth.service.js";
export const registerUser = async (req, res, next) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;
    if (!fullName || !email || !password || !phone || !gender || !dob) {
      const error = new Error("All field required");
      error.statusCode = 400;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already exists");
      error.statusCode = 409;
      return next(error);
    }

    const photo = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;
    const SALT = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, SALT);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      phone,
      gender,
      dob,
      photo,
    });
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("All field required");
      error.statusCode = 400;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 404;
      return next(error);
    }
    const isVerified = await bcrypt.compare(password, existingUser.password);
    if (!isVerified) {
      const error = new Error("password is incorrect");
      error.statusCode = 401;
      return next(error);
    }
    await genToken(existingUser, res);
    res.status(200).json({
      message: "welcome back",
      data: existingUser,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const sendOTP = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("User is not registered");
      error.statusCode = 401;
      return next(error);
    }
    const newOTP = (Math.floor(Math.random() * 1000000) + 100000)
      .toString()
      .slice(0, 6);

    const hashedOTP = await bcrypt.hash(newOTP, 10);

    const existingOtp = await OTP.findOne({ email });
    if (existingOtp) {
      await existingOtp.deleteOne();
    }
    const saveOTP = await OTP.create({
      email,
      otp: hashedOTP,
    });

    await sendOTPEmail(email, newOTP);
    res.status(200).json({
      message: `OTP sent successfully on email ${email}`,
    });
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};
export const verifyOTP = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }
    const existingOtp = await OTP.findOne({ email });
    if (!existingOtp) {
      const error = new Error("OTP expired");
      error.statusCode = 401;
      return next(error);
    }

    const isVerified = await bcrypt.compare(otp, existingOtp.otp);
    if (!isVerified) {
      const error = new Error("Enter the correct OTP");
      error.statusCode = 401;
      return next(error);
    }
    await existingOtp.deleteOne();

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("User is not registered");
      error.statusCode = 401;
      return next(error);
    }
    await genOtpToken(existingUser, res);
    res.status(200).json({
      message: "OTP verified , You can change the password now",
    });
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};
export const resetPassword = async (req, res, next) => {
  try {
    const { newPassword } = req.body;
    if (!newPassword) {
      const error = new Error("New password is required");
      error.statusCode = 400;
      return next(error);
    }
    const currentUser = req.user;
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    currentUser.password = hashedPassword;

    await currentUser.save();
    res.status(200).json({
      message: "Password changed successfully",
    });
  } catch (error) {
    console.log(error.message);
    console.log(error.stack);
    return next(error);
  }
};
