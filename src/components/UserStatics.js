import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import '../styles/UserStatistics.css';



const dataUploaded = [
  { name: 'Books Uploaded', value: 6 },
  { name: 'Pages Uploaded', value: 2094 },
];

const dataRead = [
  { name: 'Books Read', value: 4 },
  { name: 'Pages Read', value: 1200 },
];

const categories = [
  { genre: 'Fiction', value: 3 },
  { genre: 'Non-Fiction', value: 2 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const UserStatistics = () => {
  const [timePeriod, setTimePeriod] = useState('monthly');

  // Sample achievements array
  const achievements = [
    { title: "100 Pages Read", date: "2023-05-12" },
    { title: "5 Books Uploaded", date: "2023-06-01" },
  ];

  // Function to handle time period change
  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  return (
    <div className="user-statistics">
      <h2>User Statistics</h2>

      {/* Time Period Filter */}
      <div className="filter-container">
        <label htmlFor="timePeriod">Select Time Period:</label>
        <select id="timePeriod" value={timePeriod} onChange={handleTimePeriodChange}>
          <option value="weekly">Last Week</option>
          <option value="monthly">Last Month</option>
          <option value="yearly">Last Year</option>
        </select>
      </div>

      <div className="statistics-charts">
        {/* Pie Chart for Uploaded Data */}
        <div className="chart-container">
          <h3>Uploaded Data</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={dataUploaded} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                {dataUploaded.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart for Read Data */}
        <div className="chart-container">
          <h3>Reading Statistics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataRead} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Genre Breakdown Chart */}
        <div className="chart-container">
          <h3>Genre Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={categories} dataKey="value" nameKey="genre" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                {categories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="achievements-section">
        <h3>Achievements</h3>
        {achievements.length === 0 ? (
          <p>No achievements yet!</p>
        ) : (
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>
                {achievement.title} - <span>{achievement.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Activity Feed Section */}
      <div className="activity-feed">
        <h3>Recent Activities</h3>
        <ul>
          <li>Uploaded "The Midnight Library" on 2024-10-01</li>
          <li>Read "Sapiens" on 2024-09-28</li>
          <li>Uploaded "Atomic Habits" on 2024-09-25</li>
        </ul>
      </div>
    </div>
  );
};

export default UserStatistics;