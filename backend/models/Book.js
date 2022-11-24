const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bookSchema = new Schema(
  {
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    editorial: {
      type: String,
    },
    date: {
      type: Date,
    },
    file: {
      type: File,
    },
  },
  {
    collection: "books",
  }
);
module.exports = mongoose.model("books", bookSchema);
