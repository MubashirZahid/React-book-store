import React, { useEffect, useState } from "react";
import useBookHook from "../../hooks/useBookHook";
import Button from "../Button/Button";
import CartTotal from "../Cart/CartTotal";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reducers/cart";
import { Link } from "react-router-dom";

const GetAllBooks = () => {
  const { bookData } = useBookHook();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const [sortedBooks, setSortedBooks] = useState([]); // State for sorted books

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  // Function to sort books by price
  const sortBooksByPrice = () => {
    const sorted = [...bookData.data]; // Create a copy of the bookData
    sorted.sort((a, b) => a.price - b.price); // Sort by price
    setSortedBooks(sorted); // Update the sortedBooks state
  };

  useEffect(() => {
    if (bookData) {
      console.log("From GetAllBooks.jsx ", bookData.data);
    }
  }, [bookData]);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>All Products</h1>
      {/* Use the Button component for the sorting button with a smaller width */}
      <Button
        text="Sort by Price"
        style={{ backgroundColor: "blue", color: "white", width: "100px" }}
        onClick={sortBooksByPrice}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {sortedBooks.length > 0
          ? sortedBooks.map((book, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  padding: "10px",
                  margin: "10px",
                  width: "300px",
                }}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>Price: ${book.price}</p>
                <Link to="add-to-cart">
                  <Button
                    text="Add to Cart"
                    style={{ backgroundColor: "green", color: "white" }}
                    onClick={() => handleAddToCart(book)}
                  />
                </Link>
              </div>
            ))
          : bookData.data &&
            bookData.data.map((book, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  padding: "10px",
                  margin: "10px",
                  width: "300px",
                }}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>Price: ${book.price}</p>
                <Link to="add-to-cart">
                  <Button
                    text="Add to Cart"
                    style={{ backgroundColor: "green", color: "white" }}
                    onClick={() => handleAddToCart(book)}
                  />
                </Link>
              </div>
            ))}
      </div>
      <CartTotal />
    </div>
  );
};

export default GetAllBooks;
