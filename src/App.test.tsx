import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter for testing routes
import App from './App';

test('renders home page by default', () => {
  render(
    <MemoryRouter initialEntries={['/']}> {/* Start at the home route */}
      <App />
    </MemoryRouter>
  );

  // Test if the Home component is rendered
  expect(screen.getByText('Home')).toBeInTheDocument();
});

test('navigates to login page', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  // Simulate clicking the login link
  fireEvent.click(screen.getByText('Login'));

  // Assert that Login page is displayed
  expect(screen.getByText('Login')).toBeInTheDocument();
});

test('navigates to register page', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  // Simulate clicking the register link
  fireEvent.click(screen.getByText('Register'));

  // Assert that Register page is displayed
  expect(screen.getByText('Register')).toBeInTheDocument();
});

test('navigates to about page', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  // Simulate clicking the "About" link
  fireEvent.click(screen.getByText('About'));

  // Assert that About page is rendered
  expect(screen.getByText('About')).toBeInTheDocument();
});

test('navigates to profile page', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  // Simulate clicking the profile link
  fireEvent.click(screen.getByText('Profile'));

  // Assert that Profile page is rendered
  expect(screen.getByText('Profile')).toBeInTheDocument();
});
