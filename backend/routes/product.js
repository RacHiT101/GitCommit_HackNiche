const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifytoken");
const cryptojs = require("crypto-js");

const router = require("express").Router();

//create product
router.post("/",  async (req, res) => {
    const newProduct = new Product(req.body);
    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);

    }
    catch(err){ 
    res.status(500).json(err);
    }

})
//update the product
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete the product
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;

//get the products
router.get("/find/:id",  async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all products
router.get("/",  async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
