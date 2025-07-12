import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";
import { response } from "../utils";

export const validationMiddleware =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errors = err.issues.map((e) => ({
          path: e.path.join("."),
          message: e.message,
        }));

        console.error(err, "DEBUG");

        return response({
          res,
          status: 400,
          success: false,
          message: "Validation error",
          data: errors,
        });
      }

      next(err);
    }
  };
