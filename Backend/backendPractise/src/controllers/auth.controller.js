// export const login = (req,res)=>
// {
//     res.send("this is controller function")
// }
import User from "../models/auth.model.js";
import bycrpt from "bcrypt";
import { genToken } from "../util/auth.service.js";
export const RegisterUser = async (req, res, next) => {
  try {
    const { fullName, email, phone, gender, password, dob } = req.body;
    if (
      !fullName ||
      !email ||
      !phone ||
      !gender ||
      !password ||
      !dob
    ) {
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
 try{
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
    message : "welcome back",
    data : existingUser,
  })
 }
  catch(error)
  {
    console.log(error.message);
    next(error)
  }
};
