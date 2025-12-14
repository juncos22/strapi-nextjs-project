"use server";

import { registerUserService } from "@/lib/strapi";
import { AuthFormSchema, type FormState } from "@/validations/auth";
import z from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const cookieConfig = {
  maxAge: 60 * 60 * 24 * 7,
  httpOnly: true,
  path: "/",
  domain: process.env.HOST ?? "localhost",
  secure: process.env.NODE_ENV === "production",
};

export async function registerUserAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  console.log("Hello from RegisterUserAction:", prevState);

  const fields = {
    username: formData.get("username") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const validatedFields = AuthFormSchema.safeParse(fields);
  if (!validatedFields.success) {
    const flattenedErrors = z.flattenError(validatedFields.error);
    console.log(flattenedErrors.fieldErrors);
    return {
      success: false,
      zodErrors: flattenedErrors,
      data: fields,
    };
  }

  const response = await registerUserService(validatedFields.data);
  if (!response || response.error) {
    return {
      success: false,
      message: "Registration Error",
      strapiErrors: response.error,
      data: fields,
    };
  }
  const cookieStore = await cookies();
  cookieStore.set("auth-token", response.jwt, cookieConfig);
  redirect("/dashboard");
}
