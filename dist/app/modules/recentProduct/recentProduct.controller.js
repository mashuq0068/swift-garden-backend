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
exports.recentProductControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const recentProduct_service_1 = require("./recentProduct.service");
const createRecentProductIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield recentProduct_service_1.recentProductServices.createRecentProduct(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Recent Product created successfully",
        data: result,
    });
}));
const getAllRecentProductsFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield recentProduct_service_1.recentProductServices.getRecentProducts();
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Recent Products retrieved successfully",
        data: result,
    });
}));
const getSingleRecentProductFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield recentProduct_service_1.recentProductServices.getSingleRecentProduct(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Recent Product retrieved successfully",
        data: result,
    });
}));
const updateRecentProductIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield recentProduct_service_1.recentProductServices.updateRecentProduct(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Recent Product updated successfully",
        data: result,
    });
}));
const deleteRecentProductFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield recentProduct_service_1.recentProductServices.deleteRecentProduct(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Recent Product successfully deleted",
    });
}));
exports.recentProductControllers = {
    createRecentProductIntoDB,
    getAllRecentProductsFromDB,
    getSingleRecentProductFromDB,
    updateRecentProductIntoDB,
    deleteRecentProductFromDB,
};
