# MERN Stack Task Manager - Week 7 Assignment

A full-stack MERN (MongoDB, Express.js, React, Node.js) application with production-ready DevOps practices, CI/CD pipelines, and comprehensive monitoring.

## 📸 Screenshots

### CI/CD Pipeline
![CI/CD Pipeline](docs/screenshots/s3.png)

### Application Dashboard
![Dashboard](docs/screenshots/s4.png)
## 🌐 Live Deployment

- **Frontend:** [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)
- **Backend API:** [https://your-backend-url.render.com/api](https://your-backend-url.render.com/api)
- **API Documentation:** [https://your-backend-url.render.com/api-docs](https://your-backend-url.render.com/api-docs)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [CI/CD Pipeline](#cicd-pipeline)
- [Monitoring](#monitoring)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Maintenance](#maintenance)
- [Troubleshooting](#troubleshooting)

## ✨ Features

### Core Functionality
- ✅ Create, read, update, and delete tasks
- ✅ Filter tasks by status and priority
- ✅ Pagination for large task lists
- ✅ Task statistics and analytics
- ✅ Due date tracking with overdue detection

### Production Features
- 🔒 Secure HTTP headers with Helmet
- 🚦 Rate limiting to prevent abuse
- 📝 Comprehensive logging with Winston
- 🔍 Error tracking with Sentry
- 💾 MongoDB connection pooling
- ⚡ Response compression
- 🎯 Input validation
- 🏥 Health check endpoints
- 📊 Performance monitoring

### DevOps & Deployment
- 🚀 CI/CD with GitHub Actions
- 🐳 Docker containerization
- ☁️ Cloud deployment configurations (Render, Vercel, Netlify, Heroku)
- 📦 Automated testing and linting
- 🔄 Rollback strategies
- 📈 Application monitoring

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with hooks
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching
- **Axios** - HTTP client
- **Sentry** - Error tracking
- **Web Vitals** - Performance monitoring

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Winston** - Logging
- **Helmet** - Security headers
- **Morgan** - HTTP request logger
- **Express Validator** - Input validation

### DevOps
- **GitHub Actions** - CI/CD
- **Docker** - Containerization
- **Nginx** - Reverse proxy
- **Jest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 🏗️ Architecture

```
mern-app/
├── backend/                 # Express.js backend
│   ├── config/             # Configuration files
│   ├── middleware/         # Express middleware
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── tests/              # Backend tests
│   └── server.js           # Entry point
├── frontend/               # React frontend
│   ├── public/            # Static files
│   └── src/
│       ├── components/    # React components
│       ├── pages/         # Page components
│       ├── services/      # API services
│       └── App.js         # Main app component
├── .github/
│   └── workflows/         # GitHub Actions workflows
├── scripts/               # Deployment scripts
├── docker-compose.yml     # Docker composition
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mern-app.git
   cd mern-app
   ```

2. **Run setup script**
   ```bash
   # On Unix/Linux/macOS
   chmod +x scripts/setup.sh
   ./scripts/setup.sh

   # On Windows
   scripts\setup.bat
   ```

3. **Configure environment variables**
   
   Update the `.env` files in the root, backend, and frontend directories:
   
   ```bash
   # Root .env
   cp .env.example .env
   
   # Backend .env
   cp backend/.env.example backend/.env
   
   # Frontend .env
   cp frontend/.env.example frontend/.env
   ```

4. **Start MongoDB**
   
   Option 1: Local MongoDB
   ```bash
   mongod
   ```
   
   Option 2: Use MongoDB Atlas (update MONGODB_URI in backend/.env)

5. **Start the application**
   ```bash
   # Development mode (both frontend and backend)
   npm run dev
   
   # Or start separately
   npm run server   # Backend only
   npm run client   # Frontend only
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api
   - Health Check: http://localhost:5000/api/health

## 💻 Development

### Project Structure

```
Backend Structure:
backend/
├── config/
│   └── logger.js          # Winston logger configuration
├── middleware/
│   └── errorHandler.js    # Global error handler
├── models/
│   └── Task.js           # Task model
├── routes/
│   ├── tasks.js          # Task routes
│   └── health.js         # Health check routes
└── server.js             # Server setup

Frontend Structure:
frontend/src/
├── components/
│   ├── ErrorBoundary.js  # Error boundary
│   └── LoadingSpinner.js # Loading component
├── pages/
│   ├── Home.js           # Home page
│   ├── TaskList.js       # Task list page
│   ├── TaskDetail.js     # Task detail page
│   ├── CreateTask.js     # Create task page
│   └── NotFound.js       # 404 page
├── services/
│   └── api.js            # API client
└── App.js                # Main application
```

### Running Tests

```bash
# Run all tests
npm test

# Backend tests only
cd backend && npm test

# Frontend tests only
cd frontend && npm test

# With coverage
npm test -- --coverage
```

### Linting

```bash
# Lint all code
npm run lint

# Lint backend
cd backend && npm run lint

# Lint frontend
cd frontend && npm run lint
```

## 🌐 Deployment

### Option 1: Deploy with Docker

```bash
# Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

### Option 2: Deploy Backend to Render

1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Use the following settings:
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && npm start`
   - **Environment Variables:** Add all variables from `backend/.env.example`

Or use the `render.yaml` configuration file for automatic deployment.

### Option 3: Deploy Frontend to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd frontend
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Option 4: Deploy Frontend to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd frontend
netlify deploy --prod
```

Or use the `netlify.toml` configuration for automatic deployments.

### Option 5: Deploy to Heroku

```bash
# Login to Heroku
heroku login

# Create Heroku app
heroku create your-app-name

# Add MongoDB addon (or use Atlas)
heroku addons:create mongolab

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set FRONTEND_URL=https://your-frontend-url.com

# Deploy
git push heroku main
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflows

1. **CI/CD Pipeline** (`.github/workflows/ci-cd.yml`)
   - Runs on push to main/develop branches
   - Backend testing with MongoDB service
   - Frontend testing and building
   - Security scanning
   - Automated deployment to staging/production

2. **Code Quality** (`.github/workflows/code-quality.yml`)
   - ESLint checking
   - Prettier formatting check
   - Runs on all pull requests

### Pipeline Stages

```
┌─────────────┐
│   Trigger   │ (Push/PR to main/develop)
└──────┬──────┘
       │
       ├──────────────────────┬──────────────────────┬─────────────────┐
       ▼                      ▼                      ▼                 ▼
┌─────────────┐        ┌─────────────┐       ┌─────────────┐  ┌─────────────┐
│  Backend    │        │  Frontend   │       │   Code      │  │  Security   │
│  Tests      │        │  Tests      │       │   Quality   │  │   Scan      │
└──────┬──────┘        └──────┬──────┘       └─────────────┘  └─────────────┘
       │                      │
       └──────────┬───────────┘
                  ▼
           ┌─────────────┐
           │   Deploy    │
           │  Staging    │ (develop branch)
           └─────────────┘
                  │
                  ▼
           ┌─────────────┐
           │   Deploy    │
           │ Production  │ (main branch)
           └─────────────┘
```

### Setting Up CI/CD

1. **Enable GitHub Actions** in your repository settings
2. **Add secrets** in repository settings:
   - `MONGODB_URI`
   - `SENTRY_DSN`
   - Any deployment-specific tokens

## 📊 Monitoring

### Health Checks

The application provides multiple health check endpoints:

- **Basic Health:** `GET /api/health`
- **Detailed Health:** `GET /api/health/detailed`
- **Readiness Probe:** `GET /api/health/ready`
- **Liveness Probe:** `GET /api/health/live`

### Error Tracking with Sentry

1. Create a Sentry account at [sentry.io](https://sentry.io)
2. Create a new project for your application
3. Copy the DSN and add to environment variables:
   - `SENTRY_DSN` for backend
   - `REACT_APP_SENTRY_DSN` for frontend

### Performance Monitoring

- **Backend:** Winston logging to files
- **Frontend:** Web Vitals metrics
- **Database:** MongoDB Atlas monitoring (if using Atlas)

### Logs

```bash
# View backend logs
tail -f backend/logs/combined.log

# View error logs
tail -f backend/logs/error.log

# Docker logs
docker-compose logs -f backend
```

## 📖 API Documentation

### Base URL
- Development: `http://localhost:5000/api`
- Production: `https://your-backend-url.com/api`

### Endpoints

#### Tasks

- **GET /tasks** - Get all tasks
  - Query params: `status`, `priority`, `page`, `limit`, `sort`
  - Response: Paginated list of tasks

- **GET /tasks/:id** - Get task by ID
  - Response: Single task object

- **POST /tasks** - Create new task
  - Body: `{ title, description, status, priority, dueDate }`
  - Response: Created task

- **PUT /tasks/:id** - Update task
  - Body: Task fields to update
  - Response: Updated task

- **DELETE /tasks/:id** - Delete task
  - Response: Success message

- **GET /tasks/stats/overview** - Get task statistics
  - Response: Statistics by status and priority

#### Health

- **GET /health** - Basic health check
- **GET /health/detailed** - Detailed health information
- **GET /health/ready** - Readiness probe
- **GET /health/live** - Liveness probe

## 🔐 Environment Variables

### Backend (.env)

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
FRONTEND_URL=https://your-frontend.com
LOG_LEVEL=info
SENTRY_DSN=https://xxx@sentry.io/xxx
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend (.env)

```env
REACT_APP_API_URL=https://your-backend.com/api
REACT_APP_SENTRY_DSN=https://xxx@sentry.io/xxx
REACT_APP_ANALYTICS_ENDPOINT=https://analytics.example.com
```

## 📜 Scripts

### Deployment Scripts

```bash
# Setup development environment
./scripts/setup.sh

# Deploy to production
./scripts/deploy.sh

# Run health checks
./scripts/health-check.sh http://localhost:5000/api http://localhost:3000

# Rollback to previous version
./scripts/rollback.sh

# Backup database
./scripts/backup-db.sh
```

### NPM Scripts

```bash
# Root package.json
npm run dev          # Start both frontend and backend
npm run server       # Start backend only
npm run client       # Start frontend only
npm run build        # Build both applications
npm test            # Run all tests
npm run lint        # Lint all code

# Backend package.json
npm start           # Start production server
npm run dev         # Start with nodemon
npm test           # Run tests with coverage

# Frontend package.json
npm start          # Start development server
npm run build      # Build for production
npm test          # Run tests
npm run analyze   # Analyze bundle size
```

## 🔧 Maintenance

### Regular Updates

1. **Weekly:**
   - Review error logs
   - Check application health
   - Review security alerts

2. **Monthly:**
   - Update dependencies: `npm update`
   - Review and update documentation
   - Database optimization

3. **Quarterly:**
   - Major dependency updates
   - Security audit: `npm audit`
   - Performance review

### Database Backups

```bash
# Manual backup
./scripts/backup-db.sh

# Automated backups (add to cron)
0 2 * * * /path/to/scripts/backup-db.sh
```

### Rollback Procedure

1. Check the current deployment status
2. Run rollback script: `./scripts/rollback.sh`
3. Verify application health: `./scripts/health-check.sh`
4. Monitor logs for errors

## 🐛 Troubleshooting

### Common Issues

**Issue: MongoDB connection failed**
```bash
# Check MongoDB status
mongod --version

# Verify connection string in .env
# For Atlas: Ensure IP whitelist is configured
```

**Issue: Port already in use**
```bash
# Find process using port 5000
lsof -ti:5000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :5000   # Windows

# Or change PORT in backend/.env
```

**Issue: Frontend can't connect to backend**
```bash
# Check CORS configuration in backend/server.js
# Verify REACT_APP_API_URL in frontend/.env
# Ensure backend is running
```

**Issue: Build fails**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear npm cache
npm cache clean --force
```

## 📸 Screenshots

### CI/CD Pipeline
![CI/CD Pipeline](docs/screenshots/s3.png)

### Application Dashboard
![Dashboard](docs/screenshots/s4.png)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

Your Name - [GitHub](https://github.com/your-username)

## 🙏 Acknowledgments

- Week 7 Assignment - Deployment and DevOps Essentials
- MERN Stack community
- All open-source contributors

---

**Note:** This is a educational project demonstrating production-ready MERN stack deployment with DevOps best practices.
