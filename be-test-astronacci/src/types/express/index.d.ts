import { JwtUser } from "../common";

declare module "express" {
  interface Request {
    user?: JwtUser;
  }
}

export {};
