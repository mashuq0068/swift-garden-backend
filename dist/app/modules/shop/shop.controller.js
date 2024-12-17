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
exports.shopControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const shop_service_1 = require("./shop.service");
const createShopIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shop_service_1.shopServices.createShop(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Shop created successfully",
        data: result,
    });
}));
const createManyShopsIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shop_service_1.shopServices.createManyShops(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Shops created successfully",
        data: result,
    });
}));
const getAllShopsFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shop_service_1.shopServices.getShops();
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Shops retrieved successfully",
        data: result,
    });
}));
const getSingleShopFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield shop_service_1.shopServices.getSingleShop(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Shop retrieved successfully",
        data: result,
    });
}));
const updateShopIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield shop_service_1.shopServices.updateShop(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Shop updated successfully",
        data: result,
    });
}));
const deleteShopFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield shop_service_1.shopServices.deleteShop(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Shop successfully deleted",
        data: result,
    });
}));
exports.shopControllers = {
    createShopIntoDB,
    createManyShopsIntoDB,
    getAllShopsFromDB,
    getSingleShopFromDB,
    updateShopIntoDB,
    deleteShopFromDB,
};
