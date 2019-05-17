const express = require("express");
const router = express.Router();

const itemController = require("../../controllers/handleItem");

// Get all items
router.get("/", itemController.getAllItems);

// Get a certain item
router.get("/:id", itemController.getCertainItem);

// Post a new item
router.post("/", itemController.postNewItem);

// Update an item
router.post("/:id", itemController.updateItem);

// Delete an item
router.delete("/:id", itemController.deleteItem);

module.exports = router;
