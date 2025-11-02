const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const Task = require('../models/Task');

describe('Task API Integration Tests', () => {
  beforeAll(async () => {
    // Connect to test database
    const testDbUri = process.env.MONGODB_URI_TEST || 'mongodb://localhost:27017/mern-test';
    await mongoose.connect(testDbUri);
  });

  afterAll(async () => {
    // Clean up and close connection
    await Task.deleteMany({});
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    // Clear tasks before each test
    await Task.deleteMany({});
  });

  describe('GET /api/tasks', () => {
    it('should return all tasks', async () => {
      // Create test tasks
      await Task.create([
        { title: 'Task 1', description: 'Description 1' },
        { title: 'Task 2', description: 'Description 2' },
      ]);

      const res = await request(app).get('/api/tasks');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveLength(2);
    });

    it('should filter tasks by status', async () => {
      await Task.create([
        { title: 'Task 1', status: 'pending' },
        { title: 'Task 2', status: 'completed' },
      ]);

      const res = await request(app).get('/api/tasks?status=pending');

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(1);
      expect(res.body.data[0].status).toBe('pending');
    });
  });

  describe('POST /api/tasks', () => {
    it('should create a new task', async () => {
      const taskData = {
        title: 'New Task',
        description: 'Test description',
        priority: 'high',
      };

      const res = await request(app).post('/api/tasks').send(taskData);

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.title).toBe(taskData.title);
    });

    it('should return error for invalid task data', async () => {
      const res = await request(app).post('/api/tasks').send({});

      expect(res.status).toBe(400);
    });
  });

  describe('GET /api/tasks/:id', () => {
    it('should return a task by id', async () => {
      const task = await Task.create({ title: 'Test Task' });

      const res = await request(app).get(`/api/tasks/${task._id}`);

      expect(res.status).toBe(200);
      expect(res.body.data.title).toBe('Test Task');
    });

    it('should return 404 for non-existent task', async () => {
      const fakeId = new mongoose.Types.ObjectId();
      const res = await request(app).get(`/api/tasks/${fakeId}`);

      expect(res.status).toBe(404);
    });
  });

  describe('PUT /api/tasks/:id', () => {
    it('should update a task', async () => {
      const task = await Task.create({ title: 'Original Title' });

      const res = await request(app)
        .put(`/api/tasks/${task._id}`)
        .send({ title: 'Updated Title', status: 'completed' });

      expect(res.status).toBe(200);
      expect(res.body.data.title).toBe('Updated Title');
      expect(res.body.data.status).toBe('completed');
    });
  });

  describe('DELETE /api/tasks/:id', () => {
    it('should delete a task', async () => {
      const task = await Task.create({ title: 'To Delete' });

      const res = await request(app).delete(`/api/tasks/${task._id}`);

      expect(res.status).toBe(200);

      const deletedTask = await Task.findById(task._id);
      expect(deletedTask).toBeNull();
    });
  });
});

describe('Health Check Endpoints', () => {
  it('should return health status', async () => {
    const res = await request(app).get('/api/health');

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

  it('should return detailed health status', async () => {
    const res = await request(app).get('/api/health/detailed');

    expect(res.status).toBe(200);
    expect(res.body.checks).toBeDefined();
    expect(res.body.checks.database).toBeDefined();
  });
});
