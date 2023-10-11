import React, { useState } from "react";
import useBookHook from "../../hooks/useBookHook";
import GetAllBooks from "../GetAllBooks/GetAllBooks";
import { debounce } from "lodash";

const SearchBooks = () => {
  const { bookData } = useBookHook();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Debounce the search function
  const delayedSearch = debounce((query) => {
    const results = bookData.data.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(results);
  }, 1000); // Adjust the delay time (in milliseconds) as needed

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    delayedSearch(query); // Delayed search function
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by book title"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <GetAllBooks books={filteredBooks} />
    </div>
  );
};

export default SearchBooks;
