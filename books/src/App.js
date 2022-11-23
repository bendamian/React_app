import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddBook from "./AddBook";

function App() {
  const [books, setBook] = useState(JSON.parse(localStorage.getItem('bookList')));

  const [newBook, setNewBook] = useState("");

  const setAndSaveBook = newBooks => {
    setBook(newBooks);
    localStorage.setItem("bookList", JSON.stringify(newBooks));
  };

  const addBook = book => {
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    const myNewBook = { id, checked: false, book };
    const bookList = [...books, myNewBook];
    setAndSaveBook(bookList);
  };

  const handleCheched = id => {
    const bookList = books.map(book =>
      book.id === id ? { ...book, checked: !book.checked } : book
    );
    setAndSaveBook(bookList);
  };

  const handleDelete = id => {
    const bookList = books.filter(book => book.id !== id);
    setAndSaveBook(bookList);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!newBook) return;
    console.log(newBook);
    // addBook
    addBook(newBook)
    setNewBook("");
  };

  return (
    <div className="App">
      <Header title=" My bookshelves" />
      <AddBook
        newBook={newBook}
        setNewBook={setNewBook}
        handleSubmit={handleSubmit}
      />
      <Content
        books={books}
        handleCheched={handleCheched}
        handleDelete={handleDelete}
      />
      <Footer length={books.length} />
    </div>
  );
}

export default App;
