import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { getRoutes } from '../routing/Routes';
import Routing from '../routing/Routing';
import '@testing-library/jest-dom';

import { act } from 'react'; // Explicitly importing `act` from React if needed

// Mocking getRoutes
jest.mock('../routing/Routes', () => ({
  getRoutes: jest.fn(), // Ensure jest.fn() is called
}));

describe('testing routing', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (getRoutes as jest.Mock).mockReturnValue({
      home: { name: 'Home', path: '/', element: <div>Home Page</div> },
      about: { name: 'About', path: '/about', element: <div>About Page</div> },
    });
  });

  test('renders home page for path /', () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routing />
        </MemoryRouter>
      );
    });

    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  test('render about page for /about path', () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/about']}>
          <Routing />
        </MemoryRouter>
      );
    });

    expect(screen.getByText('About Page')).toBeInTheDocument();
  });

  test('render not found in case of *  unknown path ', () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/unknown']}>
          <Routing />
        </MemoryRouter>
      );
    });

    expect(screen.getByText('Not Found')).toBeInTheDocument();
  });
});
