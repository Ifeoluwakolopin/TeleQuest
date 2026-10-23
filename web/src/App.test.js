import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the TeleQuest landing page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'TeleQuest', level: 1 })).toBeInTheDocument();
});
