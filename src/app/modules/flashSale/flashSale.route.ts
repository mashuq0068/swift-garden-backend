import { Router } from "express";
import { flashSaleControllers } from "./flashSale.controller";

const router = Router();

router.post("/", flashSaleControllers.createFlashSaleIntoDB);
router.get("/", flashSaleControllers.getAllFlashSalesFromDB);
router.get("/:id", flashSaleControllers.getSingleFlashSaleFromDB);
router.put("/:id", flashSaleControllers.updateFlashSaleIntoDB);
router.delete("/:id", flashSaleControllers.deleteFlashSaleFromDB);

export const flashSaleRoutes = router;
