import { Request, Response } from "express";

import { catchException, response } from "../utils";
import { contentService } from "../services";
import { ContentDto } from "../types";

export const contentController = {
  getContent: catchException(async (req: Request, res: Response) => {
    response({
      res,
      status: 200,
      success: true,
      message: "Success",
      data: await contentService.getContent(req.query as ContentDto, req.user!),
    });
  }),
};
