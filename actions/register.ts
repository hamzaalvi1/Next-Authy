import * as z from "zod";
import bcrypt from "bcrypt";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/components/Auth/AuthSchemas";

export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }
  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword, "password");
};
