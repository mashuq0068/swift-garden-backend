"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUploader = void 0;
const multer_1 = __importDefault(require("multer"));
const cloudinary_1 = require("cloudinary");
const AppError_1 = require("../errors/AppError");
// Configure Cloudinary
cloudinary_1.v2.config({
    cloud_name: "dhe24bfs8",
    api_key: "428397182746349",
    api_secret: "Ggy6Lq6Mu6V-TndITIjhqogCsp4",
});
// Multer memory storage
const storage = multer_1.default.memoryStorage();
// Multer uploader
const upload = (0, multer_1.default)({ storage });
// Upload file directly to Cloudinary
const uploadToCloudinary = (file) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const stream = cloudinary_1.v2.uploader.upload_stream({ public_id: file.originalname }, (error, result) => {
            if (error) {
                reject(new AppError_1.AppError(500, "File upload to Cloudinary failed"));
            }
            else {
                resolve(result); // Resolve with the upload result
            }
        });
        stream.end(file.buffer); // Send the file buffer to the Cloudinary upload stream
    });
});
exports.fileUploader = {
    upload,
    uploadToCloudinary,
};
