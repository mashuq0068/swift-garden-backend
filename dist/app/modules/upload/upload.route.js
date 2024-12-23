"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadRoutes = void 0;
const express_1 = require("express");
const fileUploader_1 = require("../../utils/fileUploader");
const upload_controller_1 = require("./upload.controller");
const router = (0, express_1.Router)();
// Use the memory storage uploader
router.post("/", fileUploader_1.fileUploader.upload.single("file"), upload_controller_1.uploadControllers.uploadFile);
exports.uploadRoutes = router;
