import { PrismaClient } from "@prisma/client";

import { ContentDto, JwtUser } from "../types";

const prisma = new PrismaClient();

const membershipLimit: Record<
  JwtUser["membership"],
  { article: number; video: number }
> = {
  A: { article: 3, video: 3 },
  B: { article: 10, video: 10 },
  C: { article: Infinity, video: Infinity },
};

export const contentService = {
  getContent: async (dto: ContentDto, user: JwtUser) => {
    const limit = membershipLimit[user.membership][dto.type];

    const contents = await prisma.content.findMany({
      where: {
        type: dto.type,
      },
      orderBy: {
        created_at: "desc",
      },
      take: limit === Infinity ? undefined : limit,
    });

    return contents;
  },
};
