import express from "express";
import { orderControllers } from "./order.controller";

const router = express.Router();

// Route to create order and generate Stripe payment link
router.post("/", orderControllers.createOrderWithPaymentLink);
router.get("/:id", orderControllers.getAllOrders);

export const orderRoutes = router;
