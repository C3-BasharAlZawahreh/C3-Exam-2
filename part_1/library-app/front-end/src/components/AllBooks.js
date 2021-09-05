import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllBooks() {
  const [allBooks, setAllBooks] = useState();

  useEffect(() => {
    axios.get("http://localhost:27017/books").then((res) => {
      setAllBooks(res.data);
    });
  }, []);



  const deleteBook = (id) =>{
    axios.delete(`http://localhost:27017/books/${id}`).then(()=>{
      console.log('Done')
    })
  }

  return (
    <div>
      {allBooks.map((book, i) => {
        <div key={i}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <button onClick={()=>{
              deleteBook(book._id)
            }}>
              Delete
            </button>
        </div>;
      })}
    </div>
  );
}
