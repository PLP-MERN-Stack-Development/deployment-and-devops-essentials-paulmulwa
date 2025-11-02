const express = require('express');
const router = express.Router();
const { body, param, query, validationResult } = require('express-validator');
const Task = require('../models/Task');
const { AppError } = require('../middleware/errorHandler');
const { StatusCodes } = require('http-status-codes');

// Validation middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
  }
  next();
};

// Validation rules
const taskValidationRules = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 100 })
    .withMessage('Title cannot exceed 100 characters'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Description cannot exceed 500 characters'),
  body('status')
    .optional()
    .isIn(['pending', 'in-progress', 'completed'])
    .withMessage('Invalid status'),
  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high'])
    .withMessage('Invalid priority'),
  body('dueDate')
    .optional()
    .isISO8601()
    .withMessage('Invalid date format'),
];

// GET /api/tasks - Get all tasks with filtering and pagination
router.get(
  '/',
  [
    query('status').optional().isIn(['pending', 'in-progress', 'completed']),
    query('priority').optional().isIn(['low', 'medium', 'high']),
    query('page').optional().isInt({ min: 1 }),
    query('limit').optional().isInt({ min: 1, max: 100 }),
  ],
  validate,
  async (req, res, next) => {
    try {
      const { status, priority, page = 1, limit = 10, sort = '-createdAt' } = req.query;

      // Build query
      const query = {};
      if (status) query.status = status;
      if (priority) query.priority = priority;

      // Calculate pagination
      const skip = (page - 1) * limit;

      // Execute query
      const tasks = await Task.find(query)
        .sort(sort)
        .limit(parseInt(limit))
        .skip(skip);

      const total = await Task.countDocuments(query);

      res.status(StatusCodes.OK).json({
        success: true,
        count: tasks.length,
        total,
        page: parseInt(page),
        pages: Math.ceil(total / limit),
        data: tasks,
      });
    } catch (error) {
      next(error);
    }
  }
);

// GET /api/tasks/:id - Get single task
router.get(
  '/:id',
  [param('id').isMongoId().withMessage('Invalid task ID')],
  validate,
  async (req, res, next) => {
    try {
      const task = await Task.findById(req.params.id);

      if (!task) {
        throw new AppError('Task not found', StatusCodes.NOT_FOUND);
      }

      res.status(StatusCodes.OK).json({
        success: true,
        data: task,
      });
    } catch (error) {
      next(error);
    }
  }
);

// POST /api/tasks - Create new task
router.post('/', taskValidationRules, validate, async (req, res, next) => {
  try {
    const task = await Task.create(req.body);

    res.status(StatusCodes.CREATED).json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
});

// PUT /api/tasks/:id - Update task
router.put(
  '/:id',
  [param('id').isMongoId().withMessage('Invalid task ID'), ...taskValidationRules],
  validate,
  async (req, res, next) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!task) {
        throw new AppError('Task not found', StatusCodes.NOT_FOUND);
      }

      res.status(StatusCodes.OK).json({
        success: true,
        data: task,
      });
    } catch (error) {
      next(error);
    }
  }
);

// DELETE /api/tasks/:id - Delete task
router.delete(
  '/:id',
  [param('id').isMongoId().withMessage('Invalid task ID')],
  validate,
  async (req, res, next) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);

      if (!task) {
        throw new AppError('Task not found', StatusCodes.NOT_FOUND);
      }

      res.status(StatusCodes.OK).json({
        success: true,
        data: {},
      });
    } catch (error) {
      next(error);
    }
  }
);

// GET /api/tasks/stats/overview - Get task statistics
router.get('/stats/overview', async (req, res, next) => {
  try {
    const stats = await Task.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ]);

    const priorityStats = await Task.aggregate([
      {
        $group: {
          _id: '$priority',
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(StatusCodes.OK).json({
      success: true,
      data: {
        byStatus: stats,
        byPriority: priorityStats,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
