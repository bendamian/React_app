import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
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
    <div className="App">
      <Header title=" My bookshelves" />
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
