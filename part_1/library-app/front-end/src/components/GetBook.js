import axios from "axios";
import React, { useParams, useState } from "react";

export default function GetBook() {
  const [book, setbook] = useState();
  const getBook = () => {
    let { id } = useParams();
    axios.get(`http://localhost:27017/books/${id}`).then((res)=>{
        setbook(res.data)
    });

  };

  return <div>
      {
          <div>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
          </div>
      }
  </div>;
}
