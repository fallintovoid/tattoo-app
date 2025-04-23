import z from "zod";

export const FormSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    username: z
      .string()
      .min(4, "Username too short")
      .max(20, "Username too long"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter"),
    password_repeat: z.string(),
  })
  .refine((data) => data.password === data.password_repeat, {
    message: "Passwords don't match",
    path: ["password_repeat"],
  });
