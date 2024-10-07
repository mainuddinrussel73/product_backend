import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import '../styles/BookCard.css';

const Books = () => {
    const [books, setBooks] = useState([]);
    const url = "https://product-details-8ym3.onrender.com/api/products";
  
    const getData=()=>{
        fetch(url)
        .then(response => response.json())
        .then(data => {
          setBooks(data);
          console.log(data)
        }
          );
    }
    useEffect(() => {
        getData();
    }, []);
    
       // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12); // Number of books per page
     
       // Calculate total pages
    const totalPages = Math.ceil(books.length / itemsPerPage);
     
       // Calculate the index of the first and last book on the current page
    const indexOfLastBook = currentPage * itemsPerPage;
    const indexOfFirstBook = indexOfLastBook - itemsPerPage;
     
       // Get current books
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
     
       // Handle page change
    const handlePageChange = (pageNumber) => {
         setCurrentPage(pageNumber);
    };
     
       // Handle next and previous buttons
    const handleNextPage = () => {
         if (currentPage < totalPages) {
           setCurrentPage(currentPage + 1);
         }
    };
     
    const handlePreviousPage = () => {
         if (currentPage > 1) {
           setCurrentPage(currentPage - 1);
         }
    };
     
       // Handle items per page change
    const handleItemsPerPageChange = (event) => {
         setItemsPerPage(Number(event.target.value));
         setCurrentPage(1); // Reset to first page when items per page changes
    };

    return(
       <div>
             <section className="book-section">
                <div className='book-section-div' >
                <div> 
                    <h2 className='book-section-title'>Our Books</h2>
                </div>
                {/* Items per page selector */}
                <div className="items-per-page">
                    <label htmlFor="itemsPerPage">Items per page:</label>
                    <select id="itemsPerPage" value={itemsPerPage} onChange={handleItemsPerPageChange}>
                    <option value={6}>6</option>
                    <option value={12}>12</option>
                    <option value={18}>18</option>
                    <option value={24}>24</option>
                    </select>
                </div>
                </div>
            
                <div className="book-card-grid" style={{ margin : "20px" }}>
                {currentBooks.map(book => (
                    <BookCard key={book.bookId} book={book} />
                ))}
                </div>
            </section>
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                >
                    {index + 1}
                </button>
                ))}

                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next
                </button>
            </div>
       </div>
    )


}

export default Books;
