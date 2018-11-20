const Category = require("../models/Category");

exports.listAllCategorys = (req, res) => {
  Category.find({}, (err, category) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(category);
  });
};

exports.createNewCategory = (req, res) => {
  let newCategory = new Category(req.body);
  newCategory.save((err, category) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(category);
  });
};

exports.readCategory = (req, res) => {
  Category.findById(req.params.categoryid, (err, category) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(category);
  });
};

exports.updateCategory = (req, res) => {
  Category.findOneAndUpdate(
    { _id: req.params.categoryid },
    req.body,
    { new: true },
    (err, category) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(category);
    }
  );
};

exports.deleteCategory = (req, body) => {
  Category.remove({ _id: req.params.categoryid }, (err, category) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Category successfully deleted" });
  });
};
