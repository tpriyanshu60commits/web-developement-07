import mongoose from "mongoose";
const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("mongoose connected");
    console.log(connection.connection.name);
    console.log(connection.connection.host);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
    
  }
};

export default dbConnection;