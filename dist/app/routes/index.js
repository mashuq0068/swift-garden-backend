"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const product_route_1 = require("../modules/product/product.route");
const shop_route_1 = require("../modules/shop/shop.route");
const flashSale_route_1 = require("../modules/flashSale/flashSale.route");
const review_route_1 = require("../modules/review/review.route");
const recentProduct_route_1 = require("../modules/recentProduct/recentProduct.route");
const coupon_route_1 = require("../modules/coupon/coupon.route");
const category_routes_1 = require("../modules/category/category.routes");
const upload_route_1 = require("../modules/upload/upload.route");
const follower_route_1 = require("../modules/follower/follower.route");
const order_route_1 = require("../modules/order/order.route");
const router = express_1.default.Router();
const routes = [
    {
        path: "/users",
        routes: user_route_1.userRoutes,
    },
    {
        path: "/auth",
        routes: auth_route_1.authRoutes,
    },
    {
        path: "/products",
        routes: product_route_1.productRoutes,
    },
    {
        path: "/shops",
        routes: shop_route_1.shopRoutes,
    },
    {
        path: "/followers",
        routes: follower_route_1.followerRoutes,
    },
    {
        path: "/flash-sales",
        routes: flashSale_route_1.flashSaleRoutes,
    },
    {
        path: "/reviews",
        routes: review_route_1.reviewRoutes,
    },
    {
        path: "/recent-products",
        routes: recentProduct_route_1.recentProductRoutes,
    },
    {
        path: "/coupons",
        routes: coupon_route_1.couponRoutes,
    },
    {
        path: "/categories",
        routes: category_routes_1.categoryRoutes,
    },
    {
        path: "/uploads",
        routes: upload_route_1.uploadRoutes,
    },
    {
        path: "/orders",
        routes: order_route_1.orderRoutes,
    },
];
routes.forEach((route) => router.use(route.path, route.routes));
exports.allRoutes = router;
