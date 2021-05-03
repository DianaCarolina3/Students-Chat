const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  students: [
    {
      type: Schema.ObjectId,
      ref: "Student",
    },
  ],
});

const model = mongoose.model("Chat", mySchema);
module.exports = model;
