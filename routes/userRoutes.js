import express from "express";
import { getUserdata, loginUser, registerUsers } from "../controllers/userController.js";
import { protect } from "../middleware/auth.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUsers);
userRoutes.post("/login", loginUser);
userRoutes.get("/user", protect, getUserdata)

export default userRoutes;