import { Router } from "express";
import { shopControllers } from "./shop.controller";
import { fileUploader } from "../../utils/fileUploader";

const router = Router();

router.post(
  "/",
  fileUploader.upload.single("logo"),
  shopControllers.createShopIntoDB
);

router.get("/", shopControllers.getAllShopsFromDB);
router.get("/:id", shopControllers.getSingleShopFromDB);
router.put("/:id", shopControllers.updateShopIntoDB);
router.delete("/:id", shopControllers.deleteShopFromDB);

export const shopRoutes = router;
