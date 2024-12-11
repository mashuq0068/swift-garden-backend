import { Router } from "express";
import { userControllers } from "./user.controller";

const router = Router();

router.get("/users", userControllers.getAllUsers);

router.get("/users/:id", userControllers.getSingleUser);

router.delete("/users/:id", userControllers.deleteUser);

export const userRoutes = router;
