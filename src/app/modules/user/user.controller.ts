import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.service";

const createAdminIntoDB = catchAsync(async (req, res) => {
  const result = await userServices.createAdmin(req);
  sendResponse(res, {
    status: 200,
    success: true,
    message: "admin created successfully",
    data: result,
  });
});

const getAllAdminFromDB = catchAsync(async (req, res) => {
  const result = await userServices.getAllAdmin(req.query);
  sendResponse(res, {
    status: 200,
    success: true,
    message: "admin retrieved successfully",
    meta:result.meta,
    data: result.data,
  });
});
const getSingleAdminFromDB = catchAsync(async(req, res) => {
  console.log(req.params.id);
  const result = await userServices.getSingleAdmin(req.params.id , req.body)
  sendResponse(res , {
    status : 200,
    success:true,
    message:'admin retrieved successfully',
    data: result
  })
})

export const userControllers = {
  createAdminIntoDB,
  getAllAdminFromDB,
  getSingleAdminFromDB
};
