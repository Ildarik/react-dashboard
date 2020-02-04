import Product from "../models/product.model";

export const create = (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    sell: req.body.sell
  });

  product.save(err => {
    if (err) return next(err);
    res.send("Product Created successfully");
  });
};

export const read = (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) return next(err);
    res.send(product);
  });
};

export const edit = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
    if (err) return next(err);
    res.send("Product udpated.");
  });
};

export const remove = (req, res) => {
  Product.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
