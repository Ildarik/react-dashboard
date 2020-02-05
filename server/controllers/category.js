import Category from "../models/category";

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

export const remove = (req, res) => {
  Category.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
