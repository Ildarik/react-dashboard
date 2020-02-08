import bcrypt from "bcrypt";
import User from "../models/user";

const saltRounds = 10;

export const register = async (req, res, next) => {
  const { username, password } = req.body;

  const hash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    hash
  });

  user.save(err => {
    if (err) return next(err);
    res.send("User created successfully");
  });
};

export const login = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username }, async (err, user) => {
    if (err) return next(err);

    const isPasswordMatchHash = await bcrypt.compare(password, user.hash);

    if (isPasswordMatchHash) {
      res.send(user);
    } else {
      res.status(400).send({ error: "Wrong password" });
    }
  });
};
