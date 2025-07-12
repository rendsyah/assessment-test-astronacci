import { z } from "zod";
import { ContentSchema } from "../pipes";

export type ContentDto = z.infer<typeof ContentSchema>;
