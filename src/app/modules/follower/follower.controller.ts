import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { followerServices } from "./follower.service";

const createFollowerIntoDB = catchAsync(async (req, res) => {
  const result = await followerServices.createFollower(req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Follower created successfully",
    data: result,
  });
});

const getAllFollowersFromDB = catchAsync(async (req, res) => {
  const result = await followerServices.getFollowers();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Followers retrieved successfully",
    data: result,
  });
});

const getSingleFollowerFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await followerServices.getSingleFollower(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Follower retrieved successfully",
    data: result,
  });
});

const updateFollowerIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await followerServices.updateFollower(id, req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Follower updated successfully",
    data: result,
  });
});

const deleteFollowerFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  await followerServices.deleteFollower(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Follower successfully deleted",
  });
});

export const followerControllers = {
  createFollowerIntoDB,
  getAllFollowersFromDB,
  getSingleFollowerFromDB,
  updateFollowerIntoDB,
  deleteFollowerFromDB,
};
