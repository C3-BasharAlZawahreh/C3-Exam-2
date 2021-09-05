import React from "react";

export default function NewBook() {
  const SaveBook = () => {
    axios
      .post("http://localhost:27017/books", {
        title,
        author,
        pages,
        publisher,
        published_at,
      })
      .then((res) => {
        console.log("Done");
      });
  };
  return (
    <div>
      <h1>App Component</h1>

      <input
        onChange={(e) => {
          settitle(e.target.value);
        }}
      />

      <input
        onChange={(e) => {
          setauthor(e.target.value);
        }}
      />

      <input
        onChange={(e) => {
          setpages(e.target.value);
        }}
      />

      <input
        onChange={(e) => {
          setpublisher(e.target.value);
        }}
      />

      <input
        onChange={(e) => {
          setpublished_at(e.target.value);
        }}
      />

      <button onClick={SaveBook}>Submit</button>
    </div>
  );
}
