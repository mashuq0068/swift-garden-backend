import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.service";

const getAllUsers = catchAsync(async (req, res) => {
  const result = await userServices.getUsers(req.query);
  sendResponse(res, {
    status: 200,
    success: true,
    message: "Users retrieved successfully",
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const result = await userServices.getUserById(req.params.id);
  sendResponse(res, {
    status: 200,
    success: true,
    message: "User retrieved successfully",
    data: result,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const result = await userServices.deleteUser(req.params.id);
  sendResponse(res, {
    status: 200,
    success: true,
    message: result.message,
  });
});

export const userControllers = {
  getAllUsers,
  getSingleUser,
  deleteUser,
};