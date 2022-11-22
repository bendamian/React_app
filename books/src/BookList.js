import React from "react";
import Book from "./Book";

function BookList({ books, handleCheched, handleDelete }) {
  return (
    <ul>
      {books.map(book => (
        <Book
          key={book.id}
          book={book}
          handleCheched={handleCheched}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default BookList;
