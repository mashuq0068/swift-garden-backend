import { Router } from "express";
import { reviewControllers } from "./review.controller";

const router = Router();

router.post("/", reviewControllers.createReviewIntoDB);
router.get("/", reviewControllers.getAllReviewsFromDB);
router.get("/:id", reviewControllers.getSingleReviewFromDB);
router.put("/:id", reviewControllers.updateReviewIntoDB);
router.delete("/:id", reviewControllers.deleteReviewFromDB);

export const reviewRoutes = router;
