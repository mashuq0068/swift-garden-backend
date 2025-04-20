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
exports.userServices = void 0;
const config_1 = require("../../config");
const getUsers = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { role } = query;
    const users = yield config_1.prisma.user.findMany({
        where: role ? { role } : {},
        include: {
            Shop: true,
        },
    });
    return users;
});
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield config_1.prisma.user.findUniqueOrThrow({
        where: { id },
        include: {
            Follower: true,
            Review: true,
            Order: true,
            Shop: true,
        },
    });
    return user;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.user.findUniqueOrThrow({
        where: { id },
    });
    yield config_1.prisma.user.delete({
        where: { id },
    });
    return { message: "User deleted successfully" };
});
exports.userServices = {
    getUsers,
    getUserById,
    deleteUser,
};
