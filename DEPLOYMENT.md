# Deployment Guide

This guide provides detailed instructions for deploying the MERN Task Manager application to various cloud platforms.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [MongoDB Atlas Setup](#mongodb-atlas-setup)
3. [Backend Deployment](#backend-deployment)
4. [Frontend Deployment](#frontend-deployment)
5. [Environment Configuration](#environment-configuration)
6. [Post-Deployment](#post-deployment)

## Prerequisites

Before deploying, ensure you have:

- [ ] Git repository with your code
- [ ] GitHub account
- [ ] MongoDB Atlas account (for database)
- [ ] Render/Railway/Heroku account (for backend)
- [ ] Vercel/Netlify account (for frontend)
- [ ] All environment variables configured

## MongoDB Atlas Setup

### Step 1: Create a Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Click "Build a Database"
4. Choose "Shared" (free tier)
5. Select your preferred cloud provider and region
6. Click "Create Cluster"

### Step 2: Configure Database Access

1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Create a username and password
4. Set privileges to "Read and write to any database"
5. Click "Add User"

### Step 3: Configure Network Access

1. Go to "Network Access"
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. Or add specific IPs (for production)
5. Click "Confirm"

### Step 4: Get Connection String

1. Go to "Databases"
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Save this as `MONGODB_URI` for your environment variables

## Backend Deployment

### Option 1: Deploy to Render

#### Step 1: Prepare Your Repository

Ensure `render.yaml` is in your repository root.

#### Step 2: Create Render Account

1. Go to [Render](https://render.com)
2. Sign up with GitHub
3. Authorize Render to access your repositories

#### Step 3: Create New Web Service

1. Click "New +" and select "Web Service"
2. Connect your GitHub repository
3. Configure the service:
   - **Name:** `mern-backend`
   - **Environment:** Node
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && npm start`
   - **Plan:** Free

#### Step 4: Add Environment Variables

Add these environment variables:

```
NODE_ENV=production
MONGODB_URI=your_mongodb_connection_string
FRONTEND_URL=https://your-frontend-url.vercel.app
SENTRY_DSN=your_sentry_dsn (optional)
LOG_LEVEL=info
```

#### Step 5: Deploy

1. Click "Create Web Service"
2. Wait for the build to complete
3. Your backend will be available at `https://your-app-name.onrender.com`

### Option 2: Deploy to Railway

#### Step 1: Install Railway CLI

```bash
npm install -g @railway/cli
```

#### Step 2: Login to Railway

```bash
railway login
```

#### Step 3: Initialize Project

```bash
railway init
```

#### Step 4: Deploy

```bash
cd backend
railway up
```

#### Step 5: Set Environment Variables

```bash
railway variables set MONGODB_URI="your_connection_string"
railway variables set NODE_ENV="production"
railway variables set FRONTEND_URL="https://your-frontend-url.com"
```

### Option 3: Deploy to Heroku

#### Step 1: Install Heroku CLI

Download from [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

#### Step 2: Login

```bash
heroku login
```

#### Step 3: Create Heroku App

```bash
heroku create your-app-name
```

#### Step 4: Set Environment Variables

```bash
heroku config:set MONGODB_URI="your_connection_string"
heroku config:set NODE_ENV=production
heroku config:set FRONTEND_URL="https://your-frontend-url.com"
```

#### Step 5: Deploy

```bash
git push heroku main
```

## Frontend Deployment

### Option 1: Deploy to Vercel

#### Step 1: Install Vercel CLI (Optional)

```bash
npm install -g vercel
```

#### Step 2: Deploy via GitHub

1. Go to [Vercel](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Configure:
   - **Framework Preset:** Create React App
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`

#### Step 3: Add Environment Variables

```
REACT_APP_API_URL=https://your-backend-url.onrender.com/api
REACT_APP_SENTRY_DSN=your_sentry_dsn (optional)
```

#### Step 4: Deploy

Click "Deploy" and wait for completion.

#### Alternative: CLI Deployment

```bash
cd frontend
vercel --prod
```

### Option 2: Deploy to Netlify

#### Step 1: Install Netlify CLI (Optional)

```bash
npm install -g netlify-cli
```

#### Step 2: Deploy via GitHub

1. Go to [Netlify](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Configure:
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `frontend/build`

#### Step 3: Add Environment Variables

Go to Site settings → Environment variables:

```
REACT_APP_API_URL=https://your-backend-url.onrender.com/api
REACT_APP_SENTRY_DSN=your_sentry_dsn
```

#### Step 4: Deploy

The site will auto-deploy on every push to main.

#### Alternative: CLI Deployment

```bash
cd frontend
netlify deploy --prod
```

### Option 3: Deploy to GitHub Pages

#### Step 1: Install gh-pages

```bash
cd frontend
npm install --save-dev gh-pages
```

#### Step 2: Update package.json

Add to `frontend/package.json`:

```json
{
  "homepage": "https://your-username.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

#### Step 3: Deploy

```bash
npm run deploy
```

## Environment Configuration

### Development Environment

**Backend (.env)**
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-app
FRONTEND_URL=http://localhost:3000
LOG_LEVEL=debug
```

**Frontend (.env)**
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Production Environment

**Backend**
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/prod-db
FRONTEND_URL=https://your-app.vercel.app
LOG_LEVEL=info
SENTRY_DSN=https://xxx@sentry.io/xxx
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

**Frontend**
```env
REACT_APP_API_URL=https://your-backend.onrender.com/api
REACT_APP_SENTRY_DSN=https://xxx@sentry.io/xxx
```

### Staging Environment

Create separate environment variables for staging:

**Backend**
```env
NODE_ENV=staging
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/staging-db
FRONTEND_URL=https://staging-app.vercel.app
```

## Post-Deployment

### 1. Verify Deployment

Run health checks:

```bash
# Check backend
curl https://your-backend-url.com/api/health

# Check frontend
curl https://your-frontend-url.com
```

### 2. Test Functionality

- [ ] Frontend loads correctly
- [ ] Can create tasks
- [ ] Can view tasks
- [ ] Can update tasks
- [ ] Can delete tasks
- [ ] Pagination works
- [ ] Filtering works

### 3. Monitor Logs

**Render:**
```bash
# View logs in dashboard or CLI
render logs
```

**Heroku:**
```bash
heroku logs --tail
```

**Vercel:**
```bash
vercel logs
```

### 4. Set Up Custom Domain (Optional)

#### For Backend (Render)

1. Go to your service dashboard
2. Click on "Settings"
3. Scroll to "Custom Domain"
4. Add your domain and configure DNS

#### For Frontend (Vercel)

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Configure DNS as instructed

### 5. Enable HTTPS

All platforms (Render, Vercel, Netlify, Heroku) provide automatic HTTPS certificates. Ensure your deployment is using HTTPS URLs.

### 6. Set Up Monitoring

1. **Error Tracking:** Configure Sentry
2. **Uptime Monitoring:** Use UptimeRobot or similar
3. **Performance:** Enable Vercel Analytics or similar

## Continuous Deployment

### GitHub Actions

The repository includes GitHub Actions workflows that automatically:

1. Run tests on every push
2. Deploy to staging on push to `develop`
3. Deploy to production on push to `main`

To enable:

1. Add secrets to GitHub repository:
   - `MONGODB_URI`
   - `SENTRY_DSN`
   - Platform-specific deployment tokens

2. Push to respective branches to trigger deployment

## Rollback Procedure

### Render

1. Go to service dashboard
2. Click "Deploys"
3. Find previous successful deploy
4. Click "Rollback to this version"

### Vercel

1. Go to project deployments
2. Find previous deployment
3. Click "Promote to Production"

### Heroku

```bash
# View releases
heroku releases

# Rollback to previous release
heroku rollback v123
```

## Troubleshooting

### Backend Issues

**Problem: Application crashes on startup**
- Check environment variables
- Verify MongoDB connection string
- Check logs for specific errors

**Problem: CORS errors**
- Verify `FRONTEND_URL` is set correctly
- Check CORS configuration in `server.js`

### Frontend Issues

**Problem: API calls failing**
- Verify `REACT_APP_API_URL` is correct
- Check network tab in browser dev tools
- Ensure backend is running

**Problem: Build fails**
- Check build logs
- Verify all dependencies are installed
- Check for environment variable issues

## Support

For issues or questions:
- Check the main README.md
- Review GitHub Issues
- Contact: your-email@example.com

---

**Last Updated:** November 2025
