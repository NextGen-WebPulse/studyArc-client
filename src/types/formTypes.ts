import { RegistrationSchema } from "@/schema/authSchema";
import { z } from "zod";

export type TRegisterSchema = z.infer<typeof RegistrationSchema>;
