import { IUser } from "@/core/auth/models/user.interface";
import { ILoginResponse } from "@/core/auth/models/login-response.interface";

export class AuthService {
  public static async login(username: string, password: string): Promise<ILoginResponse> {
    return new Promise<ILoginResponse>((resolve, reject) => {})
  }

  public static async register(username: string, password: string): Promise<ILoginResponse> {
    return new Promise<ILoginResponse>((resolve, reject) => {})
  }

  public static async refresh(token: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {})
  }
}