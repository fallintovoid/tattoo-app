import z from "zod";

export const SignInFormSchema = z.object({
  username: z
    .string()
    .min(4, "Username too short")
    .max(20, "Username too long"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter"),
});
