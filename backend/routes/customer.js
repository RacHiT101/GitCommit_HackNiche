const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

// Create a new customer
router.post("/", async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.status(201).send(customer);
});

// Get all customers
router.get("/", async (req, res) => {
  const customers = await Customer.find({});
  res.send(customers);
});

// Get a single customer by id
router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  res.send(customer);
});

// Update a customer by id
router.put("/:id", async (req, res) => {
  const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(customer);
});

// Delete a customer by id
router.delete("/:id", async (req, res) => {
  const customer = await Customer.findByIdAndDelete(req.params.id);
  res.send(customer);
});

module.exports = router;
