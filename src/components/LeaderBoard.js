import React, { useState, useEffect } from 'react';
import '../styles/Leaderboard.css';

const leaderboardData = [
  // Sample data
  { rank: 1, name: "John Doe", score: 540, booksUploaded: 15, avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
  { rank: 2, name: "Jane Smith", score: 490, booksUploaded: 12, avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
  { rank: 3, name: "Michael Brown", score: 470, booksUploaded: 10, avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
  { rank: 4, name: "Alice Johnson", score: 460, booksUploaded: 9, avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
  // Add more users...
];

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedData, setSortedData] = useState(leaderboardData);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Handle Search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterData(event.target.value);
  };

  const filterData = (searchTerm) => {
    const filteredData = leaderboardData.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSortedData(filteredData);
  };

  // Handle Sorting
  const handleSort = (type) => {
    const sortedArray = [...sortedData].sort((a, b) => {
      if (type === 'score') return b.score - a.score;
      if (type === 'books') return b.booksUploaded - a.booksUploaded;
      return 0;
    });
    setSortedData(sortedArray);
  };

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedData.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">Leaderboard</h2>

      {/* Search and Sort Options */}
      <div className="leaderboard-controls">
        <input
          type="text"
          placeholder="Search by name..."
          className="leaderboard-search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="leaderboard-sort">
          <button onClick={() => handleSort('score')} className="sort-button">Sort by Score</button>
          <button onClick={() => handleSort('books')} className="sort-button">Sort by Books Uploaded</button>
        </div>
      </div>

      <div className="leaderboard">
        {currentUsers.map((user) => (
          <div className="leaderboard-card" key={user.rank}>
            <div className="leaderboard-rank">#{user.rank}</div>
            <div className="leaderboard-user-info">
              <img src={user.avatar} alt={`${user.name}'s Avatar`} className="leaderboard-avatar" />
              <div>
                <h3 className="leaderboard-name">{user.name}</h3>
                <p className="leaderboard-books">Books Uploaded: {user.booksUploaded}</p>
                {/* Progress Bar for Visual Stats */}
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${(user.booksUploaded / 20) * 100}%` }}></div>
                </div>
              </div>
            </div>
            <div className="leaderboard-score">
              <p>Score: <strong>{user.score}</strong></p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(sortedData.length / usersPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className="pagination-button">
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
