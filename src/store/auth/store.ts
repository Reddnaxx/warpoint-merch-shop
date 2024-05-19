import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { IItem } from "@/core/catalog/models/item.interface";
import { IUser } from "@/core/auth/models/user.interface";
import { AuthService } from "@/core/auth/services/auth.service";
import { nbNO } from "@mui/material/locale";
import { IRegisterDto } from "@/core/auth/models/register-dto.interface";

interface AuthState {
  user: IUser | null;
  accessToken: string | null;
  isAuth: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: IRegisterDto) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        accessToken: null,
        isAuth: false,
        login: async (email, password) => {
          const res = await AuthService.login(email, password);

          if (!res) return;

          set(state => ({
            user: res.user,
            accessToken: res.accessToken,
            isAuth: true,
          }));
        },
        register: async (data: IRegisterDto) => {
          await AuthService.register(data);
        },
        logout: () => {
          set(() => ({
            user: null,
            accessToken: null,
            isAuth: false,
          }));
        },
      }),
      {
        name: "auth",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);
