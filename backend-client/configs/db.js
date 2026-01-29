import mongoose from "mongoose";



 export const ConnectDB = async ()=>{
    try {
        mongoose.connection.on("connected",()=>{console.log("Database Connected...!");
        });
        await mongoose.connect(`${process.env.MONGODB_URI}/car-rental`);
    } catch (error) {
        console.error("Error have Occured while connecting to DB", error.message);
        
    }
}