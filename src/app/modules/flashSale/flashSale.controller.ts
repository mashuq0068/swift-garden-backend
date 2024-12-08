import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { flashSaleServices } from "./flashSale.service";

const createFlashSaleIntoDB = catchAsync(async (req, res) => {
  const result = await flashSaleServices.createFlashSale(req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Flash Sale created successfully",
    data: result,
  });
});

const getAllFlashSalesFromDB = catchAsync(async (req, res) => {
  const result = await flashSaleServices.getFlashSales();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Flash Sales retrieved successfully",
    data: result,
  });
});

const getSingleFlashSaleFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await flashSaleServices.getSingleFlashSale(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Flash Sale retrieved successfully",
    data: result,
  });
});

const updateFlashSaleIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await flashSaleServices.updateFlashSale(id, req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Flash Sale updated successfully",
    data: result,
  });
});

const deleteFlashSaleFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  await flashSaleServices.deleteFlashSale(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Flash Sale successfully deleted",
  });
});

export const flashSaleControllers = {
  createFlashSaleIntoDB,
  getAllFlashSalesFromDB,
  getSingleFlashSaleFromDB,
  updateFlashSaleIntoDB,
  deleteFlashSaleFromDB,
};
