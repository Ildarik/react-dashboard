import User from "../models/user";

export const register = (req, res, next) => {
  const { username, password } = req.body;
  const user = new User({
    username,
    password
  });

  user.save(err => {
    if (err) return next(err);
    res.send("User created successfully");
  });
};

export const login = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username, password }, (err, user) => {
    if (err) return next(err);
    res.send(user);
  });
};
