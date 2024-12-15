"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.couponControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const coupon_service_1 = require("./coupon.service");
const createCouponIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coupon_service_1.couponServices.createCoupon(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Coupon created successfully",
        data: result,
    });
}));
const getAllCouponsFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coupon_service_1.couponServices.getCoupons();
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Coupons retrieved successfully",
        data: result,
    });
}));
const getSingleCouponFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield coupon_service_1.couponServices.getSingleCoupon(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Coupon retrieved successfully",
        data: result,
    });
}));
const updateCouponIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield coupon_service_1.couponServices.updateCoupon(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Coupon updated successfully",
        data: result,
    });
}));
const deleteCouponFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield coupon_service_1.couponServices.deleteCoupon(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Coupon successfully deleted",
    });
}));
exports.couponControllers = {
    createCouponIntoDB,
    getAllCouponsFromDB,
    getSingleCouponFromDB,
    updateCouponIntoDB,
    deleteCouponFromDB,
};
