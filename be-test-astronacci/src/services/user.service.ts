import { PrismaClient } from "@prisma/client";

import { JwtUser } from "../types";
import { ErrorException } from "../utils";

const prisma = new PrismaClient();

export const userService = {
  getUser: async (user: JwtUser) => {
    const getUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!getUser) {
      throw new ErrorException("User not found", 404);
    }

    return {
      id: getUser.id,
      name: getUser.name,
      email: getUser.email,
      membership: getUser.membership,
    };
  },
};
