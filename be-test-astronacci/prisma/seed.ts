import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  const contents: {
    title: string;
    type: "article" | "video";
    is_public: boolean;
  }[] = [];

  for (let i = 1; i <= 15; i++) {
    contents.push({
      title: `Artikel ${i}`,
      type: "article",
      is_public: true,
    });
  }

  for (let i = 1; i <= 15; i++) {
    contents.push({
      title: `Video ${i}`,
      type: "video",
      is_public: true,
    });
  }

  await prisma.content.createMany({
    data: contents,
  });
};

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
