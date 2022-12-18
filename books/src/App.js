import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState ,useEffect} from "react";
import AddBook from "./AddBook";
import SearchBook from "./SearchBook";
import apiRequest from "./apiRequest";

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



  const addBook = async (book) => {
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    const myNewBook = { id, checked: false, book };
    const bookList = [...books, myNewBook];
    setBook(bookList);
const postOptions = {
  method:'POST',
  headers:{
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(myNewBook)
}

const result = await apiRequest(API_URL,postOptions);
if (result) setfetchErr(result)

  };

  const handleCheched = async id => {
    const bookList = books.map(book =>
      book.id === id ? { ...book, checked: !book.checked } : book
    );
    setBook(bookList);
   const myBook = bookList.filter((book) => book.id === id);
   
const updateOptions = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({checked:myBook[0].checked})
};

const reqUrl = `${API_URL}/${id}`

const result = await apiRequest(reqUrl,updateOptions)
if (result) setfetchErr(result);
  };

  const handleDelete = async (id) => {
    const bookList = books.filter(book => book.id !== id);
    setBook(bookList);
  const deleteOptions = {method:'DELETE'};
  const reqUrl = `${API_URL}/${id}`;
  const result = await apiRequest(reqUrl, deleteOptions);
  if (result) setfetchErr(result);
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
