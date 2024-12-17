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
Object.defineProperty(exports, "__esModule", { value: true });
exports.followerServices = void 0;
const config_1 = require("../../config"); // Assuming your Prisma config is set up properly
const createFollower = (userId, shopId) => __awaiter(void 0, void 0, void 0, function* () {
    // Add a follower relationship between user and shop
    const result = yield config_1.prisma.follower.create({
        data: { userId, shopId },
    });
    return result;
});
const isFollowing = (userId, shopId) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the user is already following the shop
    const result = yield config_1.prisma.follower.findFirst({
        where: { userId, shopId },
    });
    return !!result;
});
const deleteFollower = (userId, shopId) => __awaiter(void 0, void 0, void 0, function* () {
    // Remove the follower relationship between user and shop
    yield config_1.prisma.follower.deleteMany({
        where: { userId, shopId },
    });
});
const getFollowersByShop = (shopId) => __awaiter(void 0, void 0, void 0, function* () {
    // Get all users following a specific shop
    const result = yield config_1.prisma.follower.findMany({
        where: { shopId },
        include: {
            user: true, // Assuming 'user' is a relation in your Prisma schema
        },
    });
    return result;
});
const getFollowedShopsByUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    // Get all shops followed by a specific user
    const result = yield config_1.prisma.follower.findMany({
        where: { userId },
        include: {
            shop: true, // Assuming 'shop' is a relation in your Prisma schema
        },
    });
    return result;
});
const toggleFollower = (userId, shopId) => __awaiter(void 0, void 0, void 0, function* () {
    // Toggle follow/unfollow functionality
    const isFollowed = yield isFollowing(userId, shopId);
    if (isFollowed) {
        yield deleteFollower(userId, shopId);
        return "unfollowed";
    }
    else {
        yield createFollower(userId, shopId);
        return "followed";
    }
});
// Optional: Retrieve all followers (for admin or analytics purposes)
const getAllFollowers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.follower.findMany({
        include: {
            user: true,
            shop: true,
        },
    });
    return result;
});
exports.followerServices = {
    createFollower,
    isFollowing,
    deleteFollower,
    getFollowersByShop,
    getFollowedShopsByUser,
    toggleFollower,
    getAllFollowers,
};
