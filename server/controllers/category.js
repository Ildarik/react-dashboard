import Category from "../models/category";
import Product from "../models/product";

export const create = (req, res, next) => {
  const product = new Category({
    name: req.body.category
  });

  product.save(err => {
    if (err) return next(err);
    res.send("Category created successfully");
  });
};

export const read = (req, res) => {
  Category.find({}, (err, product) => {
    if (err) return next(err);
    res.send(product);
  });
};

export const remove = async (req, res) => {
  await Product.updateMany(
    { category: req.body.category },
    { category: null },
    err => {
      if (err) return next(err);
      console.log("Products category cleared successfully!");
    }
  );

  Category.findByIdAndRemove(req.body.category, err => {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
