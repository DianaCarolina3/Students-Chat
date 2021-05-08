const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myShema = new Schema({
  educator: String,
  classroom: String,
  subject: String,
  info: String,
});

const model = mongoose.model("Teacher", myShema);
module.exports = model;
