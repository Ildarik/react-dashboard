import Product from "../models/product.model";

export const create = (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    sell: req.body.sell
  });

  product.save(err => {
    if (err) {
      return next(err);
    }
    res.send("Product Created successfully");
  });
};
