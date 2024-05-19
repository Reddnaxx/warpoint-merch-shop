import { IUser } from "@/core/auth/models/user.interface";

export interface ILoginResponse {
  user: IUser,
  accessToken: string,
}
