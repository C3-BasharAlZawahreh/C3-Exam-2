const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  pages: Number,
  publisher: String,
  published_at: Date,
});


module.exports = ("Book",bookSchema);