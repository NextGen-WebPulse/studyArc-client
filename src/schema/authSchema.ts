import { z } from "zod";

export const RegistrationSchema = z.object({
  name: z.string().min(3, "Name must be 3 character long"),
  email: z.string().email("Invalid Email"),
  password: z.string().min(6, "Password must be at least 6 character long"),
  phone: z.string().min(10, "Phone must be at least 10 character long"),
  // .regex(/^\+\d+$/, "Invalid Phone number"), // regex: starts with + and characters are numbers (0-9)
  userName: z.string().min(3),
  gender: z.preprocess(
    (val) => (val === "" ? undefined : val), // Convert empty string to undefined
    z.enum(["Male", "Female"], {
      required_error: "Must select gender",
    }),
  ),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 character long"),
});
