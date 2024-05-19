import { z } from "zod";

export const userDataSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  birthDate: z.string().min(1),
  phoneNumber: z.string().optional(),
  address: z.string().optional()
});

export type TUserDataSchema = z.infer<typeof userDataSchema>