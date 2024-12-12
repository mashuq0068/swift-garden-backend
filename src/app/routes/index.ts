import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { authRoutes } from "../modules/auth/auth.route";
import { productRoutes } from "../modules/product/product.route";
import { shopRoutes } from "../modules/shop/shop.route";
import { followerRoutes } from "../modules/follower/follower.route";
import { flashSaleRoutes } from "../modules/flashSale/flashSale.route";
import { reviewRoutes } from "../modules/review/review.route";
import { recentProductRoutes } from "../modules/recentProduct/recentProduct.route";
import { couponRoutes } from "../modules/coupon/coupon.route";
const router = express.Router();

const routes = [
  {
    path: "/users",
    routes: userRoutes,
  },
  {
    path: "/auth",
    routes: authRoutes,
  },
  {
    path: "/products",
    routes: productRoutes,
  },
  {
    path: "/shops",
    routes: shopRoutes,
  },
  {
    path: "/followers",
    routes: followerRoutes,
  },
  {
    path: "/flash-sales",
    routes: flashSaleRoutes,
  },
  {
    path: "/reviews",
    routes: reviewRoutes,
  },
  {
    path: "/recent-products",
    routes: recentProductRoutes,
  },
  {
    path: "/coupons",
    routes: couponRoutes,
  },
];
routes.forEach((route) => router.use(route.path, route.routes));
export const allRoutes = router;
