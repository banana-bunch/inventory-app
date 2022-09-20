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

// GET one item
router.get("/:id", async (req,res) => {
  try {
    const itemId = await Item.findByPk(req.params.id)
    res.send(itemId)
  } catch (error) {
    console.log("error", error)
  }
});
// DELETE an item

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
