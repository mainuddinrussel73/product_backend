import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/BookDetails.css'; // Add styles for active class
import { FaHeart, FaShoppingCart, FaDownload } from 'react-icons/fa'; // Import icons

const BookDetails = ({ books }) => {
  const { bookId } = useParams();
  console.log(bookId);
  const book = books.find(book => book.bookId === parseInt(bookId));
  const [userReviews, setUserReviews] = useState([
    {
      userName: "John Doe",
      rating: 4.5,
      comment: "A thought-provoking and inspiring book that everyone should read at least once."
    },
    {
      userName: "Jane Smith",
      rating: 5,
      comment: "Absolutely loved the narrative. Paulo Coelho’s writing always resonates with me."
    },
    {
      userName: "Alice Johnson",
      rating: 4,
      comment: "Great storyline, but felt it was a little slow in the middle."
    },
    // Add more reviews here...
  ]);
  const [newReview, setNewReview] = useState({
    userName: '',
    rating: '',
    comment: ''
  });

  // Handle input changes for the review form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value
    }));
  };
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Adding new review to the review list
      setUserReviews((prevReviews) => [...prevReviews, newReview]);
      // Reset form fields after submission
      setNewReview({
        userName: '',
        rating: '',
        comment: ''
      });
    };
   // Add a check to ensure the book exists before trying to access its properties
   if (!book) {
    return <p>Book not found!</p>;
  }
  if (books.length === 0) {
    return <p>Loading book details...</p>;  // Prevent rendering if books are still loading
  }
  const handleWishlist = () => {
    toast(`${book.bookId} -- ${book.bookName} has been successfully added to the Wishlist`);
  };

  const handleCart = () => {
    toast(`${book.bookId} -- ${book.bookName} has been successfully added to the Cart`);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
  
    // Full Stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} style={{color: "#f39c12" }} className="fas fa-star" />);
    }
  
    // Half Star
    if (halfStar) {
      stars.push(<i key={fullStars} style={{color: "#f39c12" }} className="fas fa-star-half-alt" />);
    }
  
    // Empty Stars
    for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
      stars.push(<i key={i} style={{color: "#f39c12" }}  className="far fa-star" />);
    }
  
    return stars;
  };
  
   

  return (
    <div className='book-details-main'>
      <div className="book-details-container">
        <div className="book-card-det">
          <div className="book-image-det" >
            <img src={book.image} alt={book.bookName} />
          </div>
          <div className="book-info-det">
            <h2 className="book-title-det">{book.bookName}</h2>
            <h4 className="book-author-det">by {book.author}</h4>
            <p className="book-category-det">Category: {book.category}</p>
            <div className="book-rating-det" style={{ marginBottom : "20px" }}>
              <p> Ratings : </p>
              <span className="star-rating">
                {renderStars(book.rating)}
              </span>
            </div>
            <p className="book-review-det">"{book.review}"</p>
            
            <div className="book-meta-det">
              <p><strong>Total Pages:</strong> {book.totalPages}</p>
              <p><strong>Publisher:</strong> {book.publisher}</p>
              <p><strong>Published:</strong> {book.yearOfPublishing}</p>
              <div className="book-tags-det">
                {book.tags.map((tag, index) => (
                  <span className="tag-det" key={index}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="book-actions-det">
              <button className="btn-det wish-btn-det" onClick={handleWishlist}>
                <FaHeart className="button-icon" />
                Wish to Read
              </button>
              <button className="btn-det cart-btn-det" onClick={handleCart}>
                <FaShoppingCart className="button-icon" />
                Add to Cart
              </button>
               {/* New Download Button */}
          
                <button className="btn-det download-btn">
                  <a href={book.downloadLink} download>
                    <FaDownload className="button-icon" />
                    Download
                  </a>
                </button>
             
            </div>
          </div>
        
        </div>
        
      </div>
       {/* User Reviews Section */}
        <div className="review-section">
            <h3>User Reviews</h3>
            <div className="reviews-container">
              {userReviews.map((review, index) => (
                <div className="review-card" key={index}>
                  <h4 className="review-user">{review.userName}</h4>
                  <p className="review-rating">Rating: ⭐ {review.rating}</p>
                  <p className="review-comment">"{review.comment}"</p>
                </div>
              ))}
            </div>
        </div>

      {/* Add Review Form */}
      <div className="add-review-section">
        <h3>Add Your Review</h3>
        <form className="review-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="Your Name"
            value={newReview.userName}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating (0-5)"
            value={newReview.rating}
            onChange={handleInputChange}
            min="0"
            max="5"
            step="0.1"
            required
          />
          <textarea
            name="comment"
            placeholder="Your Review"
            value={newReview.comment}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="btn submit-btn">Submit Review</button>
        </form>
      </div>
    </div>
    
  );
};

export default BookDetails;
