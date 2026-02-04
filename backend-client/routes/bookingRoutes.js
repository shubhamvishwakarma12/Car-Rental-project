import express from "express";
import { changeBookingStatus, checkavalibilityOfcar, createBooking, getOwnerBooking, getUserBooking } from "../controllers/bookingController.js";
import { protect } from "../middleware/auth.js";

const BookingRoutes = express.Router();

BookingRoutes.post("/check-availability", checkavalibilityOfcar);
BookingRoutes.post("/create-booking",protect, createBooking);
BookingRoutes.get("/user",protect, getUserBooking);
BookingRoutes.get("/owner",protect, getOwnerBooking);
BookingRoutes.post("/change-status",protect, changeBookingStatus);

export default BookingRoutes;