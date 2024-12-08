import { Router } from "express";
import { recentProductControllers } from "./recentProduct.controller";

const router = Router();

router.post("/", recentProductControllers.createRecentProductIntoDB);
router.get("/", recentProductControllers.getAllRecentProductsFromDB);
router.get("/:id", recentProductControllers.getSingleRecentProductFromDB);
router.put("/:id", recentProductControllers.updateRecentProductIntoDB);
router.delete("/:id", recentProductControllers.deleteRecentProductFromDB);

export const recentProductRoutes = router;
