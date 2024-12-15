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
exports.authServices = void 0;
const config_1 = require("../../config");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_2 = __importDefault(require("../../config"));
const signUp = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Hash the password before saving to the database
    const hashedPassword = yield bcryptjs_1.default.hash(payload.password, 10);
    const result = yield config_1.prisma.user.create({
        data: Object.assign(Object.assign({}, payload), { password: hashedPassword }),
    });
    return result;
});
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const email = payload === null || payload === void 0 ? void 0 : payload.email;
    const password = payload === null || payload === void 0 ? void 0 : payload.password;
    const user = yield config_1.prisma.user.findUniqueOrThrow({
        where: { email },
    });
    // Validate the password
    const isPasswordMatched = yield bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordMatched) {
        throw new Error("Invalid email or password");
    }
    // Generate a JWT token
    const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, role: user.role }, config_2.default.jwt_token_secret, { expiresIn: "10h" });
    return { user, token };
});
exports.authServices = {
    signUp,
    login,
};
