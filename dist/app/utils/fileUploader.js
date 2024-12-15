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
const path_1 = __importDefault(require("path"));
const cloudinary_1 = require("cloudinary");
const AppError_1 = require("../errors/AppError");
// Configuration of cloudinary
cloudinary_1.v2.config({
    cloud_name: "dhe24bfs8",
    api_key: "428397182746349",
    api_secret: "Ggy6Lq6Mu6V-TndITIjhqogCsp4",
});
// multer setup
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1.default.join(process.cwd(), "uploads"));
    },
    filename: function (req, file, cb) {
        //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        //   cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null, file.originalname);
    },
});
//   multer uploader
const upload = (0, multer_1.default)({ storage: storage });
const uploadToCloudinary = (file) => __awaiter(void 0, void 0, void 0, function* () {
    // Upload an image
    try {
        const uploadResult = yield cloudinary_1.v2.uploader.upload(file.path, {
            public_id: file.originalname,
        });
        return uploadResult;
    }
    catch (err) {
        throw new AppError_1.AppError(500, "File not uploaded");
    }
});
exports.fileUploader = {
    upload,
    uploadToCloudinary
};
