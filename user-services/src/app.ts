import express, { Application } from "express";
import cors from "cors";
import userRoutes from "./routes/user.route";
// import connectDB from "./config/db";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
// connectDB();

// Routes
app.use("/", userRoutes);

export default app;
