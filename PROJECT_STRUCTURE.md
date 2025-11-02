# Project Structure

```
Week 7 Assignment/
│
├── 📁 .github/
│   └── 📁 workflows/
│       ├── ci-cd.yml                    # Main CI/CD pipeline
│       └── code-quality.yml             # Code quality checks
│
├── 📁 backend/                          # Express.js Backend
│   ├── 📁 config/
│   │   └── logger.js                    # Winston logger configuration
│   │
│   ├── 📁 middleware/
│   │   └── errorHandler.js              # Global error handling
│   │
│   ├── 📁 models/
│   │   └── Task.js                      # Mongoose Task model
│   │
│   ├── 📁 routes/
│   │   ├── tasks.js                     # Task CRUD endpoints
│   │   └── health.js                    # Health check endpoints
│   │
│   ├── 📁 tests/
│   │   ├── api.test.js                  # API integration tests
│   │   └── setup.js                     # Test configuration
│   │
│   ├── 📁 logs/                         # Log files (created at runtime)
│   │
│   ├── .env.example                     # Environment variables template
│   ├── jest.config.js                   # Jest test configuration
│   ├── package.json                     # Backend dependencies
│   └── server.js                        # Express server entry point
│
├── 📁 frontend/                         # React Frontend
│   ├── 📁 public/
│   │   ├── index.html                   # HTML template
│   │   ├── manifest.json                # PWA manifest
│   │   └── favicon.ico                  # Site icon
│   │
│   └── 📁 src/
│       ├── 📁 components/
│       │   ├── ErrorBoundary.js         # Error boundary component
│       │   ├── LoadingSpinner.js        # Loading component
│       │   └── LoadingSpinner.css       # Spinner styles
│       │
│       ├── 📁 pages/
│       │   ├── Home.js                  # Home page
│       │   ├── Home.css                 # Home page styles
│       │   ├── TaskList.js              # Task list page
│       │   ├── TaskList.css             # Task list styles
│       │   ├── TaskDetail.js            # Task detail page
│       │   ├── TaskDetail.css           # Task detail styles
│       │   ├── CreateTask.js            # Create task page
│       │   ├── CreateTask.css           # Create task styles
│       │   ├── NotFound.js              # 404 page
│       │   └── NotFound.css             # 404 styles
│       │
│       ├── 📁 services/
│       │   └── api.js                   # API client with Axios
│       │
│       ├── App.js                       # Main App component
│       ├── App.css                      # App styles
│       ├── index.js                     # React entry point
│       ├── index.css                    # Global styles
│       └── reportWebVitals.js           # Performance monitoring
│   │
│   ├── .env.example                     # Frontend env template
│   └── package.json                     # Frontend dependencies
│
├── 📁 scripts/                          # Deployment & Utility Scripts
│   ├── setup.sh                         # Initial setup (Unix/Mac)
│   ├── deploy.sh                        # Deployment script (Unix/Mac)
│   ├── deploy.bat                       # Deployment script (Windows)
│   ├── health-check.sh                  # Health verification
│   ├── rollback.sh                      # Rollback to previous version
│   └── backup-db.sh                     # Database backup
│
├── 📁 docs/                             # Documentation Assets
│   └── 📁 screenshots/
│       └── README.md                    # Screenshot guidelines
│
├── 📄 Configuration Files
├── .env.example                         # Root environment template
├── .gitignore                           # Git ignore rules
├── .eslintrc.js                         # ESLint configuration
├── .prettierrc.js                       # Prettier configuration
├── package.json                         # Root package file
│
├── 🐳 Docker Configuration
├── docker-compose.yml                   # Docker Compose config
├── Dockerfile.backend                   # Backend Docker image
├── Dockerfile.frontend                  # Frontend Docker image
├── nginx.conf                           # Nginx configuration
│
├── ☁️ Deployment Configurations
├── render.yaml                          # Render platform config
├── vercel.json                          # Vercel platform config
├── netlify.toml                         # Netlify platform config
├── app.json                             # Heroku app config
├── Procfile                             # Heroku process file
│
└── 📚 Documentation
    ├── README.md                        # Main project documentation
    ├── DEPLOYMENT.md                    # Deployment guide
    ├── MAINTENANCE.md                   # Maintenance procedures
    ├── CONTRIBUTING.md                  # Contribution guidelines
    ├── QUICKSTART.md                    # Quick start guide
    ├── VERIFICATION.md                  # Setup verification checklist
    ├── ASSIGNMENT_SUMMARY.md            # Assignment completion summary
    ├── CHANGELOG.md                     # Version history
    └── LICENSE                          # MIT License
```

## Key Directories

### Backend (`/backend`)
Contains the Express.js server with:
- RESTful API endpoints
- MongoDB integration
- Authentication & authorization ready
- Comprehensive error handling
- Production-grade logging
- Health check endpoints

### Frontend (`/frontend`)
Contains the React application with:
- Modern React with Hooks
- React Router for navigation
- Code splitting for performance
- Error boundaries
- API integration
- Responsive design

### Scripts (`/scripts`)
Utility scripts for:
- Initial project setup
- Deployment automation
- Health checks
- Database backups
- Rollback procedures

### Documentation (`/docs`)
Comprehensive guides for:
- Project setup
- Deployment procedures
- API documentation
- Maintenance plans
- Troubleshooting

## Technology Stack

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js 4.x
- **Database:** MongoDB with Mongoose
- **Security:** Helmet, CORS, Rate Limiting
- **Logging:** Winston
- **Validation:** Express Validator
- **Testing:** Jest, Supertest
- **Error Tracking:** Sentry

### Frontend
- **Library:** React 18
- **Routing:** React Router 6
- **HTTP Client:** Axios
- **State Management:** React Query
- **Testing:** React Testing Library
- **Performance:** Web Vitals
- **Error Tracking:** Sentry

### DevOps
- **CI/CD:** GitHub Actions
- **Containerization:** Docker, Docker Compose
- **Hosting (Backend):** Render, Railway, Heroku
- **Hosting (Frontend):** Vercel, Netlify
- **Database:** MongoDB Atlas
- **Monitoring:** Sentry, Custom Health Checks

## File Count Summary

- **Backend Files:** 12
- **Frontend Files:** 20
- **Configuration Files:** 15
- **Documentation Files:** 8
- **Scripts:** 6
- **CI/CD Workflows:** 2
- **Docker Files:** 3
- **Deployment Configs:** 5

**Total:** ~71 files

## Getting Started

1. Read `README.md` for overview
2. Follow `QUICKSTART.md` for setup
3. Use `VERIFICATION.md` to check setup
4. Deploy using `DEPLOYMENT.md`
5. Maintain using `MAINTENANCE.md`

---

**Last Updated:** November 2, 2025
