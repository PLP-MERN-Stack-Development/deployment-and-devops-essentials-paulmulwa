#!/bin/bash

# Setup script for development environment
# Installs dependencies and sets up the project

set -e

echo "🔧 Setting up MERN application..."

# Check Node.js version
NODE_VERSION=$(node -v)
echo "Node.js version: $NODE_VERSION"

# Check npm version
NPM_VERSION=$(npm -v)
echo "npm version: $NPM_VERSION"

# Copy environment files if they don't exist
if [ ! -f .env ]; then
    echo "Creating .env file from .env.example..."
    cp .env.example .env
    echo "⚠️  Please update .env file with your configuration"
fi

if [ ! -f backend/.env ]; then
    echo "Creating backend/.env file..."
    cp backend/.env.example backend/.env
fi

if [ ! -f frontend/.env ]; then
    echo "Creating frontend/.env file..."
    cp frontend/.env.example frontend/.env
fi

# Install root dependencies
echo "Installing root dependencies..."
npm install

# Install backend dependencies
echo "Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Create logs directory
mkdir -p backend/logs

# Make scripts executable
chmod +x scripts/*.sh

echo "✓ Setup completed successfully!"
echo ""
echo "Next steps:"
echo "1. Update .env files with your configuration"
echo "2. Start MongoDB (or use MongoDB Atlas)"
echo "3. Run 'npm run dev' to start development servers"
