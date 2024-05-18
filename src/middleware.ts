import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { useAuthStore } from "@/store/auth/store";
import { authRoutes, routes } from "@/core/auth/constants/authRoutes";

export function middleware(request: NextRequest) {
  const { user } = useAuthStore.getState();

  if (
    !user &&
    !authRoutes.guest.includes(request.nextUrl.pathname) &&
    routes.includes(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
