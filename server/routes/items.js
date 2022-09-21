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
router.post("/", async (req, res, next) => {
  try {
    const item = await Item.create(req.body);
    res.send(item)
  } catch (err) {
    console.log("add item error", err)
  }
});

// DELETE /items/:id - on single view, when delete button is clicked, entire item is deleted from item list
router.delete("/:id", async (req, res) => {
  try {
    await Item.destroy({
      where: {
        id: req.params.id
      }
    })

    const items = await Item.findAll();
    res.send(items)
  } catch (err) {
    console.log("delete error", err)
  }
})

// PUT /items/:id - on single view, when update button is clicked, Update component is rendered and when update button is clicked, item is updated via its unique id
router.put("/:id", async (req, res) => {
  try {
    await Item.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true,
    });
    const items = await Item.findAll();
    res.send(items)
  } catch (err) {
    console.log("update route error: ", err)
  }
});

module.exports = router;
