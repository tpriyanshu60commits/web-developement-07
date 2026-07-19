// export const login = (req,res)=>
// {
//     res.send("this is controller function")
// }
import User from "../models/auth.model.js";
import bycrpt from "bcrypt";
import { genToken } from "../util/auth.service.js";
import OTP from "../models/otp.model.js";
import { SendOTPEmail } from "../util/email.service.js";
import { GenOTPToken } from "../util/auth.service.js";
export const RegisterUser = async (req, res, next) => {
  try {
    const { fullName, email, phone, gender, password, dob } = req.body;
    if (!fullName || !email || !phone || !gender || !password || !dob) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already registered");
      error.statusCode = 409;
      return next(error);
    }

    const photo = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    const SALT = await bycrpt.genSalt(10);
    const hashedPassword = await bycrpt.hash(password, SALT);

    const newUser = User.create({
      fullName,
      email,
      phone,
      gender,
      password: hashedPassword,
      dob,
      photo,
    });
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      next(error);
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 404;
      return next(error);
    }
    const isVerified = await bycrpt.compare(password, existingUser.password);
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
export const logOutUser = async (req, res, next) => {
  try {
    res.clearCookie("oreo", { maxAge: 0 });
    res.status(200).json({
      message: "logout Successfull",
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const SendOTP = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      const error = new Error("Email is required");
      error.statusCode = 400;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("User is not Verified");
      error.statusCode = 404;
      return next(error);
    }
    const newOTP = (Math.floor(Math.random() * 1000000) + 100000)
      .toString()
      .slice(0, 6);

    const hashedOTP = await bycrpt.hash(newOTP, 10);

    const existingOTP = await OTP.findOne({ email });
    if (existingOTP) {
      await existingOTP.deleteOne();
    }

    const saveOTP = await OTP.create({
      email,
      otp: hashedOTP,
    });

    await SendOTPEmail(email, newOTP);

    res.status(200).json({
      message: `OTP sent on '${email}'`,
    });
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

export const VerifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      const error = new Error("Email and otp is required");
      error.statusCode = 400;
      return next(error);
    }
    const existingOTP = await OTP.findOne({ email });
    if (!existingOTP) {
      const error = new Error("OTP Expired");
      error.statusCode = 404;
      return next(error);
    }
    const isVerified = await bycrpt.compare(otp, existingOTP.otp);
    if (!isVerified) {
      const error = new Error("OTP Expired");
      const statusCode = 401;
      return next(error);
    }

    await existingOTP.deleteOne();

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("User is not Verified");
      error.statusCode = 404;
      return next(error);
    }

    await GenOTPToken(existingUser, res);

    res.status(200).json({
      message: "OTP verified. Create You New Password Now",
    });
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

export const ResetPassword = async (req, res, next) => {
  try {
    const { newPassword } = req.body;
    if (!newPassword) {
      const error = new Error("New password is required");
      error.statusCode = 400;
      return next(error);
    }

    const currentUser = req.user;

    const hashedPassword = await bycrpt.hash(newPassword, 10);

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
