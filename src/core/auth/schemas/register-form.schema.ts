import { z } from "zod";

export const registerFormSchema = z
  .object({
    email: z
      .string()
      .email("Неверный формат почты")
      .min(1, "Необходимо ввести почту"),
    fullName: z.string().min(1, "Необходимо ввести имя"),
    birthday: z.string().optional(),
    phoneNumber: z.string().optional(),
    address: z.string().optional(),
    password: z.string().min(1, "Необходимо ввести пароль"),
    confirmPassword: z.string().min(1, "Необходимо повторить пароль"),
  })
  .refine(values => values.confirmPassword === values.password, {
    message: "Пароли должны совпадать",
    path: ["confirmPassword"],
  });

export type TRegisterFormSchema = z.infer<typeof registerFormSchema>;
