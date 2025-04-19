// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import IssueDetail from './components/IssueDetail';
import IssueForm from './components/IssueForm';
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  return (
    
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/issue/:id" element={<IssueDetail />} />
          <Route path="/create" element={<IssueForm />} />
          <Route path="/edit/:id" element={<IssueForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;