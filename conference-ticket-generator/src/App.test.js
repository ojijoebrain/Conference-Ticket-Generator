import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the conference ticket generator', () => {
  render(<App />);
  const titleElement = screen.getByText(/Conference Ticket Generator/i);
  expect(titleElement).toBeInTheDocument();
});
