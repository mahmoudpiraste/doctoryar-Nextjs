import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '@/pages/auth/login';
import AuthProvider from '@/context/AuthContext';
import { AuthContext } from '@/context/AuthContext';

// Mock toastify
jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

// Mock AuthContext
const mockLogin = jest.fn();
const mockLoading = false;

describe('Login Component', () => {
  const renderComponent = () =>
    render(
      <AuthContext.Provider value={{ login: mockLogin, loading: mockLoading }}>
        <Login />
      </AuthContext.Provider>
    );

  it('should display error message if fields are empty', async () => {
    renderComponent();

    fireEvent.click(screen.getByText('ورود'));

    expect(screen.getByText('تمامی فیلدها الزامی هستند')).toBeInTheDocument();
  });

  it('should call login function when fields are filled', async () => {
    renderComponent();

    fireEvent.change(screen.getByPlaceholderText('name@example.com'), {
      target: { value: 'test@example.com' },
    });

    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText('ورود'));

    expect(mockLogin).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });

  it('should show loading spinner when loading is true', () => {
    render(
      <AuthContext.Provider value={{ login: mockLogin, loading: true }}>
        <Login />
      </AuthContext.Provider>
    );

    expect(screen.getByRole('status')).toBeInTheDocument(); // Spinner
  });
});
