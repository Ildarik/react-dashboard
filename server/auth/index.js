export const checkAuth = (req, res, next) => {
  console.log(req.session.username);

  if (!req.session || !req.session.username) {
    return res.status(403).send({ error: "Unauthorised access" });
  }

  next();
};
