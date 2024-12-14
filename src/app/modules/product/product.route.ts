import { Router } from "express";
import { productControllers } from "./product.controller";
import { fileUploader } from "../../utils/fileUploader";

const router = Router();

router.post("/",fileUploader.upload.single("photo"), productControllers.createProductIntoDB);
router.get("/", productControllers.getAllProductsFromDB);
router.get("/:id", productControllers.getSingleProductFromDB);
router.put("/:id", productControllers.updateProductIntoDB);
router.delete("/:id", productControllers.deleteProductFromDB);

export const productRoutes = router;
