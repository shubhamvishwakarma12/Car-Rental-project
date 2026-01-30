import User from "../models/User.js";
import fs from "fs";
import imagekit from "../configs/imagekit.js";
import Car from "../models/Car.js";
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

//list add Car
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
