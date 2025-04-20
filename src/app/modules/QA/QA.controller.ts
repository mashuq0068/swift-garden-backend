import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { QAServices } from "./QA.service";

const createMCQFromAI = catchAsync(async (req, res) => {
  const result = await QAServices.createMCQ();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "MCQ Generated Successfully",
    data: result,
  });
});

export const QAControllers = {
  createMCQFromAI,
};
