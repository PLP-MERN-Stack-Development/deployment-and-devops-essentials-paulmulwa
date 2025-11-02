import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Task API methods
export const taskAPI = {
  // Get all tasks
  getTasks: (params = {}) => {
    // Remove empty string values from params
    const cleanParams = Object.entries(params).reduce((acc, [key, value]) => {
      if (value !== '' && value !== null && value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    return api.get('/tasks', { params: cleanParams });
  },

  // Get single task
  getTask: (id) => api.get(`/tasks/${id}`),

  // Create task
  createTask: (data) => api.post('/tasks', data),

  // Update task
  updateTask: (id, data) => api.put(`/tasks/${id}`, data),

  // Delete task
  deleteTask: (id) => api.delete(`/tasks/${id}`),

  // Get task statistics
  getStats: () => api.get('/tasks/stats/overview'),
};

// Health check
export const healthAPI = {
  checkHealth: () => api.get('/health'),
  checkDetailedHealth: () => api.get('/health/detailed'),
};

export default api;
