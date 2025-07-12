import { NextFunction, Request, Response } from "express";

import { response, verifyToken } from "../utils";
import { JwtUser } from "../types";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const headers = req.headers.authorization;
    const [scheme, token] = headers?.split(" ") || [];

    if (!token || scheme !== "Bearer") {
      return response({
        res,
        status: 401,
        success: false,
        message: "Unauthorized",
      });
    }

    const verify = verifyToken(token);

    if (!verify) {
      return response({
        res,
        status: 401,
        success: false,
        message: "Unauthorized",
      });
    }

    req.user = verify as JwtUser;

    next();
  } catch (error) {
    return response({
      res,
      status: 401,
      success: false,
      message: "Unauthorized",
    });
  }
};
