const blockWellKnownRoute = (req, res, next) => {
  if (req.path.startsWith("/.well-known/vercel/microfrontend-routing")) {
    return res.status(404).send("Not Found");
  }
  next();
};

export default blockWellKnownRoute;
