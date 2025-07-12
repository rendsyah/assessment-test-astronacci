import { z } from "zod";
import { LoginOAuthSchema, LoginSchema, RegisterSchema } from "../pipes";

export type RegisterDto = z.infer<typeof RegisterSchema>;

export type LoginDto = z.infer<typeof LoginSchema>;

export type LoginOAuthDto = z.infer<typeof LoginOAuthSchema>;
