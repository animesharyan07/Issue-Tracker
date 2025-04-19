// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/issues');
        setIssues(response.data);
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };
    
    fetchIssues();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Issue Dashboard</h2>
      <Link to="/create" className="link-button">Create New Issue</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Creation Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue._id}>
              <td>{issue._id}</td>
              <td>{issue.title}</td>
              <td>{issue.description.substring(0, 50)}...</td>
              <td>{issue.status}</td>
              <td>{issue.priority}</td>
              <td>{new Date(issue.creationDate).toLocaleDateString()}</td>
              <td>
                <Link to={`/issue/${issue._id}`}>View</Link>
                <Link to={`/edit/${issue._id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;