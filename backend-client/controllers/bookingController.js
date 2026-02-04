import Booking from "../models/Booking.js";
import Car from "../models/Car.js";

export const checkAvaliability = async (car, pickupDate, returnDate) => {
  try {
    const booking = await Booking.find({
      car,
      pickupDate: { $lte: returnDate },
      returnDate: { $gte: pickupDate },
    });
    return booking.length === 0;
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const checkavalibilityOfcar = async (req, res) => {
  try {
    const { location, pickupDate, returnDate } = req.body;

    const cars = await Car.find({ location, isAvaliable: true });

    const avaliableCarpromise = cars.map(async (car) => {
     const isAvaliable = await checkAvaliability(car._id, pickupDate, returnDate);
     return {...car._doc, isAvaliable: isAvaliable};
    });
    let avaliableCars = await Promise.all(avaliableCarpromise);
    avaliableCars = avaliableCars.filter(car => car.isAvaliable === true);

    res.json({ success: true, avaliableCars});

  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const createBooking = async(req, res)=>{
    try {
        const {_id} = req.user;
        const {car, pickupDate, returnDate} = req.body;
        const isAvaliable = await checkAvaliability(car, pickupDate, returnDate);
        if(!isAvaliable){
            res.json({ success: false, message: "Car is Not Avaliable" });
        }
        const carData = await Car.findById(car);

        const picked = new Date(pickupDate);
        const returned = new Date(returnDate);
        const noOfDays = Math.ceil((returned - picked)/(1000*60*60*24));
        const price = carData.pricePerDay * noOfDays;
        await Booking.create({car, owner: carData.owner, user: _id, pickupDate, returnDate, price});

        res.json({ success: true, message: "Booking Created Successfully" });
    } catch (error) {
        console.error(error.message);
    res.json({ success: false, message: error.message });
    }
}

export const getUserBooking = async (req, res)=>{
    try {
        const {_id} = req.user;
        const bookings = await Booking.find({user: _id}).populate("car").sort({createdAt: -1});
        res.json({ success: true, bookings});
    } catch (error) {
        console.error(error.message);
    res.json({ success: false, message: error.message });
    }
}

export const getOwnerBooking = async (req, res)=>{
    try {
        if(req.user.role !== 'owner'){
            res.json({ success: false, message: "Unauthorized" });
        }
        const bookings = await Booking.find({owner: req.user._id}).populate("car user").select("-user.password").sort({createdAt: -1});
        res.json({ success: true, bookings});
    } catch (error) {
        console.error(error.message);
    res.json({ success: false, message: error.message });
    }
}

export const changeBookingStatus = async (req, res)=>{
    try {
      const {_id} = req.user;
      const {bookingId, status} = req.body;
      const booking = await Booking.findById(bookingId);
      if(!booking){
        res.json({ success: false, message: "Booking not found" });
      }
      if(booking.owner.toString() !== _id.toString()){
        res.json({ success: false, message: "Unauthorized" });
      }

      booking.status = status;
      await booking.save();
      
      res.json({ success: true, message: "Booking status updated successfully" });
    } catch (error) {
        console.error(error.message);
    res.json({ success: false, message: error.message });
    }
}
