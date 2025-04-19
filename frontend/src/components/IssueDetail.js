// src/components/IssueDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const IssueDetail = () => {
  const { id } = useParams(); 
  const [issue, setIssue] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/issues/${id}`);
        setIssue(response.data);
      } catch (error) {
        console.error('Error fetching issue:', error);
      }
    };

    fetchIssue();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this issue?')) {
      try {
        await axios.delete(`http://localhost:5000/api/issues/${id}`);
        navigate('/dashboard');
      } catch (error) {
        console.error('Error deleting issue:', error);
      }
    }
  };

  if (!issue) return <p>Loading issue details...</p>;

  return (
    <div>
      <h2>Issue Details</h2>
      <p><strong>ID:</strong> {issue._id}</p>
      <p><strong>Title:</strong> {issue.title}</p>
      <p><strong>Description:</strong> {issue.description}</p>
      <p><strong>Status:</strong> {issue.status}</p>
      <p><strong>Priority:</strong> {issue.priority}</p>
      <p><strong>Creation Date:</strong> {new Date(issue.creationDate).toLocaleDateString()}</p>
      <button  className="edit-button" onClick={() => navigate(`/edit/${id}`)}>Edit</button>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default IssueDetail;