const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const Product = require("../models/product");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "you just accessed products page",
  });
});

router.post("/", (req, res, next) => {
  const name = req.body.name
  const price = req.body.price
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  console.log(name, price)
  console.log('saved product')
  product
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err, 'failed to save a project'));

  res.status(200).json({
    message: "you sent a request to products page",
    createdProduct: product,
  });
});

router.post("/:productID", (req, res, next) => {
  const id = req.params.productID;
  if (id === "specials") {
    res.status(200).json({
      message: "you have found the specials page",
      id: id,
    });
  } else {
    res.status(200).json({
      message: `you have not found the specials page, you are in ${id} page`,
    });
  }
});

router.patch("/:productID", (req, res, next) => {
  const id = req.params.productID;
  res.status(200).json({
    message: `updated ${id} product`,
  });
});

router.delete("/:productID", (req, res, next) => {
  const id = req.params.productID;
  res.status(200).json({
    message: `deleted ${id} product`,
  });
});

module.exports = router;
