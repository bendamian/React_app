import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function Book({ book, handleCheched, handleDelete }) {
  return (
    <li className="book">
      <input
        type="checkbox"
        onChange={() => handleCheched(book.id)}
        checked={book.checked}
      ></input>
      <label
        style={book.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheched(book.id)}
      >
        {book.book}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(book.id)}
        role="button fa-solid"
        tabIndex="0"
        aria-label={`Delete ${book.book}`}
      />
    </li>
  );
}

export default Book;
