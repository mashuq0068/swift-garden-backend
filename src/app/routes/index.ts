import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { authRoutes } from "../modules/auth/auth.route";
import { QARoutes } from "../modules/QA/QA.route";

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
    path: "/ai/QA",
    routes: QARoutes,
  },
];
routes.forEach((route) => router.use(route.path, route.routes));
export const allRoutes = router;
