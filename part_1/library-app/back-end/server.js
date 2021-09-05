const express = require("express");
const cors = require("cors");
const db = require("./db");
const Book = require("./bookSchema");

const app = express();

app.use(express.json());
app.use(cors());

const createNewBook = (req, res) => {
  const { title, author, pages, publisher, published_at } = req.body;

  const newBook = new Book({
    title,
    author,
    pages,
    publisher,
    published_at,
  });

  newBook.save().then((result)=>{
    res.json(result)
  })
};

const getAllBooks = (req, res) => {
  Book.find({}).then((res) => {
    res.json(result.data);
  });
};

app.get("/", getAllBooks);

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
