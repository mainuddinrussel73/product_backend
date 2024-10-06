import React, { useState } from "react";
import "../styles/BookUpload.css";
 

const BookUpload = ({  isOpen, onClose }) => {
   // State variables for the book details
   const [bookName, setBookName] = useState('');
   const [author, setAuthor] = useState('');
   const [image, setImage] = useState('');
   const [review, setReview] = useState('');
   const [totalPages, setTotalPages] = useState('');
   const [rating, setRating] = useState('');
   const [category, setCategory] = useState('');
   const [tags, setTags] = useState('');
   const [publisher, setPublisher] = useState('');
   const [yearOfPublishing, setYearOfPublishing] = useState('');
   const [downloadLink, setDownloadLink] = useState('');
   const [successMessage, setSuccessMessage] = useState('');

   // Form submission handler
   const handleUploadBook = (e) => {
    e.preventDefault();

    // Create a book object
    const newBook = {
      bookId: Date.now(), // Generates a unique ID based on timestamp
      bookName,
      author,
      image,
      review,
      totalPages,
      rating,
      category,
      tags: tags.split(',').map(tag => tag.trim()), // Convert comma-separated tags to an array
      publisher,
      yearOfPublishing,
      downloadLink
    };

    // Simulate uploading the book data (you can replace this with an API call)
    console.log('Book uploaded:', newBook);
    setSuccessMessage('Book uploaded successfully!');

    // Reset the form fields
    setBookName('');
    setAuthor('');
    setImage('');
    setReview('');
    setTotalPages('');
    setRating('');
    setCategory('');
    setTags('');
    setPublisher('');
    setYearOfPublishing('');
    setDownloadLink('');
  };

  if (!isOpen) return null;

  return (

    isOpen && (

        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
                <h2>Upload a New Book</h2>
                <button className="close-button" onClick={onClose}>
                &times;
                </button>
            </div>
            <div className="modal-body">
                    {/* Success message */}
            {successMessage && <p className="success-message">{successMessage}</p>}

            <form className="upload-book-form" onSubmit={handleUploadBook}>
                <div className="input-group-modern">
                <label htmlFor="bookName">Book Name</label>
                <input
                    type="text"
                    id="bookName"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    required
                />
                </div>

                <div className="input-group-modern">
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                </div>

                <div className="input-group-modern">
                <label htmlFor="image">Book Image URL</label>
                <input
                    type="url"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />
                </div>

                <div className="input-group-modern">
                <label htmlFor="review">Review</label>
                <textarea
                    id="review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                ></textarea>
                </div>

                <div className="input-group-modern">
                <label htmlFor="totalPages">Total Pages</label>
                <input
                    type="number"
                    id="totalPages"
                    value={totalPages}
                    onChange={(e) => setTotalPages(e.target.value)}
                    required
                />
                </div>

                <div className="input-group-modern">
                <label htmlFor="rating">Rating</label>
                <input
                    type="number"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                    min="0"
                    max="5"
                    step="0.1"
                />
                </div>

                <div className="input-group-modern">
                <label htmlFor="category">Category</label>
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
                </div>

                <div className="input-group-modern">
                <label htmlFor="tags">Tags (Comma separated)</label>
                <input
                    type="text"
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    required
                />
                </div>

                <div className="input-group-modern">
                <label htmlFor="publisher">Publisher</label>
                <input
                    type="text"
                    id="publisher"
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    required
                />
                </div>

                <div className="input-group-modern">
                <label htmlFor="yearOfPublishing">Year of Publishing</label>
                <input
                    type="number"
                    id="yearOfPublishing"
                    value={yearOfPublishing}
                    onChange={(e) => setYearOfPublishing(e.target.value)}
                    required
                />
                </div>

                <div className="input-group-modern">
                <label htmlFor="downloadLink">Download Link</label>
                <input
                    type="url"
                    id="downloadLink"
                    value={downloadLink}
                    onChange={(e) => setDownloadLink(e.target.value)}
                    required
                />
                </div>

                
            </form>
            </div>
            
            <div className="modal-footer">
                <button type="submit" className="submit-button">
                    Upload Book
                </button>
            </div>
            </div>
        </div>
    )
  
  );
};

export default BookUpload;
