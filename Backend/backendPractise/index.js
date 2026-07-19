  import dotenv from "dotenv";
  dotenv.config();
  console.log(process.env.port);
  console.log(process.pid);

  import express from "express";
  import authrouter from "./src/routers/auth.route.js";
  import testrouter from "./src/routers/test.route.js";
  import connectDB from "./src/config/dbConnection.config.js";
  import cloudinary from "./src/config/cloudinary.config.js";
  import userRouter from "./src/routers/user.route.js"
  import restauratRouter from "./src/routers/restaurant.route.js";
  import morgan from "morgan";
  import cors from "cors";
  import cookieParser from "cookie-parser";
  const app = express();
  app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
  }))
  app.use(morgan("dev"))
  app.use(express.json());
  app.use(cookieParser())
  app.use("/auth", authrouter);
  app.use("/test", testrouter);
  app.use("/user", userRouter);
  app.use("/restaurant", restauratRouter);

  app.get("/", (req, res) => {
    console.log("this is start of code");
    res.json({
      message: "Welcome to my first backend Project",
    });
  });

  // Error Handling Middleware
  app.use((err, req, res, next) => {
    const ErrMessage = err.message || "Internal Server Error";
    const ErrStatusCode = err.statusCode || 500;

    res.status(ErrStatusCode).json({
      message: ErrMessage,
    });
  });
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, async () => {
    console.log("server started");
    await connectDB();
    try {
      const result = await cloudinary.api.ping();
      console.log("cloudunary connection succeed");
      console.log(result);
    } catch (error) {
      console.log(error.message);
      process.exit(1);
    }
  });
  