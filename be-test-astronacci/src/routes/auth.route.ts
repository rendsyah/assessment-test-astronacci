import { Router } from "express";

import { validationMiddleware } from "../middlewares";
import { LoginOAuthSchema, LoginSchema, RegisterSchema } from "../pipes";

import { authController } from "../controllers";

const router = Router();

router.post(
  "/register",
  validationMiddleware(RegisterSchema),
  authController.register
);

router.post("/login", validationMiddleware(LoginSchema), authController.login);

router.post(
  "/login/google",
  validationMiddleware(LoginOAuthSchema),
  authController.loginWithGoogle
);

router.post(
  "/login/facebook",
  validationMiddleware(LoginOAuthSchema),
  authController.loginWithFacebook
);

export default router;
