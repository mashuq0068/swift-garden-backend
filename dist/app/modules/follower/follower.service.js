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
exports.followerServices = void 0;
const config_1 = require("../../config");
const createFollower = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.follower.create({
        data: payload,
    });
    return result;
});
const getFollowers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.follower.findMany({
        include: {
            user: true,
            shop: true,
        },
    });
    return result;
});
const getSingleFollower = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.follower.findUniqueOrThrow({
        where: { id },
        include: {
            user: true,
            shop: true,
        },
    });
    return result;
});
const updateFollower = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.follower.findUniqueOrThrow({
        where: { id },
    });
    const result = yield config_1.prisma.follower.update({
        where: { id },
        data: payload,
    });
    return result;
});
const deleteFollower = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.follower.findUniqueOrThrow({
        where: { id },
    });
    yield config_1.prisma.follower.delete({
        where: { id },
    });
});
exports.followerServices = {
    createFollower,
    getFollowers,
    getSingleFollower,
    updateFollower,
    deleteFollower,
};
