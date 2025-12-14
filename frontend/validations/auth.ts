import z from "zod";

export const AuthFormSchema = z.object({
  username: z.string().min(3, {
    message: "El nombre de usuario debe poseer al menos 3 caracteres",
  }),
  email: z
    .email({
      error: "El email posee un formato incorrecto",
    })
    .min(10, "El email debe tener al menos 10 caracteres"),
  password: z
    .string()
    .min(5, "La contraseña debe tener al menos 5 caracteres")
    .max(13, "La contraseña no puede tener mas de 13 caracteres"),
});

export type AuthFormValues = z.infer<typeof AuthFormSchema>;
export type FormState = {
  success?: boolean;
  message?: string;
  zodErrors?: z.ZodFlattenedError<AuthFormValues>;
  strapiErrors?: {
    message: string;
  };
  data?: {
    username?: string;
    email?: string;
    password?: string;
  };
};
