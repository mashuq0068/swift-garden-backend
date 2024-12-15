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
exports.flashSaleServices = void 0;
const config_1 = require("../../config");
const createFlashSale = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.flashSale.create({
        data: payload,
    });
    return result;
});
const getFlashSales = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.flashSale.findMany({
        include: {
            product: true,
        },
    });
    return result;
});
const getSingleFlashSale = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.flashSale.findUniqueOrThrow({
        where: { id },
        include: {
            product: true,
        },
    });
    return result;
});
const updateFlashSale = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.flashSale.findUniqueOrThrow({
        where: { id },
    });
    const result = yield config_1.prisma.flashSale.update({
        where: { id },
        data: payload,
    });
    return result;
});
const deleteFlashSale = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.flashSale.findUniqueOrThrow({
        where: { id },
    });
    yield config_1.prisma.flashSale.delete({
        where: { id },
    });
});
exports.flashSaleServices = {
    createFlashSale,
    getFlashSales,
    getSingleFlashSale,
    updateFlashSale,
    deleteFlashSale,
};
