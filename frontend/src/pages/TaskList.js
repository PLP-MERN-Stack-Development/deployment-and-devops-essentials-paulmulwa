import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { taskAPI } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import './TaskList.css';

const TaskList = () => {
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    page: 1,
  });

  const { data, isLoading, error, refetch } = useQuery(
    ['tasks', filters],
    () => taskAPI.getTasks(filters),
    {
      keepPreviousData: true,
    }
  );

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await taskAPI.deleteTask(id);
        refetch();
      } catch (err) {
        alert('Failed to delete task');
      }
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value, page: 1 }));
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="error">Error loading tasks: {error.message}</div>;

  const tasks = data?.data?.data || [];
  const pagination = {
    page: data?.data?.page || 1,
    pages: data?.data?.pages || 1,
  };

  // Calculate task statistics
  const stats = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'pending').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
    highPriority: tasks.filter(t => t.priority === 'high').length,
  };

  return (
    <div className="task-list-page">
      <header className="page-header">
        <h1>Tasks</h1>
        <Link to="/create" className="btn btn-primary">Create New Task</Link>
      </header>

      {/* Task Statistics */}
      <div className="task-stats">
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-info">
            <div className="stat-value">{stats.total}</div>
            <div className="stat-label">Total Tasks</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-info">
            <div className="stat-value">{stats.pending}</div>
            <div className="stat-label">Pending</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🚀</div>
          <div className="stat-info">
            <div className="stat-value">{stats.inProgress}</div>
            <div className="stat-label">In Progress</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <div className="stat-value">{stats.completed}</div>
            <div className="stat-label">Completed</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🔴</div>
          <div className="stat-info">
            <div className="stat-value">{stats.highPriority}</div>
            <div className="stat-label">High Priority</div>
          </div>
        </div>
      </div>

      <div className="filters">
        <select
          value={filters.status}
          onChange={(e) => handleFilterChange('status', e.target.value)}
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <select
          value={filters.priority}
          onChange={(e) => handleFilterChange('priority', e.target.value)}
        >
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="task-grid">
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks found. Create your first task!</p>
        ) : (
          tasks.map((task) => (
            <div key={task._id} className={`task-card ${task.status}`}>
              <div className="task-header">
                <h3>{task.title}</h3>
                <span className={`priority-badge ${task.priority}`}>
                  {task.priority}
                </span>
              </div>
              <p className="task-description">{task.description || 'No description'}</p>
              <div className="task-meta">
                <span className={`status-badge ${task.status}`}>{task.status}</span>
                {task.dueDate && (
                  <span className="due-date">
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                )}
              </div>
              <div className="task-actions">
                <Link to={`/tasks/${task._id}`} className="btn-link">View</Link>
                <button onClick={() => handleDelete(task._id)} className="btn-delete">
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {pagination.pages > 1 && (
        <div className="pagination">
          <button
            disabled={pagination.page === 1}
            onClick={() => handleFilterChange('page', pagination.page - 1)}
          >
            Previous
          </button>
          <span>
            Page {pagination.page} of {pagination.pages}
          </span>
          <button
            disabled={pagination.page === pagination.pages}
            onClick={() => handleFilterChange('page', pagination.page + 1)}
          >
            Next
          </button>
        </div>
      )}

      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
};

export default TaskList;
