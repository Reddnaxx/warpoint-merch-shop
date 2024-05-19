import { IUser } from "@/core/auth/models/user.interface";

export interface IRegisterDto {
  email: string;
  password: string;
  fullName: string;
  birthday?: string;
  address?: string;
  phoneNumber?: string;
  role: string;
}
