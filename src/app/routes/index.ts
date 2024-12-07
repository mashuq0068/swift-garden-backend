import express from 'express';
import { userRoutes } from '../modules/user/user.route';
const router = express.Router();

const routes = [
  {
    path: '/users',
    routes: userRoutes,
  },

];
routes.forEach((route) => router.use(route.path, route.routes));
export const allRoutes = router;
