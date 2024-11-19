const blockRoutes = (req, res, next) => {
  const blockedRoutes = ["/microfrontend-routing", "/.well-known/:path*"];

  if (blockedRoutes.some((route) => req.path.startsWith(route))) {
    return res.status(404).send("Not Found");
  }

  next();
};

export default blockRoutes;
