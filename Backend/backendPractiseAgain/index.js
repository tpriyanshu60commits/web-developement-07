import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRouter from "./src/router/auth.route.js";
import userRouter from "./src/router/user.route.js";
import dbConnection from "./src/config/dbConnection.config.js";
import cloudinary from "./src/config/cloudinary.config.js";
import morgan from "morgan";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(morgan("dev"));
app.use(express.json());

app.post("/", (req, res) => {
  res.json({
    message: "hello ji  ,this is first code",
  });
});

app.use("/auth", authRouter);
app.use("/user", userRouter);

// error handling middleware
app.use((err, req, res, next) => {
  const errMessage = err.message || "Internal server error";
  const errStatusCode = err.statusCode || 500;

  res.status(errStatusCode).json({
    message: errMessage,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log("server started");
  await dbConnection();
  try {
    const result = await cloudinary.api.ping();
    console.log("cloudunary connection succeed");
    console.log(result);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
});
