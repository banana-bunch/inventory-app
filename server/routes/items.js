const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /items (api/items)
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET /items/:id - when a title is clicked, another component will render showing a single view page of said item, with item details - component will render via the item's id
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    res.send(item);
  } catch (err) {
    console.log("Oh my an error", err)
  }
});

// POST /items - when form is submitted, item is created and added to list

module.exports = router;