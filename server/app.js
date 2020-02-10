import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import session from "express-session";
import products from "./routes/product";
import categories from "./routes/category";
import users from "./routes/user";

const mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const { connection } = mongoose;

connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
);

const checkAuth = (req, res, next) => {
  console.log(`req.session.username: ${req.session.username}`);
  console.log(`req.session: ${JSON.stringify(req.session)}`);
  if (
    req.url === "/api/categories" &&
    (!req.session || !req.session.username)
  ) {
    res.status(403).send("unauthorised");
    return;
  }

  next();
};

app.use(checkAuth);

app.use("/api/products", products);
app.use("/api/categories", categories);
app.use("/api/users", users);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
