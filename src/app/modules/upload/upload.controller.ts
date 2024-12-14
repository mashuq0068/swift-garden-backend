import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { uploadServices } from "./upload.service";

const uploadFile = catchAsync(async (req, res) => {
  const result = await uploadServices.uploadFileIntoCloudinary(req);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Photo uploaded successfully",
    data: result,
  });
});

export const uploadControllers = {
  uploadFile,
};
