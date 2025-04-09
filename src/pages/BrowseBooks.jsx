import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import './BrowseBooks.css';

const BrowseBooks = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const books = useSelector((state) => state.books);

  const filteredbooks = books.filter((book) =>
    book.category === category &&
    (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="browse-container">
      <div className="browse-header">
        <h2 className="browse-title">Books in {category}</h2>
        <Link to="/" className="home-button">🏠 Return to Home</Link>
      </div>

      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {filteredbooks.length > 0 ? (
        <div className="book-grid">
          {filteredbooks.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <p>⭐ {book.rating}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default BrowseBooks;
