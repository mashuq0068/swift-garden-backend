import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { orderServices } from "./order.service";

const createOrderWithPaymentLink = catchAsync(async (req, res) => {
  const { userId, shopId, items, paymentMethod } = req.body;

  const result = await orderServices.createOrderAndPaymentLink({
    userId,
    shopId,
    items,
    paymentMethod,
  });

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Order created, payment link generated successfully",
    data: result,
  });
});

export const orderControllers = {
  createOrderWithPaymentLink,
};
