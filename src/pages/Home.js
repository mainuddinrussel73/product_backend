import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import BookCard from '../components/BookCard';
import '../styles/BookCard.css';
import '../styles/Home.css';
import '../styles/UsagePage.css'
import login from '../images/signup.png'
import profile from '../images/profile.png'
import search from '../images/search.png'
import review from '../images/rating.png'
import add from '../images/add.png'
import track from '../images/track.png'
import upload from '../images/upload.png'
import logout from '../images/logout.png'



const Home = () => {
  
  const sections = [
    {
      title: 'Sign Up / Log In',
      text: 'Create an account or log in using email, Google, GitHub, or Facebook.',
      image : login
    },
    {
      title: 'Profile Setup',
      text: 'Update your personal information and profile picture in the profile section.',
      image: profile,
    },
    {
      title: 'Browse and Search Books',
      text: 'Search for books by title, author, or genre, or browse recommendations.',
      image: search,
    },
    {
      title: 'Book Details and Reviews',
      text: 'View detailed information, reviews, and ratings of any book.',
      image: review,
    },
    {
      title: 'Add Books to Wish List or Cart',
      text: 'Add books to your wish list or cart for future purchase.',
      image: add,
    },
    {
      title: 'Track Your Reading Progress',
      text: 'Keep track of your current and completed books in the profile section.',
      image: track,
    },
    {
      title: 'Upload a Book',
      text: 'Upload a new book with its details including title, author, and category.',
      image: upload,
    },
    {
      title: 'Logout',
      text: 'Securely log out by selecting the "Logout" option from the profile dropdown.',
      image: logout,
    },
  ];
 
   const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === sections.length - 1 ? 0 : prevSlide + 1));
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? sections.length - 1 : prevSlide - 1));
  };

  // Handle pagination click
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div>
      <Banner />
      
      <div className="carousels-container">
        <h1 className="carousels-title">How to Use Our App</h1>

        <div className="slider" >
          <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {sections.map((section, index) => (
              <div className="slide" key={index}>
                <div style={{ width : "100%" }}>
                <img src={section.image} alt={section.title} className="slide-image" />

                </div>
                <div className="slide-content">
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="prev-btn" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next-btn" onClick={nextSlide}>
          &#10095;
        </button>

        <div className="pagination">
          {sections.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>       
     

    </div>
  );
};

export default Home;
