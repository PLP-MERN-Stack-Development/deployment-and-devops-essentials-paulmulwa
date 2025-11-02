# Contributing to MERN Task Manager

Thank you for considering contributing to this project! This document provides guidelines for contributing.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:
- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other contributors

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (OS, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. Include:

- **Clear title and description**
- **Use case and benefits**
- **Possible implementation** (optional)
- **Alternative solutions** (optional)

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow the code style
   - Add tests if applicable
   - Update documentation

4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**

## Development Setup

1. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/mern-app.git
   cd mern-app
   ```

2. **Install dependencies**
   ```bash
   ./scripts/setup.sh
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```

4. **Start development**
   ```bash
   npm run dev
   ```

## Coding Standards

### JavaScript/Node.js

- Use ES6+ features
- Follow ESLint configuration
- Use meaningful variable names
- Comment complex logic
- Keep functions small and focused

### React

- Use functional components with hooks
- Follow component naming conventions
- Keep components focused on single responsibility
- Use PropTypes or TypeScript for type checking

### Git Commit Messages

Follow conventional commits:

```
feat: add new task filtering feature
fix: resolve database connection issue
docs: update deployment guide
style: format code with prettier
refactor: simplify error handling
test: add tests for task API
chore: update dependencies
```

## Testing

### Running Tests

```bash
# All tests
npm test

# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test

# With coverage
npm test -- --coverage
```

### Writing Tests

- Write tests for new features
- Maintain test coverage above 80%
- Test edge cases
- Use descriptive test names

## Documentation

- Update README.md for new features
- Add JSDoc comments for functions
- Update API documentation
- Create examples for complex features

## Review Process

1. **Automated checks** must pass
   - Tests
   - Linting
   - Build

2. **Code review** by maintainer
   - Code quality
   - Test coverage
   - Documentation

3. **Approval and merge**

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to open an issue for any questions or concerns.
