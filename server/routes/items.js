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
