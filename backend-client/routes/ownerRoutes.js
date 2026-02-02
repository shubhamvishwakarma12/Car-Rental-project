import express from "express";
import { protect } from "../middleware/auth.js";
import { addCar, ChangeRoleOwner } from "../controllers/ownerController.js";
import upload from "../middleware/multer.js";


const ownerRoutes = express.Router();


ownerRoutes.post("/change-role", protect, ChangeRoleOwner);
ownerRoutes.post("/add-car", upload.single("image"), protect, addCar);
// ownerRoutes.post("/")

export default ownerRoutes;