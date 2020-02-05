import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import products from "./routes/product";
import categories from "./routes/category";

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

app.use("/api/products", products);
app.use("/api/categories", categories);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
