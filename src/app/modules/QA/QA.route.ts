import { Router } from "express";
import { QAControllers } from "./QA.controller";

const router = Router();

router.post("/generate-mcq", QAControllers.createMCQFromAI);

export const QARoutes = router;
