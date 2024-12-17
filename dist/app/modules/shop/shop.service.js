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
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopServices = void 0;
const config_1 = require("../../config");
const fileUploader_1 = require("../../utils/fileUploader");
const createShop = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const logo = req.file;
    if (logo) {
        const uploadToCloudinary = yield fileUploader_1.fileUploader.uploadToCloudinary(logo);
        req.body.logo = uploadToCloudinary === null || uploadToCloudinary === void 0 ? void 0 : uploadToCloudinary.secure_url;
    }
    const result = yield config_1.prisma.shop.create({
        data: Object.assign({}, req.body),
    });
    return result;
});
const createManyShops = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield config_1.prisma.shop.createMany({
            data: payload,
        });
        return result;
    }
    catch (error) {
        console.error('Error creating shops:', error);
        throw new Error('Failed to create shops');
    }
});
const getShops = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.shop.findMany({
        include: {
            user: true,
            Product: true,
            Follower: true,
            Order: true,
        },
    });
    return result;
});
const getSingleShop = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.shop.findUniqueOrThrow({
        where: { id },
        include: {
            user: true,
            Product: true,
            Follower: true,
            Order: true,
        },
    });
    return result;
});
const updateShop = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield config_1.prisma.shop.findUniqueOrThrow({
        where: { id },
    });
    const result = yield config_1.prisma.shop.update({
        where: { id },
        data: payload,
    });
    return result;
});
const deleteShop = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.shop.findUniqueOrThrow({
        where: { id },
    });
    yield config_1.prisma.shop.delete({
        where: { id },
    });
});
exports.shopServices = {
    createShop,
    getShops,
    getSingleShop,
    updateShop,
    createManyShops,
    deleteShop,
};
