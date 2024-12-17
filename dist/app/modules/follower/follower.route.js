"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.followerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const follower_controller_1 = require("./follower.controller");
const router = express_1.default.Router();
router.post("/", follower_controller_1.followerControllers.createFollowerIntoDB);
router.post("/toggle", follower_controller_1.followerControllers.toggleFollowerIntoDB);
router.get("", follower_controller_1.followerControllers.getAllFollowersFromDB);
router.get("/shop/:shopId", follower_controller_1.followerControllers.getFollowersByShopFromDB);
router.get("/user/:userId", follower_controller_1.followerControllers.getFollowedShopsByUserFromDB);
router.delete("/", follower_controller_1.followerControllers.deleteFollowerFromDB);
exports.followerRoutes = router;
