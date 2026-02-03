import express from "express";
import { registerUser } from "../controller/User.Controller.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post("/register", upload.single("image"), registerUser);

export default router;