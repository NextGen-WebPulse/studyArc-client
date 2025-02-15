import { LoginSchema, RegistrationSchema } from "@/schema/authSchema";
import { z } from "zod";

export type TRegisterSchema = z.infer<typeof RegistrationSchema>;
export type TLoginSchema = z.infer<typeof LoginSchema>;
