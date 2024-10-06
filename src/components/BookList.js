import React from "react";

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className="book-list">
      <h2>Your Uploaded Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h3>{book.bookName}</h3>
            <img src={book.image} alt={book.bookName} />
            <button onClick={() => onEdit(index, book)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
