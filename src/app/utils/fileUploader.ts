import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { AppError } from "../errors/AppError";

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dhe24bfs8",
  api_key: "428397182746349",
  api_secret: "Ggy6Lq6Mu6V-TndITIjhqogCsp4",
});

// Multer memory storage
const storage = multer.memoryStorage();

// Multer uploader
const upload = multer({ storage });

// Upload file directly to Cloudinary
const uploadToCloudinary = async (file: Express.Multer.File): Promise<any> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { public_id: file.originalname },
      (error, result) => {
        if (error) {
          reject(new AppError(500, "File upload to Cloudinary failed"));
        } else {
          resolve(result); // Resolve with the upload result
        }
      }
    );

    stream.end(file.buffer); // Send the file buffer to the Cloudinary upload stream
  });
};

export const fileUploader = {
  upload,
  uploadToCloudinary,
};
