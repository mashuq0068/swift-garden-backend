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
exports.recentProductServices = void 0;
const config_1 = require("../../config");
const createRecentProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.recentProduct.create({
        data: payload,
    });
    return result;
});
const getRecentProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.recentProduct.findMany({
        include: {
            product: true,
            user: true,
        },
    });
    return result;
});
const getSingleRecentProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.recentProduct.findMany({
        where: { userId: id },
        include: {
            product: true,
            user: true,
        },
    });
    return result;
});
const updateRecentProduct = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.recentProduct.findUniqueOrThrow({
        where: { id },
    });
    const result = yield config_1.prisma.recentProduct.update({
        where: { id },
        data: payload,
    });
    return result;
});
const deleteRecentProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.recentProduct.findUniqueOrThrow({
        where: { id },
    });
    yield config_1.prisma.recentProduct.delete({
        where: { id },
    });
});
exports.recentProductServices = {
    createRecentProduct,
    getRecentProducts,
    getSingleRecentProduct,
    updateRecentProduct,
    deleteRecentProduct,
};
