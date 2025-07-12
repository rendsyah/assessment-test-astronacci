import { Router } from "express";

import { appController } from "../controllers";

const router = Router();

router.get("/app", appController.getApp);

export default router;
