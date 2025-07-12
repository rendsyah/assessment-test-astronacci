import { Router } from "express";

import appRoutes from "./app.route";
import authRoutes from "./auth.route";
import contentRoutes from "./content.route";
import userRoutes from "./user.route";

const router = Router();

router.use("/", appRoutes);
router.use("/auth", authRoutes);
router.use("/content", contentRoutes);
router.use("/user", userRoutes);

export default router;
