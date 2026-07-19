import jwt from "jsonwebtoken";
import User from "../model/auth.model.js";

export const AuthProtect = async (req, res, next) => {
  try {
    const token = req.cookies.oreo;
    if (!token) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      return next(error);
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      return next(error);
    }
    const verifiedUser = await User.findById(decode.id);
    if (!verifiedUser) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      return next(error);
    }
    req.user = verifiedUser;
    next();
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

export const OTPAuthProtect = async (req, res, next) => {
  try {
    const token = req.cookies.kitkat;
    if (!token) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      return next(error);
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      return next(error);
    }
    const verifiedUser = await User.findById(decode.id);
    if (!verifiedUser) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      return next(error);
    }
    req.user = verifiedUser;
    next();
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};
