import React from "react";

import BookList from "./BookList";

function Content({ books, handleCheched, handleDelete }) {
  return (
    <main>
      {books.length ? (
        <BookList
          key={books.id}
          books={books}
          handleCheched={handleCheched}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}> Empty Book List.</p>
      )}
    </main>
  );
}

export default Content;
