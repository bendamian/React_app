//import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Content() {
  const [books, setBook] = useState([
    {
      id: 1,
      checked: true,
      book: "JavaScript and JQuery"
    },
    {
      id: 2,
      checked: false,
      book: "The Principles of Object-Oriented JavaScript"
    },
    {
      id: 3,
      checked: false,
      book: "JavaScript from Beginner to Professional"
    }
  ]);

  const handleCheched = id => {
    const bookList = books.map(book =>
      book.id === id ? { ...book, checked: !book.checked } : book
    );
    setBook(bookList);
    localStorage.setItem("bookList", JSON.stringify(bookList));
  };

  const handleDelete = id => {
    const bookList = books.filter(book => book.id !== id);
    setBook(bookList);
    localStorage.setItem("bookList", JSON.stringify(bookList));
  };

  return (
    <main>
      {books.length ? (
        <ul>
          {books.map(book => (
            <li className="book" key={book.id}>
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
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}> Empty Book List.</p>
      )}
    </main>
  );
}

export default Content;
