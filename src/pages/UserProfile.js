import React,{ useEffect, useState } from 'react';
import '../styles/UserProfile.css'; // Separate CSS file for styling
import { useAuth } from '../AuthContext'; // Import useAuth to access context
import BookUpload from "../components/BookUpload";
import BookList from "../components/BookList";
import BookStats from "../components/UserStatics";
import EditBookModal from "../components/EditBookModal";
import Leaderboard from "../components/LeaderBoard";
import ExportButton from "../components/ExportButton";
import BookRecommendations from "../components/BookRecommendations";
import { AiFillDelete } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaFileUpload } from "react-icons/fa";

const UserProfile = () => {


  
    const {currentUser} = useAuth();
    
    if (currentUser.displayName == undefined || currentUser.displayName == '' ){
        currentUser.displayName = "Unknown"
    }
    currentUser.uid = currentUser.uid || 'None';
    currentUser.emailVerified = currentUser.emailVerified ? 'Yes' : 'No';
    currentUser.phoneNumber = currentUser.phoneNumber || 'N/A';
    currentUser.creationTime = new Date(currentUser.metadata.creationTime).toLocaleString();
    currentUser.lastSignInTime = new Date(currentUser.metadata.lastSignInTime).toLocaleString();
    currentUser.providerData = currentUser.providerData || [];

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
          alert("User ID copied to clipboard!");
        }).catch(err => {
          console.error('Error copying text: ', err);
        });
    };
    
    const scrollCarousel = (direction) => {
        const carousel = document.querySelector('.carousel');
        const scrollAmount = 300; // Adjust this based on desired scroll
        if (direction === 'next') {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        } else if (direction === 'prev') {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };
  const completedBooks = [
    {
        "bookId": 1,
        "bookName": "The Midnight Library",
        "author": "Matt Haig",
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
        "review": "A heartfelt exploration of life's endless possibilities, full of hope and meaning.",
        "totalPages": 304,
        "rating": 4.5,
        "category": "Fiction",
        "tags": ["Philosophical", "Fantasy", "Self-Discovery"],
        "publisher": "Canongate Books",
        "yearOfPublishing": 2020,
        "downloadLink": "https://drive.google.com/file/d/1IUCCpKava348KcqVeA46n3Gx7y-W9_QR/view?usp=drive_link"
      },
      {
        "bookId": 2,
        "bookName": "Becoming",
        "author": "Michelle Obama",
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg",
        "review": "An inspiring memoir that traces the life of one of America's most iconic first ladies.",
        "totalPages": 448,
        "rating": 4.8,
        "category": "Memoir",
        "tags": ["Inspiring", "Political", "Biography"],
        "publisher": "Crown Publishing",
        "yearOfPublishing": 2018,
        "downloadLink": "https://drive.google.com/file/d/1IUCCpKava348KcqVeA46n3Gx7y-W9_QR/view?usp=drive_link"
  
      },
      {
        "bookId": 3,
        "bookName": "Educated",
        "author": "Tara Westover",
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg",
        "review": "A powerful memoir about growing up in rural isolation and the transformative power of education.",
        "totalPages": 334,
        "rating": 4.7,
        "category": "Biography",
        "tags": ["Memoir", "Education", "Family"],
        "publisher": "Random House",
        "yearOfPublishing": 2018,
        "downloadLink": "https://drive.google.com/file/d/1IUCCpKava348KcqVeA46n3Gx7y-W9_QR/view?usp=drive_link"
  
      },
      {
        "bookId": 4,
        "bookName": "Where the Crawdads Sing",
        "author": "Delia Owens",
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg",
        "review": "A mesmerizing tale of survival, mystery, and the beauty of the natural world.",
        "totalPages": 368,
        "rating": 4.6,
        "category": "Mystery",
        "tags": ["Nature", "Crime", "Romance"],
        "publisher": "G.P. Putnam's Sons",
        "yearOfPublishing": 2018
      },
      {
        "bookId": 5,
        "bookName": "Atomic Habits",
        "author": "James Clear",
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
        "review": "A game-changing guide to forming good habits and breaking bad ones, grounded in science.",
        "totalPages": 320,
        "rating": 4.9,
        "category": "Self-Help",
        "tags": ["Productivity", "Self-Improvement", "Behavior"],
        "publisher": "Penguin Random House",
        "yearOfPublishing": 2018
      },
      {
        "bookId": 6,
        "bookName": "Atomic Habits",
        "author": "James Clear",
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
        "review": "A game-changing guide to forming good habits and breaking bad ones, grounded in science.",
        "totalPages": 320,
        "rating": 4.9,
        "category": "Self-Help",
        "tags": ["Productivity", "Self-Improvement", "Behavior"],
        "publisher": "Penguin Random House",
        "yearOfPublishing": 2018
      },
  ];

  const currentlyReadingBooks = [
    {
        "bookId": 1,
        "bookName": "The Midnight Library",
        "author": "Matt Haig",
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
        "review": "A heartfelt exploration of life's endless possibilities, full of hope and meaning.",
        "totalPages": 304,
        "rating": 4.5,
        "category": "Fiction",
        "tags": ["Philosophical", "Fantasy", "Self-Discovery"],
        "publisher": "Canongate Books",
        "yearOfPublishing": 2020,
        "downloadLink": "https://drive.google.com/file/d/1IUCCpKava348KcqVeA46n3Gx7y-W9_QR/view?usp=drive_link"
      },
      {
        "bookId": 2,
        "bookName": "Becoming",
        "author": "Michelle Obama",
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg",
        "review": "An inspiring memoir that traces the life of one of America's most iconic first ladies.",
        "totalPages": 448,
        "rating": 4.8,
        "category": "Memoir",
        "tags": ["Inspiring", "Political", "Biography"],
        "publisher": "Crown Publishing",
        "yearOfPublishing": 2018,
        "downloadLink": "https://drive.google.com/file/d/1IUCCpKava348KcqVeA46n3Gx7y-W9_QR/view?usp=drive_link"
  
      }
  ];

  const [books, setBooks] = useState(completedBooks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const handleOpenModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  };
  const [editingBookIndex, setEditingBookIndex] = useState(null);
  const [editingBook, setEditingBook] = useState(null);
  const handleUploadBook = (book) => {
    setBooks([...books, book]);
  };

  const handleEditBook = (index, updatedBook) => {
    setEditingBookIndex(index);
    setEditingBook(books[index]);
    setIsModalOpen(true); // Open modal when edit is clicked
  };

  
  const handleSaveEdit = (updatedBook) => {
    const newBooks = [...books];
    newBooks[editingBookIndex] = updatedBook;
    setBooks(newBooks);
    //setIsModalOpen(false); // Close modal after saving
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal without saving
  };
  const handleDeleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  if (!currentUser) return <div>Loading...</div>;

  return (
    <div className="user-profile-modern">
    {/* User Header with Photo */}
    <div className="profile-header">
        <div className="profile-photo-container">
          <img src={currentUser.photoURL || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"} alt="User Avatar" className="profile-photo" />
        </div>
        <div className="profile-details">
          <h2 className="profile-name">{currentUser.displayName}</h2>
          <p className="profile-email">{currentUser.email}</p>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>
    </div>
    <div className="user-info-container">
        <div className="user-info-header">
            <h3 >Personal Information</h3>
            <button className="edit-btn">✎ Edit</button>
        </div>

        <div className="user-info-grid">
            <div className="info-item">
            <strong>First Name</strong>
            <p>{currentUser.displayName}</p>
            </div>
            
            <div className="info-item">
            <strong>Email Address</strong>
            <p>{currentUser.email}</p>
            </div>
            <div className="info-item">
            <strong>Phone</strong>
            <p>{currentUser.phoneNumber}</p>
            </div>
            <div className="info-item">
            <strong>Bio</strong>
            <p>{currentUser.bio}</p>
            </div>
            <div className="info-item">
            <strong>Account Creation Time</strong>
            <p>{currentUser.creationTime}</p>
            </div>
            <div className="info-item">
            <strong>Last Login Time</strong>
            <p>{currentUser.lastSignInTime}</p>
            </div>
            <div className="info-item"></div>
        </div>
    </div>

    {/* Completed Reading Books */}
    <div className="completed-books-modern">
        <h3 style={{ color : "#7D4F4A" }}>Completed Reading Books</h3>

        <div className="carousel-container">
          <div className="carousel">
            {completedBooks.map((book, index) => (
                
              <div className="carousel-item" key={index}>
                <img src={book.image} alt={book.bookName} className="book-cover" />
                
                <h4>{book.bookName}</h4>
                <p>{book.author}</p>
               
                
               
              </div>
            ))}
          </div>
          {/* Navigation buttons */}
          <button className="carousel-btn prev-btn" onClick={() => scrollCarousel('prev')}>‹</button>
          <button className="carousel-btn next-btn" onClick={() => scrollCarousel('next')}>›</button>
        </div>
    </div>
   

    {/* Currently Reading Books */}
    <div className="completed-books-modern">
        <h3 style={{ color : "#7D4F4A" }}>Continued Reading Books</h3>

        <div className="carousel-container">
          <div className="carousel">
            {currentlyReadingBooks.map((book, index) => (
                
              <div className="carousel-item" key={index}>
                <img src={book.image} alt={book.bookName} className="book-cover" />
                
                <h4>{book.bookName}</h4>
                <p>{book.author}</p>
                <div className='btn-grp' style={{ display : "flex" }}>
                <button> <FaBookOpen/> </button>
                </div>
               
              </div>
            ))}
          </div>
          {/* Navigation buttons */}
          <button className="carousel-btn prev-btn" onClick={() => scrollCarousel('prev')}>‹</button>
          <button className="carousel-btn next-btn" onClick={() => scrollCarousel('next')}>›</button>
        </div>
    </div>

    
    <div className="profile-content">
        {/* Button to Open the Modal */}
        {/* Floating Action Button to open the modal */}
        <button className="floating-upload-btn" onClick={handleOpenModal1}>
          <FaFileUpload/>
        </button>
        

        {/* Upload Book Modal */}
        {isModalOpen1 &&(
            <BookUpload isOpen={isModalOpen1} onClose={handleCloseModal1} />

        )}
        <div className="completed-books-modern">
        <h3 style={{ color : "#7D4F4A" }}>Uploaded Books</h3>

        <div className="carousel-container">
          <div className="carousel">
            {books.map((book, index) => (
              <div className="carousel-item"  key={index}>
                <img src={book.image} alt={book.bookName} className="book-cover" />
                <h4>{book.bookName}</h4>
                <p>{book.author}</p>
                <div className='btn-grp' style={{ display : "flex" }}>
                  <button onClick={() => handleEditBook(index, book)}><MdEditSquare /> </button>
                  <button onClick={() => handleDeleteBook(index)}><AiFillDelete /> </button>
                </div>
                
              </div>
            ))}
           
          </div>
          {/* Navigation buttons */}
          <button className="carousel-btn prev-btn" onClick={() => scrollCarousel('prev')}>‹</button>
          <button className="carousel-btn next-btn" onClick={() => scrollCarousel('next')}>›</button>
        </div>
        {isModalOpen && (
        <EditBookModal
          isOpen={true}
          book={editingBook}
          onSave={handleSaveEdit}
          onClose={handleCloseModal}
        />
      )}
    </div>
        <BookStats  />
        <Leaderboard users={[currentUser]} />
        <BookRecommendations books={books} />
    </div>
    
    
    
  </div>
  );
};

export default UserProfile;
