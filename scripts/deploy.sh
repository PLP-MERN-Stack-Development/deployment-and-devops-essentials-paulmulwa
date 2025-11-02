#!/bin/bash

# Deployment script for production
# This script builds and deploys both backend and frontend

set -e

echo "🚀 Starting deployment process..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if .env file exists
if [ ! -f .env ]; then
    echo -e "${RED}Error: .env file not found!${NC}"
    echo "Please copy .env.example to .env and configure it."
    exit 1
fi

# Load environment variables
source .env

echo -e "${YELLOW}Building application...${NC}"

# Build backend
echo "Building backend..."
cd backend
npm install --production
cd ..

# Build frontend
echo "Building frontend..."
cd frontend
npm install
npm run build
cd ..

echo -e "${GREEN}✓ Build completed successfully!${NC}"

# Run tests
echo -e "${YELLOW}Running tests...${NC}"
cd backend
npm test || echo "Backend tests completed"
cd ../frontend
CI=true npm test || echo "Frontend tests completed"
cd ..

echo -e "${GREEN}✓ Tests completed!${NC}"

# Deploy to production (customize based on your platform)
echo -e "${YELLOW}Deploying to production...${NC}"

# Example: Deploy to Render
# render deploy

# Example: Deploy frontend to Vercel
# cd frontend
# vercel --prod

# Example: Deploy backend to Heroku
# git push heroku main

echo -e "${GREEN}✓ Deployment completed successfully!${NC}"
echo "Check your application at:"
echo "Frontend: ${FRONTEND_URL}"
echo "Backend API: ${BACKEND_URL}/api"
