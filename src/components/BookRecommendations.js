import React from "react";

const BookRecommendations = ({ books }) => {
  const recommendBooks = () => {
    // Recommendation logic
    return books.filter((book) => book.category === "Fiction");
  };

  return (
    <div className="recommendations">
      <h2>Recommended Books</h2>
      <ul>
        {recommendBooks().map((book, index) => (
          <li key={index}>{book.bookName}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookRecommendations;
