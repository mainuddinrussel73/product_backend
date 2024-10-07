import React from 'react';
import '../styles/RecommendedBooks.css';

const recommendedBooks = [
  {
    bookId: 1,
    bookName: "Educated",
    author: "Tara Westover",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg",
    rating: 9.1,
    reviews: 896,
    description: "The wildly popular YouTube and author of the New York Times...",
  },
  {
    bookId: 2,
    bookName: "The Midnight Library",
    author: "Matt Haig",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
    rating: 8.9,
    reviews: 532,
    description: "A heartfelt exploration of life's endless possibilities...",
  },
  {
    bookId: 2,
    bookName: "The Midnight Library",
    author: "Matt Haig",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
    rating: 8.9,
    reviews: 532,
    description: "A heartfelt exploration of life's endless possibilities...",
  },
  {
    bookId: 2,
    bookName: "The Midnight Library",
    author: "Matt Haig",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
    rating: 8.9,
    reviews: 532,
    description: "A heartfelt exploration of life's endless possibilities...",
  },
  {
    bookId: 2,
    bookName: "The Midnight Library",
    author: "Matt Haig",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
    rating: 8.9,
    reviews: 532,
    description: "A heartfelt exploration of life's endless possibilities...",
  },
  {
    bookId: 2,
    bookName: "The Midnight Library",
    author: "Matt Haig",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
    rating: 8.9,
    reviews: 532,
    description: "A heartfelt exploration of life's endless possibilities...",
  },
  {
    bookId: 2,
    bookName: "The Midnight Library",
    author: "Matt Haig",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
    rating: 8.9,
    reviews: 532,
    description: "A heartfelt exploration of life's endless possibilities...",
  },
  // Add more books here...
];

const RecommendedBooks = () => {
  return (
    <div className='recommandations-book'>
      <h2 className='recommandations-book-title'>Recommended Books </h2>
      <div className='recommandations-book-cont'>
        <div className='left-banner-book'>
          <div className='featured-img'>
            <img src={recommendedBooks[0].image} alt={recommendedBooks[0].bookName} />
          </div>
        </div>
        <div className='right-container'>
            <div className='right-top'>
              <div className="books-carousel">
                {recommendedBooks.map((book) => (
                  <div className="books-card" key={book.bookId}>
                    <img src={book.image} alt={book.bookName} className="books-image" />
                  </div>
                ))}
              </div>
            </div>
            <div className='right-bottom'>
              <div className="featured-book">
                <p className="books-title">{recommendedBooks[0].bookName}</p>
                  <div className="books-rating">
                    ⭐ {recommendedBooks[0].rating}/10 <span className="reviews">({recommendedBooks[0].reviews})</span>
                  </div>
                  <p className="books-description">{recommendedBooks[0].description}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
    
  );
};

export default RecommendedBooks;
