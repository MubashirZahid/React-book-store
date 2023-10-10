import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateBook from "./components/CreateBook/CreateBook";
import DeleteBook from "./components/DeleteBook/DeleteBook";
import GetAllBooks from "./components/GetAllBooks/GetAllBooks";
import LoginForm from "./components/LogIn/LogIn";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";
import UpdateBook from "./components/UpdateBook/UpdateBook";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import GetAllUsers from "./components/GetAllUsers/GetAllUsers";
import UserUpdate from "./components/UpdateUser/UpdateUser";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetAllBooks />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path="/update-book" element={<UpdateBook />} />
          <Route path="/delete-book" element={<DeleteBook />} />

          {/* {/* <Route path="/products/:productId" element={<ProductDetails />/> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <GetAllUsers />
      <UserUpdate />
    </>
  );
}

export default App;
