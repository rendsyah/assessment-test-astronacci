import { Request, Response } from "express";

import { catchException, response } from "../utils";
import { appService } from "../services";

export const appController = {
  getApp: catchException(async (req: Request, res: Response) => {
    response({
      res,
      status: 200,
      success: true,
      message: "Success",
      data: await appService.getApp(),
    });
  }),
};
