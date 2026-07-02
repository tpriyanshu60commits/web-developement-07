import User from "../model/auth.model.js";
import bcrypt from "bcrypt";
export const RegisterUser = async (req, res, next) => {
  try {
    const { fullName, email, phone, password } = req.body;
    if (!fullName || !email || !phone || !password) {
      const error = new Error("all fields are required");
      error.statusCode = 400;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already registered");
      error.statusCode = 409;
      return next(error);
    }
    //   const photo = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    const SALT = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, SALT);

    const newUser = await User.create({
      fullName,
      email,
      phone,
      password: hashedPassword,
    });
    res.status(200).json({ message: "user registered Successfully" });
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("All fields required");
      error.statusCode=400;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode=409;
      return next(error);
    }
    const isVerified = await bcrypt.compare(password, existingUser.password);
    if (!isVerified) {
      const error = new Error("password is incorrect");
      error.statusCode = 401;
      return next(error);
    }
    res.status(200).json({
      message: "welcome back",
      data: existingUser,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
