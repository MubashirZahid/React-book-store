import "./App.css";
import CreateBook from "./components/CreateBook/CreateBook";
import DeleteBook from "./components/DeleteBook/DeleteBook";
import GetAllBooks from "./components/GetAllBooks/GetAllBooks";
import Navbar from "./components/Navbar/Navbar";
import UpdateBook from "./components/UpdateBook/UpdateBook";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <GetAllBooks />
        <CreateBook />
        <UpdateBook />
        <DeleteBook />
      </div>
    </>
  );
}

export default App;
