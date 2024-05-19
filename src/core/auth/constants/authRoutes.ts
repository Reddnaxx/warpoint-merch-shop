const commonRoutes = ["/", "/cart", "/catalog", "/about"];

export const authRoutes = {
  guest: [...commonRoutes, "/login", "/register"],
  user: [...commonRoutes],
  admin: [...commonRoutes, "/moderation"],
};

export const routes = [
  ...authRoutes.user,
  ...authRoutes.admin,
  ...authRoutes.guest,
];
