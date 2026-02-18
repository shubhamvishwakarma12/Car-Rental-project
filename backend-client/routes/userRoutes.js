import express from "express";
import { getCarsdata, getUserdata, loginUser, registerUsers } from "../controllers/userController.js";
import { protect } from "../middleware/auth.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUsers);
userRoutes.post("/login", loginUser);
userRoutes.get("/data", protect, getUserdata)
userRoutes.get("/cars",  getCarsdata)

export default userRoutes;