const Item = require("../models/schema.js");

//Get all items
exports.getAllItems = (req, res) => {
  Item.find()
    .sort({ date: 1 })
    .then(items => res.json(items));
};

//Get a certain item
exports.getCertainItem = (req, res) => {
  Item.findById(req.params.id).then(item => res.json(item));
};

// Post a new item
exports.postNewItem = (req, res) => {
  const newItem = new Item({
    description: req.body.description,
    amount: req.body.amount,
    type_name: req.body.type_name
  });
  newItem.save().then(item => res.json(item));
};

// Update an item
exports.updateItem = (req, res) => {
  Item.findById(req.params.id).then(item => {
    item.description = req.body.description;
    item.amount = req.body.amount;
    item.type_name = req.body.type_name;

    item
      .save()
      .then(item => {
        res.json(item);
      })
      .catch(err => {
        res.status(400).send("Update failed");
      });
  });
};

// Delete an item
exports.deleteItem = (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).send("Delete failed"));
};
