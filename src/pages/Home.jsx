import React from 'react';
import { books } from '../data/Data';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  const sortedBooks = [...books].sort((a, b) => b.rating - a.rating);

  // Get unique categories from the books array
  const categories = [...new Set(books.map(book => book.category))];

  return (
    <div className="home-container">
      <h1 className="home-title">📚 Welcome to the Online Library</h1>

      <section className="categories-section">
        <h2>📂 Categories</h2>
        <div className="categories">
          {categories.map((category) => (
            <Link key={category} to={`/books/${category}`} className="category-card">
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="popular-section">
        <h2>🔥 Popular Books</h2>
        <div className="books-grid">
          {sortedBooks.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <p>⭐ {book.rating}</p>
              <Link to={`/book/${book.id}`} className="details-link">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
