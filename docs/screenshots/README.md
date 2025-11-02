# Screenshots Directory

This directory contains screenshots demonstrating the MERN Task Manager application deployment and CI/CD pipeline.

## 📸 What Screenshots to Include

### 1. **CI/CD Pipeline** (REQUIRED - Most Important!)

#### `01-github-actions-overview.png`
**What:** GitHub Actions tab showing workflow runs
**How to capture:**
1. Go to: https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-paulmulwa/actions
2. Screenshot showing both workflows (CI/CD Pipeline & Code Quality)
3. Show green checkmarks or any runs that executed

#### `02-cicd-workflow-details.png`
**What:** Inside a workflow run showing all jobs
**How to capture:**
1. Click on any workflow run from the Actions tab
2. Screenshot showing all jobs (backend-test, frontend-test, security-scan, deploy)
3. Show job status and execution time

#### `03-test-results.png`
**What:** Test execution results
**How to capture:**
1. Click into a job (like "backend-test" or "frontend-test")
2. Screenshot showing test output and pass/fail status

---

### 2. **Running Application** (RECOMMENDED)

#### `04-frontend-homepage.png`
**What:** React app homepage
**How to capture:**
- Visit http://localhost:3000 (or your deployed URL)
- Screenshot the homepage showing the gradient background and feature cards
- **Make sure the URL bar is visible!**

#### `05-task-list-page.png`
**What:** Task list with your improved UI
**How to capture:**
- Navigate to http://localhost:3000/tasks
- Screenshot showing:
  - Statistics cards at the top
  - Filters section
  - Task cards with your beautiful gradient design
  - URL bar visible

#### `06-create-task-form.png`
**What:** Create task page
**How to capture:**
- Navigate to http://localhost:3000/create
- Screenshot the form

---

### 3. **Backend API** (RECOMMENDED)

#### `07-api-health-check.png`
**What:** Health endpoint response
**How to capture:**
- Use Postman, Thunder Client, or browser
- GET request to: `http://localhost:5000/api/health`
- Screenshot showing JSON response with status, uptime, environment

#### `08-api-tasks-response.png`
**What:** Tasks endpoint showing data
**How to capture:**
- GET request to: `http://localhost:5000/api/tasks`
- Screenshot showing the JSON response with your tasks

---

### 4. **MongoDB Atlas** (RECOMMENDED)

#### `09-mongodb-atlas-cluster.png`
**What:** MongoDB Atlas dashboard
**How to capture:**
1. Log into MongoDB Atlas
2. Screenshot your cluster overview
3. Show cluster name and status

#### `10-mongodb-collections.png`
**What:** Database collections
**How to capture:**
1. Click "Browse Collections" in MongoDB Atlas
2. Screenshot showing the `tasks` collection
3. Show some task documents

---

### 5. **Deployment Platforms** (If Deployed)

#### `11-backend-deployment.png`
**What:** Backend hosting platform (Render/Railway/Heroku)
**If deployed:** Screenshot dashboard showing service status

#### `12-frontend-deployment.png`
**What:** Frontend hosting platform (Vercel/Netlify)
**If deployed:** Screenshot dashboard showing deployment status

---

## 🎯 Quick Action - Screenshots You Can Take RIGHT NOW

Since your app is running locally, you can immediately capture:

1. ✅ **GitHub Actions** - Visit the Actions tab (link above)
2. ✅ **Frontend Pages** - localhost:3000, localhost:3000/tasks, localhost:3000/create  
3. ✅ **API Responses** - Use Postman/browser for localhost:5000/api/health
4. ✅ **MongoDB Atlas** - Log in and screenshot your cluster
5. ✅ **Terminal Logs** - Screenshot showing backend/frontend running

---

## 📝 Minimum Requirements

For **full credit**, include at least:
- ✅ 2-3 CI/CD pipeline screenshots (GitHub Actions)
- ✅ 2-3 application screenshots (frontend or API)
- ✅ 1 database screenshot (MongoDB Atlas)

**Total minimum: 5-7 screenshots**

---

## 🎨 Screenshot Best Practices

- ✅ **Resolution:** At least 1280x720
- ✅ **Format:** PNG or JPG
- ✅ **URL visible:** Show browser address bar
- ✅ **Clear & readable:** No blur or tiny text
- ✅ **Context:** Include navigation/UI context
- ❌ **No sensitive data:** Hide API keys, passwords
- ❌ **Don't over-crop:** Keep enough context

---

## 📌 How to Add to Main README

After taking screenshots, update the main README.md:

### 4. Deployment Status (`deployment-status.png`)
- Screenshot of successful deployment on your platform
- Show backend deployed on Render/Railway/Heroku
- Show frontend deployed on Vercel/Netlify

## How to Add Screenshots

1. Take screenshots of your deployed application
2. Save them in this directory with the names above
3. Update the README.md to reference these screenshots
4. Commit and push to your repository

## Tips for Good Screenshots

- Use full screen or browser window capture
- Ensure text is readable
- Show successful status/green checkmarks
- Include URLs in the browser address bar
- Capture any relevant metrics or statistics

## Example Paths

After adding screenshots, your README should reference them like:

```markdown
![CI/CD Pipeline](docs/screenshots/cicd-pipeline.png)
![Dashboard](docs/screenshots/dashboard.png)
![Monitoring](docs/screenshots/monitoring.png)
```
