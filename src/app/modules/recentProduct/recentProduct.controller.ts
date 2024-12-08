import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { recentProductServices } from "./recentProduct.service";

const createRecentProductIntoDB = catchAsync(async (req, res) => {
  const result = await recentProductServices.createRecentProduct(req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Recent Product created successfully",
    data: result,
  });
});

const getAllRecentProductsFromDB = catchAsync(async (req, res) => {
  const result = await recentProductServices.getRecentProducts();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Recent Products retrieved successfully",
    data: result,
  });
});

const getSingleRecentProductFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await recentProductServices.getSingleRecentProduct(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Recent Product retrieved successfully",
    data: result,
  });
});

const updateRecentProductIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await recentProductServices.updateRecentProduct(id, req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Recent Product updated successfully",
    data: result,
  });
});

const deleteRecentProductFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  await recentProductServices.deleteRecentProduct(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Recent Product successfully deleted",
  });
});

export const recentProductControllers = {
  createRecentProductIntoDB,
  getAllRecentProductsFromDB,
  getSingleRecentProductFromDB,
  updateRecentProductIntoDB,
  deleteRecentProductFromDB,
};
