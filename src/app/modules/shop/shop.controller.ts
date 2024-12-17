import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { shopServices } from "./shop.service";

const createShopIntoDB = catchAsync(async (req, res) => {
  const result = await shopServices.createShop(req);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Shop created successfully",
    data: result,
  });
});
const createManyShopsIntoDB = catchAsync(async (req, res) => {
  const result = await shopServices.createManyShops(req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Shops created successfully",
    data: result,
  });
});

const getAllShopsFromDB = catchAsync(async (req, res) => {
  const result = await shopServices.getShops();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Shops retrieved successfully",
    data: result,
  });
});

const getSingleShopFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await shopServices.getSingleShop(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Shop retrieved successfully",
    data: result,
  });
});

const updateShopIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await shopServices.updateShop(id, req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Shop updated successfully",
    data: result,
  });
});

const deleteShopFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await shopServices.deleteShop(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Shop successfully deleted",
    data: result,
  });
});

export const shopControllers = {
  createShopIntoDB,
  createManyShopsIntoDB,
  getAllShopsFromDB,
  getSingleShopFromDB,
  updateShopIntoDB,
  deleteShopFromDB,
};
