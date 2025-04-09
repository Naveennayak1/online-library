import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    rating: "",
    category: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!formData.title) err.title = "Title is required";
    if (!formData.author) err.author = "Author is required";
    if (!formData.description) err.description = "Description is required";
    if (!formData.rating) err.rating = "Rating is required";
    if (!formData.category) err.category = "Category is required";
    return err;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }

    const newBook = {
      id: Date.now().toString(), 
            ...formData,
    };

    dispatch(addBook(newBook));
    navigate(`/books/${formData.category}`);
  };

  return (
    <div className="add-book-container">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
        {errors.title && <span className="error">{errors.title}</span>}

        <label>Author:</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange} />
        {errors.author && <span className="error">{errors.author}</span>}

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} />
        {errors.description && <span className="error">{errors.description}</span>}

        <label>Rating:</label>
        <input type="number" name="rating" value={formData.rating} onChange={handleChange} min="1" max="5" />
        {errors.rating && <span className="error">{errors.rating}</span>}

        <label>Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} />
        {errors.category && <span className="error">{errors.category}</span>}

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
