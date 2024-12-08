import { Router } from "express";
import { productControllers } from "./product.controller";

const router = Router();

router.post("/", productControllers.createProductIntoDB);
router.get("/", productControllers.getAllProductsFromDB);
router.get("/:id", productControllers.getSingleProductFromDB);
router.put("/:id", productControllers.updateProductIntoDB);
router.delete("/:id", productControllers.deleteProductFromDB);

export const productRoutes = router;
