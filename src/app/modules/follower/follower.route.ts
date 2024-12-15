import express from "express";
import { followerControllers } from "./follower.controller";

const router = express.Router();

router.post("/", followerControllers.createFollowerIntoDB);
router.post("/toggle", followerControllers.toggleFollowerIntoDB);
router.get("", followerControllers.getAllFollowersFromDB);
router.get("/shop/:shopId", followerControllers.getFollowersByShopFromDB);
router.get("/user/:userId", followerControllers.getFollowedShopsByUserFromDB);
router.delete("/", followerControllers.deleteFollowerFromDB);

export const followerRoutes =  router;
