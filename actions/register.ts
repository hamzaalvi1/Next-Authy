"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/components/Auth/AuthSchemas";

export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }
  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const isEmailExist = await db.user.findUnique({ where: { email } });
  if (isEmailExist) {
    return { error: "Email already exists" };
  }

  const newUser = await db.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  return { success: "user created successfully", user: newUser };
};
