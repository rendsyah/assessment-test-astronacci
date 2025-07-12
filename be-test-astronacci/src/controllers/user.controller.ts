import { Request, Response } from "express";

import { catchException, response } from "../utils";
import { userService } from "../services";

export const userController = {
  getUser: catchException(async (req: Request, res: Response) => {
    response({
      res,
      status: 200,
      success: true,
      message: "Success",
      data: await userService.getUser(req.user!),
    });
  }),
};
