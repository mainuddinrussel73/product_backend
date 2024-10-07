import React, { useState, useEffect } from 'react';
import { Route, Routes  } from 'react-router-dom';
import { HashRouter as Router, useLocation, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Books from './pages/Books';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import UserProfile from './pages/UserProfile'; // Assuming UserProfile is in components folder

import FAQ from './pages/FAQ';
import BookDetails from './pages/BookDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound'; // 404 Page
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './AuthContext'; // Import AuthProvider

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const blogs = [
    {
      id: 1,
      title: "10 Must-Read Books for the Year",
      description: "Discover the top 10 must-read books this year, spanning across multiple genres and tastes.",
      content: "Lorem ipsum dolor sit amet. Et eveniet nihil qui quibusdam odit ea corporis nostrum et quis magnam. Ut rerum voluptatem sed sint architecto quo voluptas omnis et ratione fugiat sit repellendus quasi vel aspernatur quia. Ab nihil galisum aut nesciunt nulla ut quia veniam sit quidem fugit ea rerum veritatis id fugiat beatae qui sequi galisum. Non harum aspernatur vel corporis corporis hic veniam beatae in fuga magnam eum nesciunt nisi et enim enim et sint dolores. Ut dolorem iure aut veniam omnis est omnis quia et voluptatem architecto sed suscipit dolorum est ipsa voluptates. Aut suscipit enim non perferendis nihil a praesentium galisum. Ut quia voluptates aut nesciunt doloremque est commodi adipisci id praesentium doloribus. Qui libero eaque sed consectetur iste eos iusto dolorem. Aut galisum soluta aut natus molestias sed quaerat voluptas et consequuntur reiciendis eos unde harum a nemo placeat qui nihil molestiae. Nam modi obcaecati et omnis officia aut aliquam iste. Ut soluta suscipit qui temporibus unde aut esse nihil et velit velit ut quia voluptatibus aut soluta nostrum ut inventore eius. Sit quas natus vel sint sint et molestias dolorum est necessitatibus blanditiis. Vel consequatur dolor ut corporis eveniet est quam amet in numquam praesentium et aspernatur rerum. Ut nobis nesciunt et asperiores autem eos autem dolorem.",
      image: "https://schoolreadinglist.co.uk/wp-content/uploads/2022/10/books-for-10-year-olds-ft.jpg",
      date: "Sept 15, 2024",
      author: "Jane Doe",
    },
    {
      id: 2,
      title: "The Power of Reading: How Books Can Change Your Life",
      description: "Explore the transformative power of reading and how it can positively impact your life.",
      content: "Full article content for The Power of Reading...",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*iYopfEgTlmJn-bePPnmj6w.png",
      date: "Sept 12, 2024",
      author: "John Smith",
    },
    {
      id: 3,
      title: "A Guide to Building Your Own Home Library",
      description: "Learn how to curate a personal collection of books and create a space that encourages learning and relaxation.",
      content: "Full article content for A Guide to Building Your Own Home Library...",
      image: "https://www.empatika.uk/wp-content/uploads/2018/10/How-to-create-your-own-quintessential-home-library-1140x900.jpg",
      date: "Sept 8, 2024",
      author: "Emily Clark",
    },
    {
      id : 4,
      title: "How to Start a Book Club: Tips and Tricks",
      author: "Mark Davis",
      date: "2024-03-20",
      image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d",
      description: "Want to start a book club with friends or colleagues? Here are the best tips to get you started and make your meetings more enjoyable.",
      content: "Starting a book club is a great way to connect with others over shared literary interests. In this post, we cover everything from choosing the right book to sparking meaningful conversations during your club meetings..."
    },
    {
      id: 5,
      title: "Exploring the World of Non-Fiction: Best Picks for 2024",
      author: "Emily White",
      date: "2024-04-10",
      image: "https://images.unsplash.com/photo-1534081333815-ae5019106622",
      description: "A curated list of the best non-fiction books to read this year, ranging from memoirs to self-help and history.",
      content: "Non-fiction books provide an opportunity to learn, grow, and understand the world around us in deeper ways. Here’s our list of the best non-fiction books to add to your reading list in 2024..."
    },
    {
      id : 6,
      title: "The Art of Book Collecting: How to Build a Personal Library",
      author: "James O’Connor",
      date: "2024-04-25",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      description: "Learn how to start a personal collection of rare and valuable books, and understand the joy of book collecting.",
      content: "Book collecting is an art form that has fascinated bibliophiles for centuries. Whether you're after first editions or beautifully bound volumes, this post offers practical advice on how to start and grow your own personal library..."
    },
    {
      id: 7,
      title: "How to Read More: Effective Strategies for Busy Readers",
      author: "Olivia Green",
      date: "2024-05-01",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
      description: "Struggling to find time to read? Discover actionable strategies to help you fit more reading into your daily routine.",
      content: "In a world full of distractions, finding time to read can be a challenge. But with the right strategies, you can increase the number of books you read each year. This blog explores practical ways to incorporate more reading into your busy schedule..."
    },
    {
      id: 8,
      title: "The Future of Publishing: How Technology is Changing Books",
      author: "Lucas Williams",
      date: "2024-05-15",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "Explore the impact of digital technology on the book industry and what the future holds for publishers and readers alike.",
      content: "The rise of eBooks, audiobooks, and self-publishing platforms has revolutionized the way we produce and consume books. In this article, we examine the latest technological trends shaping the future of publishing..."
    }
    // More blogs...
  ];

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar/>
          <ToastContainer />
          <Routes>
              {/* Protect login and signup pages */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup  />} />
              <Route path="/forgot-password" element={<ForgotPassword /> } />
          
          
            {/* Protected routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/books"
              element={
                <ProtectedRoute>
                  <Books />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog"
              element={
                <ProtectedRoute>
                  <Blog />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <ProtectedRoute>
                  <BlogDetails blogs={blogs}/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/book/:bookId"
              element={
                <ProtectedRoute>
                  <BookDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/faq"
              element={
                <ProtectedRoute>
                  <FAQ />
                </ProtectedRoute>
              }
            />
            {/* Catch all for 404 */}
            <Route path="*" element={<NotFound />} />
            
          </Routes>
          <Footer/>
        </AuthProvider>
     </Router>
     
    </div>
  );
}





export default App;
