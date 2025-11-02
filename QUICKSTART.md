# Quick Start Guide

Get your MERN Task Manager up and running in 5 minutes!

## Prerequisites

Ensure you have installed:
- Node.js (v18 or higher)
- MongoDB (local or Atlas account)
- Git

## Step 1: Clone and Setup

```bash
# Clone the repository
git clone https://github.com/your-username/mern-app.git
cd mern-app

# Run the setup script
# On Unix/Linux/macOS:
chmod +x scripts/setup.sh
./scripts/setup.sh

# On Windows:
scripts\setup.bat
```

## Step 2: Configure Environment Variables

### Backend Configuration

Edit `backend/.env`:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-app
FRONTEND_URL=http://localhost:3000
LOG_LEVEL=debug
```

**Using MongoDB Atlas?** Replace `MONGODB_URI` with your Atlas connection string:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```

### Frontend Configuration

Edit `frontend/.env`:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## Step 3: Start the Application

### Option 1: Run Everything Together

```bash
npm run dev
```

This starts:
- Backend on http://localhost:5000
- Frontend on http://localhost:3000

### Option 2: Run Separately

**Terminal 1 - Backend:**
```bash
cd backend
npm install
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm start
```

### Option 3: Using Docker

```bash
docker-compose up
```

## Step 4: Test the Application

Open your browser and navigate to:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api
- **Health Check:** http://localhost:5000/api/health

## Common Tasks

### Create Your First Task

1. Click "Create New Task" button
2. Fill in the task details
3. Click "Create Task"

### View All Tasks

Navigate to the "Tasks" page to see all your tasks with filtering and pagination.

### API Testing

Using curl:
```bash
# Get all tasks
curl http://localhost:5000/api/tasks

# Create a task
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"My First Task","priority":"high"}'
```

Using Postman or any API client:
- Import the API endpoints
- Test CRUD operations

## Troubleshooting

### MongoDB Connection Error

**Problem:** `MongooseServerSelectionError: connect ECONNREFUSED`

**Solution:**
- Ensure MongoDB is running: `mongod` or use MongoDB Atlas
- Check your `MONGODB_URI` in `backend/.env`

### Port Already in Use

**Problem:** `Error: listen EADDRINUSE: address already in use :::5000`

**Solution:**
```bash
# Find and kill the process (Unix/macOS/Linux)
lsof -ti:5000 | xargs kill -9

# Or change the port in backend/.env
PORT=5001
```

### Frontend Can't Connect to Backend

**Problem:** Network errors in browser console

**Solution:**
- Ensure backend is running on port 5000
- Check `REACT_APP_API_URL` in `frontend/.env`
- Verify CORS settings in `backend/server.js`

## Next Steps

- [ ] Explore the application features
- [ ] Review the API documentation in README.md
- [ ] Set up Sentry for error tracking (optional)
- [ ] Deploy to production (see DEPLOYMENT.md)
- [ ] Configure CI/CD (see README.md)

## Quick Commands Reference

```bash
# Development
npm run dev              # Run both frontend and backend
npm run server          # Run backend only
npm run client          # Run frontend only

# Testing
npm test                # Run all tests
cd backend && npm test  # Backend tests
cd frontend && npm test # Frontend tests

# Building
npm run build           # Build for production

# Docker
docker-compose up       # Start with Docker
docker-compose down     # Stop Docker containers

# Scripts
./scripts/health-check.sh     # Check application health
./scripts/deploy.sh          # Deploy to production
./scripts/backup-db.sh       # Backup database
```

## Resources

- **Full Documentation:** [README.md](README.md)
- **Deployment Guide:** [DEPLOYMENT.md](DEPLOYMENT.md)
- **Maintenance Plan:** [MAINTENANCE.md](MAINTENANCE.md)
- **Contributing:** [CONTRIBUTING.md](CONTRIBUTING.md)

## Get Help

- Check the troubleshooting section in README.md
- Open an issue on GitHub
- Review existing issues and discussions

---

Happy coding! 🚀
