import { Response } from "express";

type ResponseOptions<T> = {
  res: Response;
  status: number;
  success: boolean;
  message: string;
  data?: T;
};

export const response = <T>({
  res,
  status = 200,
  message = "Success",
  data,
  success = true,
}: ResponseOptions<T>) => {
  return res.status(status).json({
    success,
    message,
    data,
  });
};
