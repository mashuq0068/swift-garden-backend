import { Router } from "express";
import { couponControllers } from "./coupon.controller";

const router = Router();

router.post("/", couponControllers.createCouponIntoDB);
router.get("/", couponControllers.getAllCouponsFromDB);
router.get("/:id", couponControllers.getSingleCouponFromDB);
router.put("/:id", couponControllers.updateCouponIntoDB);
router.delete("/:id", couponControllers.deleteCouponFromDB);

export const couponRoutes = router;
