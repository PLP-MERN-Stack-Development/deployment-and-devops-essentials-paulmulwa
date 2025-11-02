const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { StatusCodes } = require('http-status-codes');

// Basic health check
router.get('/', (req, res) => {
  res.status(StatusCodes.OK).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// Detailed health check
router.get('/detailed', async (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    checks: {
      database: 'unknown',
      memory: 'unknown',
    },
  };

  try {
    // Check database connection
    const dbState = mongoose.connection.readyState;
    healthcheck.checks.database = dbState === 1 ? 'connected' : 'disconnected';

    // Check memory usage
    const memoryUsage = process.memoryUsage();
    healthcheck.checks.memory = {
      rss: `${Math.round(memoryUsage.rss / 1024 / 1024)}MB`,
      heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)}MB`,
      heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`,
    };

    // Check if any critical issues
    if (dbState !== 1) {
      return res.status(StatusCodes.SERVICE_UNAVAILABLE).json({
        ...healthcheck,
        message: 'Database connection issue',
      });
    }

    res.status(StatusCodes.OK).json(healthcheck);
  } catch (error) {
    healthcheck.message = error.message;
    res.status(StatusCodes.SERVICE_UNAVAILABLE).json(healthcheck);
  }
});

// Readiness probe (for Kubernetes/container orchestration)
router.get('/ready', async (req, res) => {
  try {
    // Check if database is ready
    const dbState = mongoose.connection.readyState;
    
    if (dbState === 1) {
      return res.status(StatusCodes.OK).json({ status: 'ready' });
    }
    
    res.status(StatusCodes.SERVICE_UNAVAILABLE).json({ status: 'not ready' });
  } catch (error) {
    res.status(StatusCodes.SERVICE_UNAVAILABLE).json({ 
      status: 'not ready',
      error: error.message 
    });
  }
});

// Liveness probe (for Kubernetes/container orchestration)
router.get('/live', (req, res) => {
  res.status(StatusCodes.OK).json({ status: 'alive' });
});

module.exports = router;
