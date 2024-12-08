import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { couponServices } from "./coupon.service";

const createCouponIntoDB = catchAsync(async (req, res) => {
  const result = await couponServices.createCoupon(req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Coupon created successfully",
    data: result,
  });
});

const getAllCouponsFromDB = catchAsync(async (req, res) => {
  const result = await couponServices.getCoupons();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Coupons retrieved successfully",
    data: result,
  });
});

const getSingleCouponFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await couponServices.getSingleCoupon(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Coupon retrieved successfully",
    data: result,
  });
});

const updateCouponIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await couponServices.updateCoupon(id, req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Coupon updated successfully",
    data: result,
  });
});

const deleteCouponFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  await couponServices.deleteCoupon(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Coupon successfully deleted",
  });
});

export const couponControllers = {
  createCouponIntoDB,
  getAllCouponsFromDB,
  getSingleCouponFromDB,
  updateCouponIntoDB,
  deleteCouponFromDB,
};
