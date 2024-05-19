import { ILoginResponse } from "@/core/auth/models/login-response.interface";
import { IRegisterDto } from "@/core/auth/models/register-dto.interface";
import axios from "@/lib/axios";

export class AuthService {
  public static async login(
    email: string,
    password: string,
  ): Promise<ILoginResponse> {
    return await axios
      .post<ILoginResponse>("/user/token", {
        email,
        password,
      })
      .then(res => res.data);
  }

  public static async register(data: IRegisterDto): Promise<void> {
    return await axios.post("/user/register", data).then(res => res.data);
  }
}
