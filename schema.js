var mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Item = new Schema({
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    type_name: {
        type: String
    },
    amount: {
        type: Number
    }
});

module.exports = mongoose.model('Item', Item)