import dotenv from "dotenv";
dotenv.config(); // 🚨 MUST BE FIRST

import express from "express";
import cors from "cors";
import userRoutes from "./Routes/User.Routes.js";
import connectdb from "./db/db.js";

const app = express();

// DEBUG (remove later)
console.log("MONGODB_URL =", process.env.MONGODB_URL);

connectdb();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use("/uploads", express.static("uploads"));
app.use("/api/v1/user", userRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});
