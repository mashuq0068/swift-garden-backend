import { Router } from "express";
import { followerControllers } from "./follower.controller";

const router = Router();

router.post("/", followerControllers.createFollowerIntoDB);
router.get("/", followerControllers.getAllFollowersFromDB);
router.get("/:id", followerControllers.getSingleFollowerFromDB);
router.put("/:id", followerControllers.updateFollowerIntoDB);
router.delete("/:id", followerControllers.deleteFollowerFromDB);

export const followerRoutes = router;
