import express from "express";

import { authControllers } from "./auth.controller";
const router = express.Router();
router.post("/signup", authControllers.signUpUser);
router.post("/login", authControllers.loginUser);
export const authRoutes = router;
