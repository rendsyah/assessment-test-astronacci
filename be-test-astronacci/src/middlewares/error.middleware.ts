import { Request, Response, NextFunction } from "express";

import { response } from "../utils/response";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const success = false;
  const status = err.status || 500;
  const message = status < 500 ? err.message : "Internal Server Error";

  console.error(err, "DEBUG");

  response({ res, status, success, message });
};
