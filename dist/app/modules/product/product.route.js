"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const fileUploader_1 = require("../../utils/fileUploader");
const router = (0, express_1.Router)();
router.post("/", fileUploader_1.fileUploader.upload.single("photo"), product_controller_1.productControllers.createProductIntoDB);
router.get("/", product_controller_1.productControllers.getAllProductsFromDB);
router.get("/:id", product_controller_1.productControllers.getSingleProductFromDB);
router.put("/:id", product_controller_1.productControllers.updateProductIntoDB);
router.delete("/:id", product_controller_1.productControllers.deleteProductFromDB);
exports.productRoutes = router;