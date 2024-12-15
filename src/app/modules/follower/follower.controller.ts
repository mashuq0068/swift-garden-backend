import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { followerServices } from "./follower.service";

// Create a follower
const createFollowerIntoDB = catchAsync(async (req, res) => {
  const { userId, shopId } = req.body;
  const result = await followerServices.createFollower(userId, shopId);
  sendResponse(res, {
    success: true,
    status: 201,
    message: "Follower created successfully",
    data: result,
  });
});

// Toggle follow/unfollow
const toggleFollowerIntoDB = catchAsync(async (req, res) => {
  const { userId, shopId } = req.body;
  const status = await followerServices.toggleFollower(userId, shopId);
  sendResponse(res, {
    success: true,
    status: 200,
    message: `Shop successfully ${status}`,
  });
});

// Get all followers
const getAllFollowersFromDB = catchAsync(async (req, res) => {
  const result = await followerServices.getAllFollowers();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Followers retrieved successfully",
    data: result,
  });
});

// Get followers by shop
const getFollowersByShopFromDB = catchAsync(async (req, res) => {
  const { shopId } = req.params;
  const result = await followerServices.getFollowersByShop(shopId);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Followers retrieved successfully for the shop",
    data: result,
  });
});

// Get followed shops by user
const getFollowedShopsByUserFromDB = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await followerServices.getFollowedShopsByUser(userId);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Followed shops retrieved successfully for the user",
    data: result,
  });
});

// Delete a follower
const deleteFollowerFromDB = catchAsync(async (req, res) => {
  const { userId, shopId } = req.body;
  await followerServices.deleteFollower(userId, shopId);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Follower successfully deleted",
  });
});

export const followerControllers = {
  createFollowerIntoDB,
  toggleFollowerIntoDB,
  getAllFollowersFromDB,
  getFollowersByShopFromDB,
  getFollowedShopsByUserFromDB,
  deleteFollowerFromDB,
};
