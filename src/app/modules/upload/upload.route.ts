import { Router } from "express";
import { fileUploader } from "../../utils/fileUploader";
import { uploadControllers } from "./upload.controller";

const router = Router();

// Use the memory storage uploader
router.post("/", fileUploader.upload.single("file"), uploadControllers.uploadFile);

export const uploadRoutes = router;
