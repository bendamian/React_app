import React from "react";
import { FaPlus } from "react-icons/fa";
import {useRef} from 'react';

function AddBook({newBook, setNewBook, handleSubmit}) {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addBool">Add a Book</label>
      <input
        autoFocus
        ref={inputRef}
        id="addBook"
        type="text"
        placeholder="Add Book"
        required
        value={newBook}
        onChange={e => setNewBook(e.target.value)}
      />
      <button type="submit" aria-label="Add Book"
      onClick={()=>inputRef.current.focus()}
      >
        <FaPlus />

      </button>
    </form>
  );
}

export default AddBook;
