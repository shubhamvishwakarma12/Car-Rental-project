import express from "express";
import { protect } from "../middleware/auth.js";
import { addCar, ChangeRoleOwner, dashboardData, deleteCar, getOwnerCars, toggleCarAvalibility, updateUserImage } from "../controllers/ownerController.js";
import upload from "../middleware/multer.js";


const ownerRoutes = express.Router();


ownerRoutes.post("/change-role", protect, ChangeRoleOwner);
ownerRoutes.post("/add-car", upload.single("image"), protect, addCar);
ownerRoutes.get("/cars",protect, getOwnerCars);
ownerRoutes.post("/toggle-car",protect, toggleCarAvalibility);
ownerRoutes.post("/delete-car",protect, deleteCar);

ownerRoutes.post("/dashboard", protect, dashboardData);
ownerRoutes.post("/update-user-image", upload.single("image"), protect, updateUserImage);


export default ownerRoutes;