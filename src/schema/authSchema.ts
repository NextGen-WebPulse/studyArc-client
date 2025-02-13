import { z } from "zod";

export const RegistrationSchema = z.object({
  name: z.string().min(3, "Name must be 3 character long"),
  email: z.string().email("Invalid Email"),
  password: z.string().min(6),
  phone: z.string().min(10),
  // .regex(/^\+\d+$/, "Invalid Phone number"), // regex: starts with + and characters are numbers (0-9)
  userName: z.string().min(3),
  gender: z.preprocess(
    (val) => (val === "" ? undefined : val), // Convert empty string to undefined
    z.enum(["Male", "Female"], {
      required_error: "Must select gender",
    }),
  ),
});
