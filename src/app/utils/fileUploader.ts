import multer from "multer";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { AppError } from "../errors/AppError";

// Configuration of cloudinary
cloudinary.config({
  cloud_name: "dhe24bfs8",
  api_key: "428397182746349",
  api_secret: "Ggy6Lq6Mu6V-TndITIjhqogCsp4",
});

// multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
    cb(null, file.originalname);
  },
});

//   multer uploader
const upload = multer({ storage: storage });

const uploadToCloudinary = async (file: any) => {
  // Upload an image
  try {
    const uploadResult = await cloudinary.uploader.upload(file.path, {
      public_id: file.originalname,
    });
    return uploadResult;
  } catch (err) {
    throw new AppError(500 , "File not uploaded")
  }
};


export const fileUploader = {
    upload,
    uploadToCloudinary
}