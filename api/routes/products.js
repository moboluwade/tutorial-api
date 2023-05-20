const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const Product = require("../models/product");

router.get("/", (req, res, next) => {
  Product.find()
  .limit(10)
  .exec()
  .then(docs =>{
    if(docs.length!==0){
      res.status(200).json(docs)
    } else{
      res.status(404).json({
        message: "No products found"
      })
    }
  })
  .catch(err=>{
    res.status(500).json({error: err})
  })
});

router.get("/:productID", (req, res, next) => {
  const id = req.params.productID;
  Product.findById(id, "name price")
    .exec()
    .then(doc=>{
        console.log(doc)
        if(doc){
          res.status(200).json(doc)
        } else{
          res.status(404).json({
            message: "No valid document found in Products database"
          })
        }
    })
    .catch(err=>{
      console.log(err)
      res.status(500).json({error: err})
    })
});

router.post("/", (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  console.log(name, price);
  console.log("saved product");
  product
  .save()
    .then((result) => {
      console.log(result)
      res.status(200).json({
        message: "you sent a request to products page",
        createdProduct: product,
      });
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        message: "there was an error while saving product",
        error: err
      })
    })
});


router.patch("/:productID", (req, res, next) => {
  const id = req.params.productID;
  res.status(200).json({
    message: `updated ${id} product`,
  });
});

router.delete("/:productID", (req, res, next) => {
  const id = req.params.productID;
  Product.deleteMany({_id: id})
    .exec()
    .then(result=>{
      if(result.deletedCount===1){
        res.status(200).json({message:`Successfully deleted ${result.deletedCount} product.`})
      } else if(result.deletedCount!==0){
        //specific for cases where ID(which is unique) is not used as filter.
        res.status(200).json({message: `Successfully deleted ${result.deletedCount} products.`})
      } else{
        res.status(500).json({message: "Cannot delete document that does not exist."})
      }
    })
    .catch(err=>{
      res.status(500).json({
        error: err
      })
    })
});

module.exports = router;
