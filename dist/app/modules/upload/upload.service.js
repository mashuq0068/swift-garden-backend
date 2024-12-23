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
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadServices = void 0;
const fileUploader_1 = require("../../utils/fileUploader");
const uploadFileIntoCloudinary = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const uploadToCloudinary = yield fileUploader_1.fileUploader.uploadToCloudinary(req.file);
    return {
        photo: uploadToCloudinary === null || uploadToCloudinary === void 0 ? void 0 : uploadToCloudinary.secure_url, // Access `secure_url` from the result object
    };
});
exports.uploadServices = {
    uploadFileIntoCloudinary,
};
