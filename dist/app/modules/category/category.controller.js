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
exports.categoryControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const category_service_1 = require("./category.service");
const createCategoryIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.categoryServices.createCategory(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Category created successfully",
        data: result,
    });
}));
const createManyCategoryIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.categoryServices.createManyCategories(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Categories created successfully",
        data: result,
    });
}));
const getAllCategoriesFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.categoryServices.getCategories();
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Categories retrieved successfully",
        data: result,
    });
}));
const getSingleCategoryFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield category_service_1.categoryServices.getSingleCategory(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Category retrieved successfully",
        data: result,
    });
}));
const updateCategoryIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield category_service_1.categoryServices.updateCategory(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Category updated successfully",
        data: result,
    });
}));
const deleteCategoryFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield category_service_1.categoryServices.deleteCategory(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Category successfully deleted",
    });
}));
exports.categoryControllers = {
    createCategoryIntoDB,
    getAllCategoriesFromDB,
    getSingleCategoryFromDB,
    updateCategoryIntoDB,
    deleteCategoryFromDB,
    createManyCategoryIntoDB
};
