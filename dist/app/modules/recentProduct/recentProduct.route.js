"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recentProductRoutes = void 0;
const express_1 = require("express");
const recentProduct_controller_1 = require("./recentProduct.controller");
const router = (0, express_1.Router)();
router.post("/", recentProduct_controller_1.recentProductControllers.createRecentProductIntoDB);
router.get("/", recentProduct_controller_1.recentProductControllers.getAllRecentProductsFromDB);
router.get("/:id", recentProduct_controller_1.recentProductControllers.getSingleRecentProductFromDB);
router.put("/:id", recentProduct_controller_1.recentProductControllers.updateRecentProductIntoDB);
router.delete("/:id", recentProduct_controller_1.recentProductControllers.deleteRecentProductFromDB);
exports.recentProductRoutes = router;
