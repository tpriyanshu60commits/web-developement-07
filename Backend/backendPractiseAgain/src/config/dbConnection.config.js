import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("DB connection successfully done");
    console.log("DB Name:", connection.connection.name);
    console.log("DB Host:", connection.connection.host);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
export default connectDB;
