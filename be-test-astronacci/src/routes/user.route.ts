import { Router } from "express";

import { userController } from "../controllers";
import { authMiddleware } from "../middlewares";

const router = Router();

router.get("/", authMiddleware, userController.getUser);

export default router;
