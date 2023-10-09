import React from "react";
import { useEffect } from "react";

import useBookHook from "../../hooks/useBookHook";
import Button from "../Button/Button"; // Import the Button component

const GetAllBooks = () => {
  const { bookData } = useBookHook();

  useEffect(() => {
    if (bookData) {
      console.log("From GetAllBooks.jsx ", bookData.data);
    }
  }, [bookData]);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>All Products</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {bookData.data &&
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
              {/* Common image */}
              <img
                src={book.image} // Add image source here
                alt={book.title}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <p>Price: ${book.price}</p>

              {/* Buttons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  // alignItems: "center",
                }}
              >
                <Button
                  text="Edit"
                  style={{ backgroundColor: "#007bff", color: "white" }}
                />
                <Button
                  text="Delete"
                  style={{ backgroundColor: "red", color: "white" }}
                />
                <Button
                  text="Add to Cart"
                  style={{ backgroundColor: "green", color: "white" }}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GetAllBooks;
