const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  teacher: {
    type: Schema.ObjectId,
    ref: "Teacher",
  },
  students: [
    {
      type: Schema.ObjectId,
      ref: "Student",
    },
  ],
});

const model = mongoose.model("Chat", mySchema);
module.exports = model;
