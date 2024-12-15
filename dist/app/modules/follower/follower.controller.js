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
exports.followerControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const follower_service_1 = require("./follower.service");
const createFollowerIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield follower_service_1.followerServices.createFollower(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Follower created successfully",
        data: result,
    });
}));
const getAllFollowersFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield follower_service_1.followerServices.getFollowers();
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Followers retrieved successfully",
        data: result,
    });
}));
const getSingleFollowerFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield follower_service_1.followerServices.getSingleFollower(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Follower retrieved successfully",
        data: result,
    });
}));
const updateFollowerIntoDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield follower_service_1.followerServices.updateFollower(id, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Follower updated successfully",
        data: result,
    });
}));
const deleteFollowerFromDB = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield follower_service_1.followerServices.deleteFollower(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Follower successfully deleted",
    });
}));
exports.followerControllers = {
    createFollowerIntoDB,
    getAllFollowersFromDB,
    getSingleFollowerFromDB,
    updateFollowerIntoDB,
    deleteFollowerFromDB,
};
