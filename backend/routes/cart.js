const express = require("express");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken");
const router = express.Router();
const Cart = require("../models/Cart");

//create
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart deleted Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
  e;
});

//get user cart
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
