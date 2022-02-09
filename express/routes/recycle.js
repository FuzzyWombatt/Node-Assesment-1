const express = require("express");
const db = require('../db/db');

const {check: check, validationResult: validationResult} = require("express-validator");
const uuid = require("uuid");

const recycleRouter = express.Router();

//@route    GET /recycledIntake
//@desc     gets all items
//@access   public
recycleRouter.get("/", (req, res) => {
  try {
    res.json({ recycleItems: db });
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

//@route    POST /recycleIntake
//@desc     Add new recyle item
//@access   public
recycleRouter.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("recyclable", "recyclable must be a boolean").isBoolean(),
    check("quantity", "quanity must be a numeric").isNumeric(),
    check("quantity", "quanity must have a number").not().isEmpty(),
    check("price", "price per unit must be a numeric").isNumeric(),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, recyclable, quantity, price } = req.body;

    try {
      const item = {
        name: name,
        description: description,
        recyclable: recyclable,
        quantity: quantity,
        price: price,
        id: uuid.v4(),
      };
      //mimics mongoose database await-save
      db.push(item);
      res.json(item);
    } catch (err) {
      console.error(err);
      res.status(500).send("server error");
    }
  }
);

//@route    PUT /recycleIntake
//@desc     Update and modify exisiting item
//@access   public
recycleRouter.put(
  "/:id",
  [
    check("recyclable", "recyclable must be a boolean").optional().isBoolean(),
    check("quantity", "quanity must be a numeric").optional().isNumeric(),
    check("price", "price per unit must be a numeric").optional().isNumeric(),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, recyclable, quantity, price } = req.body;
    const { id } = req.params;

    try {
      let item = db.findIndex((ele) => {
        return ele.id === id;
      });

      if (item === -1)
        return res.status(404).json({ msg: "Contact not found" });

      if (name) db[item].name = name;
      if (description) db[item].description = description;
      if (recyclable || !recyclable) db[item].recyclable = recyclable;
      if (quantity) db[item].quantity = quantity;
      if (price) db[item].price = price;

      res.json({ item: db[item] });
    } catch (err) {
      console.error(err);
      res.status(500).send("server error");
    }
  }
);

//@route    DELETE /recycleIntake
//@desc     delete recyle item
//@access   public
recycleRouter.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;

    const item = db.findIndex((ele) => {
      return ele.id === id;
    });

    if (item === -1) return res.status(404).json({ msg: "Contact not found" });

    //doesn't really delete item. merely makes array sparse and turns that index into null.
    delete db[item];

    res.json({ msg: "item deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

module.exports = recycleRouter;
