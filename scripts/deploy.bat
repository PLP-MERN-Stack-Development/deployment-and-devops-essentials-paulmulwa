@echo off
REM Deployment script for Windows
REM This script builds and deploys both backend and frontend

echo Starting deployment process...

REM Check if .env file exists
if not exist .env (
    echo Error: .env file not found!
    echo Please copy .env.example to .env and configure it.
    exit /b 1
)

echo Building application...

REM Build backend
echo Building backend...
cd backend
call npm install --production
cd ..

REM Build frontend
echo Building frontend...
cd frontend
call npm install
call npm run build
cd ..

echo Build completed successfully!

REM Run tests
echo Running tests...
cd backend
call npm test
cd ..\frontend
set CI=true
call npm test
cd ..

echo Tests completed!

echo Deployment completed successfully!
echo Check your application at the configured URLs
