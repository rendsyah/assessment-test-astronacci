import { Request, Response, NextFunction } from "express";

import { response } from "../utils/response";

export const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const success = false;
  const status = 404;
  const message = "Not Found";

  response({ res, status, success, message });
};
