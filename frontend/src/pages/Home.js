import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>MERN Task Manager</h1>
        <p>A production-ready task management application</p>
      </header>
      
      <div className="home-content">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>📋 Task Management</h3>
            <p>Create, update, and track your tasks efficiently</p>
          </div>
          
          <div className="feature-card">
            <h3>🚀 Production Ready</h3>
            <p>Built with DevOps best practices and CI/CD</p>
          </div>
          
          <div className="feature-card">
            <h3>📊 Monitoring</h3>
            <p>Real-time monitoring and error tracking</p>
          </div>
          
          <div className="feature-card">
            <h3>⚡ Performance</h3>
            <p>Optimized with code splitting and caching</p>
          </div>
        </div>
        
        <div className="cta-buttons">
          <Link to="/tasks" className="btn btn-primary">View Tasks</Link>
          <Link to="/create" className="btn btn-secondary">Create Task</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
