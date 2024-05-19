const commonRoutes = ["/", "/cart", "/catalog", "/about", "/game"];

export const authRoutes = {
  guest: [...commonRoutes, "/login", "/register"],
  user: [...commonRoutes, "/profile", "/game"],
  admin: [...commonRoutes, "/profile", "/moderation", "/game"],
};

export const routes = [
  ...authRoutes.user,
  ...authRoutes.admin,
  ...authRoutes.guest,
];
