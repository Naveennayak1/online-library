import React  from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import App from './App'
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import AllBooks from "./pages/AllBooks";

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<Provider store={store}>
<BrowserRouter>
<Routes>
<Route path="/" element={<App />}>
<Route index element={<Home />} />
<Route path="books/:category" element={<BrowseBooks />} />
<Route path="book/:id" element={<BookDetails />} />
<Route path="add-book" element={<AddBook />} />
<Route path="all-books" element={<AllBooks />} />
<Route path="*" element={<NotFound />} /> 
</ Route>
</Routes>
</BrowserRouter>
</Provider>
</React.StrictMode>


)