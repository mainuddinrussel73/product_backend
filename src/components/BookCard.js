import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BookCard.css';

const BookCard = ({ book }) => {

  return (
    
    <div className="book-card"   key={book.id} >
      <div className='left-card'>
        <img src={book.image} alt={book.bookName} />
        <div className="tags-container">
          {book.tags.map((tag, index) => (
            <span key={index} className="tag" >{tag}</span>
          ))}
        </div>
      </div>
      <div className='right-card'>
      <div  className="card-content" >
        
        <h2 className="book-title">{book.bookName}</h2>
        <p className="book-author" >by {book.author}</p>
        <p className="book-category" >Category: {book.category}</p>
        <p className="book-rating">{book.rating} ⭐ rating</p>
        <Link to={`/book/${book.bookId}`}><button className="details-button">Book Details</button></Link>
        <Link to={`/book/${book.bookId}`}><button className="details-button" >Download</button></Link>
        </div>
      </div>
     
     
      
    </div>
  );
};

export default BookCard;
