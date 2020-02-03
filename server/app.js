import express from "express";
import db from "./db";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "products retrieved successfully",
    products: db.products
  });
});

app.post("/api/products", (req, res) => {
  db.products.push(req.body);
  res.status(200).send("Success!");
});

app.get("/api/categories", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "categories retrieved successfully",
    categories: db.categories
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
