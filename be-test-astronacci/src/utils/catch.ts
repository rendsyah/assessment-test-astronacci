import { RequestHandler } from "express";

export const catchException = (fn: RequestHandler): RequestHandler => {
  return (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };
};
