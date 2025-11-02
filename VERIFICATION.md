# Project Setup Verification

Use this checklist to verify your project setup before deployment.

## ✅ Pre-Deployment Checklist

### Repository Setup
- [ ] Code pushed to GitHub repository
- [ ] Repository is public or instructor has access
- [ ] .gitignore configured correctly
- [ ] No sensitive data in repository (.env files excluded)

### Dependencies
- [ ] Root package.json exists
- [ ] Backend dependencies installed (`cd backend && npm install`)
- [ ] Frontend dependencies installed (`cd frontend && npm install`)
- [ ] All dependencies up to date

### Environment Variables
- [ ] `.env.example` files created for all environments
- [ ] Backend `.env` configured for development
- [ ] Frontend `.env` configured for development
- [ ] MongoDB connection string ready (local or Atlas)

### Backend Configuration
- [ ] Server starts without errors (`cd backend && npm run dev`)
- [ ] Health check endpoint responds (`http://localhost:5000/api/health`)
- [ ] Database connection successful
- [ ] API endpoints working (test with Postman/curl)
- [ ] Error handling working
- [ ] Logging configured

### Frontend Configuration
- [ ] React app starts without errors (`cd frontend && npm start`)
- [ ] Homepage loads at `http://localhost:3000`
- [ ] Can navigate between pages
- [ ] API calls working
- [ ] Error boundary working
- [ ] No console errors

### Testing
- [ ] Backend tests pass (`cd backend && npm test`)
- [ ] Frontend tests pass (`cd frontend && npm test`)
- [ ] Test coverage adequate
- [ ] No failing tests

### Code Quality
- [ ] ESLint configured
- [ ] No linting errors (`npm run lint`)
- [ ] Code formatted with Prettier
- [ ] No TypeScript/JavaScript errors

### Docker (Optional)
- [ ] Dockerfile.backend builds successfully
- [ ] Dockerfile.frontend builds successfully
- [ ] docker-compose.yml runs without errors
- [ ] All services start and connect

### CI/CD Setup
- [ ] GitHub Actions workflows in `.github/workflows/`
- [ ] Workflows have correct permissions
- [ ] GitHub secrets configured (if needed)
- [ ] First workflow run successful

### Documentation
- [ ] README.md complete with all sections
- [ ] DEPLOYMENT.md has deployment instructions
- [ ] MAINTENANCE.md has maintenance procedures
- [ ] Environment variables documented
- [ ] API endpoints documented

## 🚀 Deployment Checklist

### MongoDB Atlas
- [ ] Cluster created
- [ ] Database user created with password
- [ ] Network access configured (IP whitelist)
- [ ] Connection string obtained
- [ ] Connection tested

### Backend Deployment
- [ ] Platform account created (Render/Railway/Heroku)
- [ ] Repository connected
- [ ] Build command configured
- [ ] Start command configured
- [ ] Environment variables set
- [ ] Service deployed successfully
- [ ] Health check endpoint accessible
- [ ] API endpoints working in production

### Frontend Deployment
- [ ] Platform account created (Vercel/Netlify)
- [ ] Repository connected
- [ ] Build settings configured
- [ ] Environment variables set
- [ ] Deployment successful
- [ ] Site accessible via HTTPS
- [ ] All pages load correctly
- [ ] API integration working

### Post-Deployment
- [ ] Backend URL recorded
- [ ] Frontend URL recorded
- [ ] Both services communicating correctly
- [ ] CORS configured properly
- [ ] All features working in production
- [ ] No console errors
- [ ] Performance acceptable

### Monitoring
- [ ] Health checks responding
- [ ] Error tracking configured (Sentry - optional)
- [ ] Logs accessible
- [ ] Uptime monitoring set up (optional)

### Documentation Updates
- [ ] README.md updated with deployment URLs
- [ ] Screenshots added to docs/screenshots/
- [ ] CI/CD pipeline screenshots captured
- [ ] Deployment status documented

## 🔍 Verification Commands

### Local Verification

```bash
# Install all dependencies
npm install
cd backend && npm install && cd ..
cd frontend && npm install && cd ..

# Run tests
npm test

# Start development servers
npm run dev
```

### Health Check Verification

```bash
# Backend health
curl http://localhost:5000/api/health

# Frontend (in browser)
# Open http://localhost:3000

# Test API
curl http://localhost:5000/api/tasks
```

### Production Verification

```bash
# Backend health (replace with your URL)
curl https://your-backend.onrender.com/api/health

# Frontend (in browser)
# Open https://your-frontend.vercel.app

# Test API
curl https://your-backend.onrender.com/api/tasks
```

## 🐛 Common Issues

### Issue: MongoDB Connection Failed
```bash
# Check connection string format
# Ensure IP is whitelisted in Atlas
# Verify username and password
# Check network connectivity
```

### Issue: Backend Won't Start
```bash
# Check environment variables
# Verify port is available
# Check logs for errors
# Ensure all dependencies installed
```

### Issue: Frontend Can't Reach Backend
```bash
# Verify REACT_APP_API_URL is correct
# Check CORS settings
# Ensure backend is running
# Check network/firewall
```

### Issue: CI/CD Pipeline Failing
```bash
# Check workflow syntax
# Verify secrets are set
# Check test failures
# Review action logs
```

## 📊 Success Criteria

Your project is ready for submission when:

✅ All checklist items are completed
✅ Application runs locally without errors
✅ All tests pass
✅ Backend deployed and accessible
✅ Frontend deployed and accessible
✅ CI/CD pipeline runs successfully
✅ Documentation is complete
✅ Screenshots are added
✅ URLs are documented in README

## 🎯 Final Steps

1. Complete all checklist items
2. Test everything thoroughly
3. Take screenshots
4. Update README with URLs
5. Push final changes to GitHub
6. Verify CI/CD pipeline runs
7. Submit assignment

---

**Good luck with your deployment!** 🚀
