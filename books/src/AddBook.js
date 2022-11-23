import React from "react";
import { FaPlus } from "react-icons/fa";

function AddBook({newBook, setNewBook, handleSubmit}) {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addBool">Add a Book</label>
      <input
        autoFocus
        id="addBook"
        type="text"
        placeholder="Add Book"
        required
        value={newBook}
        onChange={e => setNewBook(e.target.value)}
      />
      <button type="submit" aria-label="Add Book">
        <FaPlus />
      </button>
    </form>
  );
}

export default AddBook;
