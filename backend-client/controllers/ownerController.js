import User from "../models/User.js";
import fs from "fs";
import imagekit from "../configs/imagekit.js";
import Car from "../models/Car.js";
import Booking from "../models/Booking.js";
// import ImageKit from "imagekit";

export const ChangeRoleOwner = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { role: "owner" });
    res.json({ sucess: true, message: "Now you can add Cards" });
  } catch (error) {
    console.error(error.message);
    res.json({ sucess: false, message: "you cannot add Cards" });
  }
};

export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;
    let car = JSON.parse(req.body.carData);
    const imageFile = req.file;

    const fileBuffer = fs.readFileSync(imageFile.path);

    const uploadResponse = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/car",
    });

    const customTransformUrl = imagekit.url({
      path: uploadResponse.filePath,
      transformation: [
        { width: "1280" },
        { quality: "auto" },
        { format: "webp" },
      ],
    });

    const image = customTransformUrl;

    await Car.create({ ...car, owner: _id, image });

    res.json({ sucess: true, message: "Car Added" });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const getOwnerCars = async (req, res) => {
  try {
    const { _id } = req.user;
    const car = await Car.find({ owner: _id });

    res.json({
      success: true,
      car,
    });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const toggleCarAvalibility = async (req, res) => {
  try {
    const { _id } = req.user;
    const { carId } = req.body;
    const car = await Car.findById(carId);

    if (car.owner.toString() !== _id.toString()) {
      res.json({ success: false, message: "Unauthorized" });
    }

    car.isAvaliable = !car.isAvaliable;
    await car.save();

    res.json({
      success: true,
      message: "Avalibility Toggled",
    });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const deleteCar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { carId } = req.body;
    const car = await Car.findById(carId);

    if (car.owner.toString() !== _id.toString()) {
      res.json({ success: false, message: "Unauthorized" });
    }

    car.owner = null;
    car.isAvaliable = false;
    await car.save();

    res.json({
      success: true,
      message: "Car Removed",
    });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const dashboardData = async (req, res) => {
  try {
    const { _id, role } = req.user;
    if (role !== "owner") {
      res.json({ success: false, message: "Unauthorized" });
    }
    const cars = await Car.find({ owner: _id });
    const bookings = await Booking.find({ owner: _id })
      .populate("car")
      .sort({ createdAt: -1 });
    const pendingBookings = await Booking.find({
      owner: _id,
      status: "pending",
    });
    const CompleteBookings = await Booking.find({
      owner: _id,
      status: "confirmed",
    });
    const monthlyrevenue = bookings
      .slice()
      .filter((booking) => booking.status === "confirmed")
      .reduce((acc, booking) => {
        return (acc + booking.price, 0);
      }, 0);

    dashboardData = {
      totalcars: cars.length,
      totalbookings: bookings.length,
      pendingBookings: pendingBookings.length,
      CompleteBookings: CompleteBookings.length,
      recentBookings: bookings.slice(0, 3),
      monthlyrevenue,
    };

    res.json({
      success: true,
      dashboardData,
    });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const updateUserImage = async (req, res) => {
  try {
    const { _id } = req.user;
      const imageFile = req.file;

    const fileBuffer = fs.readFileSync(imageFile.path);

    const uploadResponse = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/users",
    });

    const customTransformUrl = imagekit.url({
      path: uploadResponse.filePath,
      transformation: [
        { width: "400" },
        { quality: "auto" },
        { format: "webp" },
      ],
    });

    await User.findByIdAndUpdate(_id, { image: customTransformUrl });

    res.json({ success: true, message: "Image Updated Successfully" });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  } }

