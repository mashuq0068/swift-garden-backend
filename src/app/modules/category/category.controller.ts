import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { categoryServices } from "./category.service";

const createCategoryIntoDB = catchAsync(async (req, res) => {
  const result = await categoryServices.createCategory(req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Category created successfully",
    data: result,
  });
});

const getAllCategoriesFromDB = catchAsync(async (req, res) => {
  const result = await categoryServices.getCategories();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Categories retrieved successfully",
    data: result,
  });
});

const getSingleCategoryFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.getSingleCategory(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Category retrieved successfully",
    data: result,
  });
});

const updateCategoryIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.updateCategory(id, req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Category updated successfully",
    data: result,
  });
});

const deleteCategoryFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  await categoryServices.deleteCategory(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Category successfully deleted",
  });
});

export const categoryControllers = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
  getSingleCategoryFromDB,
  updateCategoryIntoDB,
  deleteCategoryFromDB,
};
