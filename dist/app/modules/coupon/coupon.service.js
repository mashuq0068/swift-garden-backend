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
exports.couponServices = void 0;
const config_1 = require("../../config");
const createCoupon = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.coupon.create({
        data: payload,
    });
    return result;
});
const getCoupons = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.coupon.findMany();
    return result;
});
const getSingleCoupon = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.coupon.findUniqueOrThrow({
        where: { id },
    });
    return result;
});
const updateCoupon = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.coupon.findUniqueOrThrow({
        where: { id },
    });
    const result = yield config_1.prisma.coupon.update({
        where: { id },
        data: payload,
    });
    return result;
});
const deleteCoupon = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.coupon.findUniqueOrThrow({
        where: { id },
    });
    yield config_1.prisma.coupon.delete({
        where: { id },
    });
});
exports.couponServices = {
    createCoupon,
    getCoupons,
    getSingleCoupon,
    updateCoupon,
    deleteCoupon,
};
