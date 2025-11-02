import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { taskAPI } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import './TaskDetail.css';

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery(['task', id], () =>
    taskAPI.getTask(id)
  );

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await taskAPI.deleteTask(id);
        navigate('/tasks');
      } catch (err) {
        alert('Failed to delete task');
      }
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="error">Error loading task: {error.message}</div>;

  const task = data?.data?.data;

  if (!task) return <div className="error">Task not found</div>;

  return (
    <div className="task-detail-page">
      <div className="task-detail-container">
        <div className="task-detail-header">
          <h1>{task.title}</h1>
          <div className="badges">
            <span className={`priority-badge ${task.priority}`}>
              {task.priority}
            </span>
            <span className={`status-badge ${task.status}`}>
              {task.status}
            </span>
          </div>
        </div>

        <div className="task-detail-body">
          <div className="detail-section">
            <h3>Description</h3>
            <p>{task.description || 'No description provided'}</p>
          </div>

          <div className="detail-section">
            <h3>Details</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Status:</span>
                <span className="detail-value">{task.status}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Priority:</span>
                <span className="detail-value">{task.priority}</span>
              </div>
              {task.dueDate && (
                <div className="detail-item">
                  <span className="detail-label">Due Date:</span>
                  <span className="detail-value">
                    {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                </div>
              )}
              <div className="detail-item">
                <span className="detail-label">Created:</span>
                <span className="detail-value">
                  {new Date(task.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Updated:</span>
                <span className="detail-value">
                  {new Date(task.updatedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="task-detail-actions">
          <button onClick={handleDelete} className="btn btn-danger">
            Delete Task
          </button>
          <Link to="/tasks" className="btn btn-secondary">
            Back to Tasks
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
