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
exports.reviewControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const review_service_1 = require("./review.service");
const createReviewIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_service_1.reviewServices.createReview(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Review created successfully",
        data: result,
    });
}));
const getAllReviewsFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_service_1.reviewServices.getReviews();
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Reviews retrieved successfully",
        data: result,
    });
}));
const getSingleReviewFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield review_service_1.reviewServices.getSingleReview(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Review retrieved successfully",
        data: result,
    });
}));
const updateReviewIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield review_service_1.reviewServices.updateReview(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Review updated successfully",
        data: result,
    });
}));
const deleteReviewFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield review_service_1.reviewServices.deleteReview(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Review successfully deleted",
    });
}));
exports.reviewControllers = {
    createReviewIntoDB,
    getAllReviewsFromDB,
    getSingleReviewFromDB,
    updateReviewIntoDB,
    deleteReviewFromDB,
};
