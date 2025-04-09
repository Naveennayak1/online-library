import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { categories } from '../data/Data';
import { Link } from 'react-router-dom';
import './AllBooks.css';

const AllBooks = () => {
  const allBooks = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('rating');

  const filteredBooks = allBooks
    .filter((book) => {
      const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOption === 'rating') return b.rating - a.rating;
      if (sortOption === 'title') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div className="allbooks-container">
      <h2>📚 All Books</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="rating">Sort by Rating</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      <div className="book-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <p>⭐ {book.rating}</p>
              <p>📂 {book.category}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
