import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/dbConnection.config.js";
import adminSeed from "./admin.seed.js";

const seed = async () => {
  try {
    await connectDB();
    await adminSeed();
  } catch (error) {
    console.log(error.message);
  } finally {
    process.exit(1);
  }
};
seed();
