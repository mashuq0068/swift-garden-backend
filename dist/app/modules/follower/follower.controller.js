"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.followerControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const follower_service_1 = require("./follower.service");
// Create a follower
const createFollowerIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, shopId } = req.body;
    const result = yield follower_service_1.followerServices.createFollower(userId, shopId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 201,
        message: "Follower created successfully",
        data: result,
    });
}));
// Toggle follow/unfollow
const toggleFollowerIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, shopId } = req.body;
    const status = yield follower_service_1.followerServices.toggleFollower(userId, shopId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: `Shop successfully ${status}`,
    });
}));
// Get all followers
const getAllFollowersFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield follower_service_1.followerServices.getAllFollowers();
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Followers retrieved successfully",
        data: result,
    });
}));
// Get followers by shop
const getFollowersByShopFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { shopId } = req.params;
    const result = yield follower_service_1.followerServices.getFollowersByShop(shopId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Followers retrieved successfully for the shop",
        data: result,
    });
}));
// Get followed shops by user
const getFollowedShopsByUserFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield follower_service_1.followerServices.getFollowedShopsByUser(userId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Followed shops retrieved successfully for the user",
        data: result,
    });
}));
// Delete a follower
const deleteFollowerFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, shopId } = req.body;
    yield follower_service_1.followerServices.deleteFollower(userId, shopId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Follower successfully deleted",
    });
}));
exports.followerControllers = {
    createFollowerIntoDB,
    toggleFollowerIntoDB,
    getAllFollowersFromDB,
    getFollowersByShopFromDB,
    getFollowedShopsByUserFromDB,
    deleteFollowerFromDB,
};
