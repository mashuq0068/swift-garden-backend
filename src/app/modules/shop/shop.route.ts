import { Router } from "express";
import { shopControllers } from "./shop.controller";

const router = Router();

router.post("/", shopControllers.createShopIntoDB);
router.get("/", shopControllers.getAllShopsFromDB);
router.get("/:id", shopControllers.getSingleShopFromDB);
router.put("/:id", shopControllers.updateShopIntoDB);
router.delete("/:id", shopControllers.deleteShopFromDB);

export const shopRoutes = router;
