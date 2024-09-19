import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import Sidebar from '../components/Sidebar';
import store from '../redux/store';
import { handleAllCategories } from '../services/API.ts';

jest.mock('../services/API.ts', () => ({
  handleAllCategories: jest.fn(),
  handleProductsByCategory: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

describe('sidebar', () => {
  test('check if all products button exists', async () => {
    act(() => {
      render(
        <Provider store={store}>
          <Sidebar />
        </Provider>
      );
    });
    await waitFor(() => {
      expect(screen.getByText('All Products')).toBeInTheDocument();
    });
  });

  test('check loading if categories are being loaded', async () => {
    (handleAllCategories as jest.Mock).mockReturnValue([]);
    act(() => {
      render(
        <Provider store={store}>
          <Sidebar />
        </Provider>
      );
    });
    await waitFor(() => {
      expect(screen.getByText('Loading')).toBeInTheDocument();
    });
  });

  test('check categories are being displayed', async () => {
    (handleAllCategories as jest.Mock).mockReturnValue([
      {
        slug: 'beauty',
        name: 'Beauty',
        url: 'https://dummyjson.com/products/category/beauty',
      },
      {
        slug: 'beauty2',
        name: 'Beauty2',
        url: 'https://dummyjson.com/products/category/beauty2',
      },
    ]);
    act(() => {
      render(
        <Provider store={store}>
          <Sidebar />
        </Provider>
      );
    });
    await waitFor(() => {
      expect(screen.getByText('Beauty')).toBeInTheDocument();
      expect(screen.getByText('Beauty2')).toBeInTheDocument();
    });
  });
});
