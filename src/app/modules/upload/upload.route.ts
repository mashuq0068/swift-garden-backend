import { Router } from "express";
import { fileUploader } from "../../utils/fileUploader";
import { uploadControllers } from "./upload.controller";

const router = Router();

router.post("/",fileUploader.upload.single("file"), uploadControllers.uploadFile);


export const uploadRoutes = router;
