const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req,res) => {
  try {
    const itemId = await Item.findByPk(req.params.id)
    res.send(itemId)
  } catch (error) {
    console.log("error", error)
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Item.destroy({
      where: {
        id: req.params.id
      }
    });
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    console.log("cannot be deleted", error)
  }
})
 

module.exports = router;


