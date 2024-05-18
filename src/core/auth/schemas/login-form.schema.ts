import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .email("Неверный формат почты")
    .min(1, "Необходимо ввести почту"),
  password: z.string().min(1, "Необходимо ввести пароль"),
});

export type TLoginFormSchema = z.infer<typeof loginFormSchema>;
