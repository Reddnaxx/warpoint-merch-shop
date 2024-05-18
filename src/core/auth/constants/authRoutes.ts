const commonRoutes = [
  "/",
  "/cart",
  "/catalog",
  "/about",
  "/login",
  "/register",
];

export const authRoutes = {
  guest: commonRoutes,
  user: [...commonRoutes, "/profile"],
  admin: [...commonRoutes, "/profile", "/moderation"],
};

export const routes = [...authRoutes.user, ...authRoutes.admin];
