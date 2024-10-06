import React, { useState } from 'react';
import "../styles/EditBookModal.css";


const EditBookModal = ({ isOpen, onClose, onSave }) => {
  // State for all fields
  const [bookId, setBookId] = useState('');
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
  
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleSave = () => {
    if (!bookName || !author || !totalPages) {
      setErrorMessage('Please fill out all required fields');
      return;
    }

    // Creating the book object with all fields
    const bookData = {
      bookId,
      bookName,
      author,
      image,
      review,
      totalPages,
      rating,
      category,
      tags: tags.split(','), // Convert comma-separated tags to array
      publisher,
      yearOfPublishing,
      downloadLink
    };

    // Simulating a save operation (you would replace this with actual save logic)
    onSave(bookData);
    setSuccessMessage('Book details saved successfully!'); // Show success message

    // Clear the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
      onClose(); // Optionally close the modal after saving
    }, 3000);
  };

  return (
    isOpen && (
      <div className="modal-overlay-modern">
        <div className="edit-modal-modern">
          <div className="modal-header">
            <h2>Edit Book</h2>
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>} {/* Show success message */}

            <div className="input-group-modern">
              <label>Book ID</label>
              <input
                type="text"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
              />
            </div>

            <div className="input-group-modern">
              <label>Book Name</label>
              <input
                type="text"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
              />
            </div>

            <div className="input-group-modern">
              <label>Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className="input-group-modern">
              <label>Image URL</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div className="input-group-modern">
              <label>Review</label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>

            <div className="input-group-modern">
              <label>Total Pages</label>
              <input
                type="number"
                value={totalPages}
                onChange={(e) => setTotalPages(e.target.value)}
              />
            </div>

            <div className="input-group-modern">
              <label>Rating</label>
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="0"
                max="5"
                step="0.1"
              />
            </div>

            <div className="input-group-modern">
              <label>Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="input-group-modern">
              <label>Tags (comma-separated)</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>

            <div className="input-group-modern">
              <label>Publisher</label>
              <input
                type="text"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
            </div>

            <div className="input-group-modern">
              <label>Year of Publishing</label>
              <input
                type="number"
                value={yearOfPublishing}
                onChange={(e) => setYearOfPublishing(e.target.value)}
              />
            </div>

            <div className="input-group-modern">
              <label>Download Link</label>
              <input
                type="text"
                value={downloadLink}
                onChange={(e) => setDownloadLink(e.target.value)}
              />
            </div>

          </div>

          <div className="modal-footer">
            <button className="save-button-modern" onClick={handleSave}>
              Save
            </button>
            <button className="cancel-button-modern" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default EditBookModal;
