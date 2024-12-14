import { Router } from "express";
import { categoryControllers } from "./category.controller";

const router = Router();

router.post("/", categoryControllers.createCategoryIntoDB);
router.get("/", categoryControllers.getAllCategoriesFromDB);
router.get("/:id", categoryControllers.getSingleCategoryFromDB);
router.put("/:id", categoryControllers.updateCategoryIntoDB);
router.delete("/:id", categoryControllers.deleteCategoryFromDB);

export const categoryRoutes = router;
