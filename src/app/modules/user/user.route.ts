import { Router } from "express";
import { userControllers } from "./user.controller";
import multer from "multer";
import path from "path"
import { fileUploader } from "../../utils/fileUploader";


const router = Router()


router.post('/admin' ,fileUploader.upload.single('profilePhoto'), userControllers.createAdminIntoDB)

export const userRoutes = router  