const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  item_name: String,
  item_price: Number,
  updated_ad: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", Schema);
