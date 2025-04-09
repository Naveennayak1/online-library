import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BookDetails.css";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books);
  const book = books.find((b) => b.id.toString() === id);

  if (!book) {
    return <h2>Book not found.</h2>;
  }

  const handleBack = () => {
    navigate(`/books/${book.category}`);
  };

  return (
    <div className="book-details-container">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>
      <p><strong>Category:</strong> {book.category}</p>

      <button onClick={handleBack} className="back-button">
        ← Return to {book.category}
      </button>
    </div>
  );
};

export default BookDetails;
