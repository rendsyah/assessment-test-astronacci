import { Router } from "express";

import { contentController } from "../controllers";
import { authMiddleware } from "../middlewares";

const router = Router();

router.get("/", authMiddleware, contentController.getContent);

export default router;
