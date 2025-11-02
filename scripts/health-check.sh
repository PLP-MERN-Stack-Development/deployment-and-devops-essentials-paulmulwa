#!/bin/bash

# Health check script
# Verifies that the application is running correctly

set -e

API_URL=${1:-"http://localhost:5000/api"}
FRONTEND_URL=${2:-"http://localhost:3000"}

echo "🏥 Running health checks..."

# Check backend health
echo "Checking backend health at ${API_URL}/health..."
BACKEND_STATUS=$(curl -s -o /dev/null -w "%{http_code}" ${API_URL}/health)

if [ $BACKEND_STATUS -eq 200 ]; then
    echo "✓ Backend is healthy (Status: $BACKEND_STATUS)"
else
    echo "✗ Backend is unhealthy (Status: $BACKEND_STATUS)"
    exit 1
fi

# Check backend detailed health
echo "Checking detailed backend health..."
curl -s ${API_URL}/health/detailed | jq '.' || echo "Detailed health check failed"

# Check frontend
echo "Checking frontend at ${FRONTEND_URL}..."
FRONTEND_STATUS=$(curl -s -o /dev/null -w "%{http_code}" ${FRONTEND_URL})

if [ $FRONTEND_STATUS -eq 200 ]; then
    echo "✓ Frontend is accessible (Status: $FRONTEND_STATUS)"
else
    echo "✗ Frontend is not accessible (Status: $FRONTEND_STATUS)"
    exit 1
fi

echo "✓ All health checks passed!"
