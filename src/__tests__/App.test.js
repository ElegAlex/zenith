import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders greeting', () => {
  render(<App />);
  const text = screen.getByText(/Hello, Zenith!/i);
  expect(text).toBeInTheDocument();
});
