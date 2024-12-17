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
exports.categoryServices = void 0;
const config_1 = require("../../config");
const createCategory = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.category.create({
        data: payload,
    });
    return result;
});
const createManyCategories = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield config_1.prisma.category.createMany({
            data: payload,
            skipDuplicates: true,
        });
        return result;
    }
    catch (error) {
        console.error('Error creating categories:', error);
        throw new Error('Failed to create categories');
    }
});
const getCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.category.findMany({
        include: {
            products: true,
        },
    });
    return result;
});
const getSingleCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.category.findUniqueOrThrow({
        where: { id },
        include: {
            products: {
                include: {
                    shop: true
                }
            }
        },
    });
    return result;
});
const updateCategory = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.category.findUniqueOrThrow({
        where: { id },
    });
    const result = yield config_1.prisma.category.update({
        where: { id },
        data: payload,
    });
    return result;
});
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.category.findUniqueOrThrow({
        where: { id },
    });
    yield config_1.prisma.category.delete({
        where: { id },
    });
});
exports.categoryServices = {
    createCategory,
    getCategories,
    getSingleCategory,
    createManyCategories,
    updateCategory,
    deleteCategory,
};
