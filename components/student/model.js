const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  number: String,
  name: String,
});

const model = mongoose.model("Student", mySchema);
module.exports = model;
