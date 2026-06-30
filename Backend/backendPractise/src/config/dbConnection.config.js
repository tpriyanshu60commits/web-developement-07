import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("DB connection successfully done");
    console.log(connection.connection.name);
    console.log(connection.connection.host);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
export default connectDB;
