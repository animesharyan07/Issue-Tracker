// src/components/IssueForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const IssueForm = () => {
  const { id } = useParams(); 
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'Open',
    priority: 'Low',
    creationDate: new Date().toISOString().substring(0, 10),
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchIssue = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/issues/${id}`);
          setFormData(response.data);
        } catch (error) {
          console.error('Error fetching issue:', error);
        }
      };

      fetchIssue();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:5000/api/issues/${id}`, formData);
        navigate(`/issue/${id}`);
      } else {
        await axios.post('http://localhost:5000/api/issues', formData);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error saving issue:', error);
    }
  };

  return (
    <div className="issue-form-container">
      <h2>{id ? 'Edit Issue' : 'Create New Issue'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <label>
          Status:
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </label>
        <label>
          Priority:
          <select name="priority" value={formData.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <label>
          Creation Date:
          <input type="date" name="creationDate" value={formData.creationDate} onChange={handleChange} />
        </label>
        <button type="submit">{id ? 'Update Issue' : 'Create Issue'}</button>
      </form>
    </div>
  );
};

export default IssueForm;