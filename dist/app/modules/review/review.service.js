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
exports.reviewServices = void 0;
const config_1 = require("../../config");
const createReview = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.review.create({
        data: payload,
    });
    return result;
});
const getReviews = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.review.findMany({
        include: {
            user: true,
            product: true,
        },
    });
    return result;
});
const getSingleReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.review.findUniqueOrThrow({
        where: { id },
        include: {
            user: true,
            product: true,
        },
    });
    return result;
});
const updateReview = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.review.findUniqueOrThrow({
        where: { id },
    });
    const result = yield config_1.prisma.review.update({
        where: { id },
        data: payload,
    });
    return result;
});
const deleteReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.review.findUniqueOrThrow({
        where: { id },
    });
    yield config_1.prisma.review.delete({
        where: { id },
    });
});
exports.reviewServices = {
    createReview,
    getReviews,
    getSingleReview,
    updateReview,
    deleteReview,
};
