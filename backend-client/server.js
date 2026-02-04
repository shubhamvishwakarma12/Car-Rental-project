import express from "express";
import  "dotenv/config";
import cors from "cors";
import { ConnectDB } from "./configs/db.js";
import userRoutes from "./routes/userRoutes.js";
import ownerRoutes from "./routes/ownerRoutes.js";
import BookingRoutes from "./routes/bookingRoutes.js";

const app = express();
let Port = 3000;

//Connection to Database
await ConnectDB();

//Middleware
app.use(cors());
app.use(express.json());

app.get("/",(req, res)=>{
    console.log("hello");
    res.status(200).send("url is running");
});

app.use("/api/user", userRoutes);
app.use("/api/owner", ownerRoutes)
app.use("/api/booking", BookingRoutes)

app.listen(Port,()=>{
    console.log(`App is running on this url http://localhoast:${Port}`);
    
});
