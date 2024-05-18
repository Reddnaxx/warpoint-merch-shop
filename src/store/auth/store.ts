import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { IItem } from "@/core/catalog/models/item.interface";
import { IUser } from "@/core/auth/models/user.interface";
import { AuthService } from "@/core/auth/services/auth.service";
import { nbNO } from "@mui/material/locale";

interface AuthState {
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuth: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  refresh: () => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        accessToken: null,
        refreshToken: null,
        isAuth: false,
        login: async (email, password) => {
          const res = await AuthService.login(email, password);

          if (!res) return;

          set(state => ({
            user: res.user,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
            isAuth: true,
          }));
        },
        register: async (email, password) => {
          await AuthService.register(email, password);
        },
        refresh: async () => {
          const token = get().refreshToken;
          if (!token) return;

          const res = await AuthService.refresh(token);

          if (!res) return;

          set(state => ({ accessToken: res, isAuth: true }));
        },
        logout: () => {
          set(() => ({
            user: null,
            accessToken: null,
            refreshToken: null,
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
