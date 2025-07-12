import bcrypt from "bcrypt";

import { SALT_ROUND } from "../config";

export const hash = async (request: string) => {
  return bcrypt.hash(request, SALT_ROUND);
};

export const compare = async (request: string, hash: string) => {
  return bcrypt.compare(request, hash);
};
