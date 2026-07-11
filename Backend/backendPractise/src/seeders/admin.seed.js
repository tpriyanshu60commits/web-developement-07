import User from "../models/auth.model.js";
import bcrypt from "bcrypt";

const AdminUser = {
  fullName: "Admin",
  email: "admin123@gmail.com",
  password: await bcrypt.hash("123456", 10),
  phone: "555865455",
  gender: "male",
  dob: "2003-09-26",
};

const adminSeed = async () => {
  try {
    const existingUser = await User.findOne({ email: AdminUser.email });
    if (existingUser) {
      console.log("Existing user found");
      console.log("deleting Existing USer");
      await existingUser.deleteOne();
    }
    console.log("Creating New Admin");
    const newAdmin = await User.create(AdminUser);
    console.log("admin user created");
  } catch (error) {
    console.log("admin not created");
    throw error;
    
  }
};
export default adminSeed;

