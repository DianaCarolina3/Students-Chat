const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  chat: {
    type: Schema.ObjectId,
    ref: "Chat",
  },
  student: {
    type: Schema.ObjectId,
    ref: "Student",
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
  file: String,
});

const model = mongoose.model("Messages", mySchema);
module.exports = model;
