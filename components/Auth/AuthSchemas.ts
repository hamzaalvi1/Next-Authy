import * as z from "zod";

export const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required field" }),
    email: z.string().email({ message: "Email is required field" }),
    password: z
      .string()
      .min(6, { message: "Password is greater than 5 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "Passwords does not match",
    path: ["confirmPassword"],
  });
