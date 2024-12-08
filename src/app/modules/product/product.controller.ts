import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productServices } from "./product.service";

const createProductIntoDB = catchAsync(async (req, res) => {
  const result = await productServices.createProduct(req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Product created successfully",
    data: result,
  });
});

const getAllProductsFromDB = catchAsync(async (req, res) => {
  const result = await productServices.getProducts();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Products retrieved successfully",
    data: result,
  });
});

const getSingleProductFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.getSingleProduct(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Product retrieved successfully",
    data: result,
  });
});

const updateProductIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.updateProduct(id, req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Product updated successfully",
    data: result,
  });
});

const deleteProductFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  await productServices.deleteProduct(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Product successfully deleted",
  });
});

export const productControllers = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
