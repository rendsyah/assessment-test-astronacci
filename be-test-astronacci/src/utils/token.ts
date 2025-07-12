import jwt from "jsonwebtoken";

import { API_CONFIG } from "../config";
import { JwtUser } from "../types";

export const generateToken = (request: JwtUser) => {
  return jwt.sign(request, API_CONFIG.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const verifyToken = (request: string) => {
  return jwt.verify(request, API_CONFIG.JWT_SECRET);
};
