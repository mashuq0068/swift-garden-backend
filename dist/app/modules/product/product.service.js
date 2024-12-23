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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const config_1 = require("../../config");
const fileUploader_1 = require("../../utils/fileUploader");
const queryBuilder_1 = __importDefault(require("../../builder/queryBuilder"));
const createProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const photo = req.file;
    const price = parseFloat(req.body.price); // Convert price from string to float
    const inventory = parseInt(req.body.inventory, 10); // Convert inventory to integer
    if (photo) {
        const uploadToCloudinary = yield fileUploader_1.fileUploader.uploadToCloudinary(photo);
        req.body.photo = uploadToCloudinary === null || uploadToCloudinary === void 0 ? void 0 : uploadToCloudinary.secure_url;
    }
    // Assuming req.body contains shopId and categoryId
    const _a = req.body, { shopId, categoryId } = _a, productData = __rest(_a, ["shopId", "categoryId"]);
    const result = yield config_1.prisma.product.create({
        data: Object.assign(Object.assign({}, productData), { // Spread the remaining product data (name, price, etc.)
            price,
            inventory, shop: {
                connect: { id: shopId }, // Connect the product to the existing shop using shopId
            }, category: {
                connect: { id: categoryId }, // Connect the product to the existing category using categoryId
            } }),
    });
    return result;
});
const getProducts = (queryParams) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("query", queryParams);
    const queryBuilder = new queryBuilder_1.default(queryParams);
    const prismaQuery = queryBuilder
        .addSearch(["name"])
        .addFilters()
        .addSort()
        // .addPagination()
        .build();
    const result = yield config_1.prisma.product.findMany({
        where: prismaQuery.where,
        // orderBy: prismaQuery.orderBy,
        // skip: prismaQuery.skip,
        // take: prismaQuery.take,
        include: {
            category: true,
            shop: true,
        },
    });
    return result;
});
const getSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.product.findUniqueOrThrow({
        where: { id },
        include: {
            category: true,
            shop: true,
            // Review: true,
            // OrderItem: true,
            // FlashSale: true,
            // RecentProduct: true,
        },
    });
    return result;
});
const updateProduct = (id, req) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.product.findUniqueOrThrow({
        where: { id },
    });
    const result = yield config_1.prisma.product.update({
        where: { id },
        data: Object.assign({}, req.body),
    });
    return result;
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.product.findUniqueOrThrow({
        where: { id },
    });
    yield config_1.prisma.product.delete({
        where: { id },
    });
});
exports.productServices = {
    createProduct,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
