import { render } from '@testing-library/react';
import App from './App';

// Mock React Router
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));

// Mock React Query
jest.mock('react-query', () => ({
  QueryClient: jest.fn(),
  QueryClientProvider: ({ children }) => <div>{children}</div>,
}));

test('renders without crashing', () => {
  render(<App />);
  // App should render without errors
  expect(true).toBe(true);
});
