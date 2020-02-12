import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import session from "express-session";
import path from "path";
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
    resave: true,
    saveUninitialized: true
  })
);

app.use("/api/products", products);
app.use("/api/categories", categories);
app.use("/api/users", users);

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
