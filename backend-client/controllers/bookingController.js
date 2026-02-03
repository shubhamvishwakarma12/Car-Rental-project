import Booking from "../models/Booking";

export const checkAvaliability = async (car, pickupDate, returnDate)=>{
    try {
        const booking = await Booking.find({
            car,
            pickupDate: {$lte: returnDate},
            returnDate: {$gte: pickupDate}
        })
        return booking.length === 0;
    } catch (error) {
        console.error(error.message);
    res.json({ success: false, message: error.message });
    }
}


export const checkavalibilityOfcar = async (req, res)=>{
    try {
        const {location, pickupDate, returnDate} = req.body;
    } catch (error) {
        console.error(error.message);
    res.json({ success: false, message: error.message });
    }
}