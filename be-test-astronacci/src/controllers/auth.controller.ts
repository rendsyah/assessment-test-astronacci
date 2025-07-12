import { Request, Response } from "express";

import { catchException, response } from "../utils";
import { authService } from "../services";

export const authController = {
  register: catchException(async (req: Request, res: Response) => {
    response({
      res,
      status: 200,
      success: true,
      message: "Successfully Registered",
      data: await authService.register(req.body),
    });
  }),
  login: catchException(async (req: Request, res: Response) => {
    response({
      res,
      status: 200,
      success: true,
      message: "Successfully Logged In",
      data: await authService.login(req.body),
    });
  }),
  loginWithGoogle: catchException(async (req: Request, res: Response) => {
    response({
      res,
      status: 200,
      success: true,
      message: "Successfully Logged In",
      data: await authService.loginWithGoogle(req.body),
    });
  }),
  loginWithFacebook: catchException(async (req: Request, res: Response) => {
    response({
      res,
      status: 200,
      success: true,
      message: "Successfully Logged In",
      data: await authService.loginWithFacebook(req.body),
    });
  }),
};
