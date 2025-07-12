import { z } from "zod";

export const ContentSchema = z.object({
  type: z.enum(["article", "video"]),
});
