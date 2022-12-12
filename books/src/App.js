import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState ,useEffect} from "react";
import AddBook from "./AddBook";
import SearchBook from "./SearchBook";

function App() {
  const API_URL = "http://localhost:3500/books";
  const [books, setBook] = useState([]);
  const [newBook, setNewBook] = useState("");
  const [search,setSearch] = useState('')
  const[fetchErr,setfetchErr] = useState(null)
  const[isLoding ,setIsLoding] = useState(true)

  useEffect(()=>{
const fetchBooks = async () =>{
  try{
    const response = await fetch(API_URL)
    if(!response.ok) throw Error('Did not receive data from server')
     const bookCollection = await response.json();
     setBook(bookCollection)
     setfetchErr(null)
    // console.log(bookCollection)
  }catch(err){
    setfetchErr(err.message);
     // console.log(err.message)

  }finally{setIsLoding(false)}
}
setTimeout( ()=>{(async () => await fetchBooks())();}, 2000)

  },[])



  const addBook = book => {
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    const myNewBook = { id, checked: false, book };
    const bookList = [...books, myNewBook];
    setBook(bookList);
  };

  const handleCheched = id => {
    const bookList = books.map(book =>
      book.id === id ? { ...book, checked: !book.checked } : book
    );
    setBook(bookList);
  };

  const handleDelete = id => {
    const bookList = books.filter(book => book.id !== id);
    setBook(bookList);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!newBook) return;
    //console.log(newBook);
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
      <SearchBook search={search} setSearch={setSearch} />
      <main>
        {isLoding && <p>Loding Books...</p>}
        {fetchErr && <p style={{color:'red'}}>{`Error:${fetchErr}`}</p>}
        {!fetchErr && !isLoding &&<Content
          books={books.filter(book =>
            book.book.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheched={handleCheched}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer length={books.length} />
    </div>
  );
}

export default App;
