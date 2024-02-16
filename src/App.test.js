import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app with buttons', () => {
  render(<App />);
  const linkElement = screen.getByText(/add/i);
  expect(linkElement).toBeInTheDocument();
});
