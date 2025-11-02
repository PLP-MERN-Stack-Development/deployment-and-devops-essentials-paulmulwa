# 📸 SCREENSHOT GUIDE - Quick Reference

## ✅ What Screenshots to Include (Simple Checklist)

### **Minimum 5-7 Screenshots Required:**

1. **GitHub Actions Overview** (REQUIRED)
   - Go to: https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-paulmulwa/actions
   - Screenshot the Actions tab showing workflows

2. **GitHub Workflow Details** (REQUIRED)
   - Click into a workflow run
   - Screenshot showing jobs and their status

3. **Frontend Homepage** 
   - Screenshot: http://localhost:3000
   - Show the purple gradient homepage

4. **Task List Page**
   - Screenshot: http://localhost:3000/tasks
   - Show your improved UI with stats cards

5. **API Health Check**
   - Use browser or Postman
   - Screenshot: http://localhost:5000/api/health
   - Show JSON response

6. **MongoDB Atlas**
   - Log into MongoDB Atlas
   - Screenshot your cluster dashboard

7. **Task Collection** (Optional)
   - In MongoDB Atlas, click "Browse Collections"
   - Screenshot showing tasks

---

## 🎯 You Can Take These Screenshots RIGHT NOW:

Since your app is already running locally:

### Step 1: GitHub Actions (2 min)
1. Open: https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-paulmulwa/actions
2. Take screenshot of Actions tab
3. Click any workflow run, screenshot the details
4. Save as: `01-github-actions.png` and `02-workflow-details.png`

### Step 2: Frontend Screenshots (3 min)
1. Open: http://localhost:3000
2. Screenshot homepage → Save as: `03-homepage.png`
3. Click "View Tasks"
4. Screenshot task list → Save as: `04-tasklist.png`
5. Click "Create Task"
6. Screenshot form → Save as: `05-create-task.png`

### Step 3: API Screenshots (2 min)
1. Open browser or Postman
2. Visit: http://localhost:5000/api/health
3. Screenshot the JSON response → Save as: `06-api-health.png`
4. Visit: http://localhost:5000/api/tasks
5. Screenshot → Save as: `07-api-tasks.png`

### Step 4: MongoDB Atlas (2 min)
1. Go to: https://cloud.mongodb.com
2. Log in
3. Screenshot cluster overview → Save as: `08-mongodb-cluster.png`
4. Click "Browse Collections"
5. Screenshot tasks collection → Save as: `09-mongodb-tasks.png`

---

## 💾 Where to Save Screenshots

Save all screenshots in:
```
C:\Users\Administrator\Desktop\projects\Week 7 Assignment\docs\screenshots\
```

---

## 📝 After Taking Screenshots

1. **Commit and push to GitHub:**
```powershell
cd "$env:USERPROFILE\Desktop\projects\Week 7 Assignment"
git add docs/screenshots/*.png
git commit -m "Add application screenshots"
git push origin main
```

2. **Update README.md** - Add a Screenshots section with:
```markdown
## 📸 Screenshots

### GitHub Actions CI/CD
![Actions](docs/screenshots/01-github-actions.png)

### Application Interface
![Homepage](docs/screenshots/03-homepage.png)
![Task List](docs/screenshots/04-tasklist.png)

### Backend API
![Health Check](docs/screenshots/06-api-health.png)

### Database
![MongoDB](docs/screenshots/08-mongodb-cluster.png)
```

---

## ✨ Screenshot Quality Tips

✅ **DO:**
- Include URL bar in browser screenshots
- Use high resolution (at least 1280x720)
- Show green checkmarks/success status
- Make text readable
- Show the full page/window

❌ **DON'T:**
- Show passwords or API keys
- Crop too much
- Use blurry or small images
- Hide important context

---

## 🎯 That's It!

You just need **5-9 screenshots** showing:
1. ✅ GitHub Actions working (2 screenshots)
2. ✅ Your app running (2-3 screenshots)
3. ✅ API responses (1-2 screenshots)
4. ✅ MongoDB database (1-2 screenshots)

**Total time needed: ~10 minutes** 🚀
