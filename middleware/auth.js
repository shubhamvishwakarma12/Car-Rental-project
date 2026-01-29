import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.json({ success: false, message: "Not authorized" });
    }
    const UserId = jwt.decode(token, process.env.JWT_SECRET);
    if (!UserId) {
      res.json({ success: false, message: "Not authorized" });
    }
    req.user = await User.findById(UserId).select("-password");
    next();
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};
