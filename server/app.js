import express from "express";
import db from "./db";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/products", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "products retrieved successfully",
    products: db.products
  });
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
