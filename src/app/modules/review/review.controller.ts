import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { reviewServices } from "./review.service";

const createReviewIntoDB = catchAsync(async (req, res) => {
  const result = await reviewServices.createReview(req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Review created successfully",
    data: result,
  });
});

const getAllReviewsFromDB = catchAsync(async (req, res) => {
  const result = await reviewServices.getReviews();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Reviews retrieved successfully",
    data: result,
  });
});

const getSingleReviewFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await reviewServices.getSingleReview(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Review retrieved successfully",
    data: result,
  });
});

const updateReviewIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await reviewServices.updateReview(id, req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Review updated successfully",
    data: result,
  });
});

const deleteReviewFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  await reviewServices.deleteReview(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Review successfully deleted",
  });
});

export const reviewControllers = {
  createReviewIntoDB,
  getAllReviewsFromDB,
  getSingleReviewFromDB,
  updateReviewIntoDB,
  deleteReviewFromDB,
};
