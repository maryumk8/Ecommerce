import { fireEvent, render, screen } from '@testing-library/react';
import HeaderWrapper from '../components/Header/HeaderWrapper';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

// Mocking useNavigate from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Header testing', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate); // Mock useNavigate to return mockNavigate
    mockNavigate.mockClear(); // Clear mock before each test
  });

  test('Check logo and navigation', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HeaderWrapper />
        </Provider>
      </BrowserRouter>
    );

    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();

    fireEvent.click(logo);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  test('check links in the header', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HeaderWrapper />
        </Provider>
      </BrowserRouter>
    );

    const home = screen.getByRole('link', { name: 'Home' });
    const about = screen.getByRole('link', { name: 'About' });
    const contact = screen.getByRole('link', { name: 'Contact' });
    const signup = screen.getByRole('link', { name: 'Sign Up' });

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
    expect(signup).toBeInTheDocument();

    fireEvent.click(home);
    expect(home).toHaveAttribute('href', '/');

    fireEvent.click(about);
    expect(about).toHaveAttribute('href', '/about');

    fireEvent.click(contact);
    expect(contact).toHaveAttribute('href', '/contact');

    fireEvent.click(signup);
    expect(signup).toHaveAttribute('href', '/signup');
  });
});
