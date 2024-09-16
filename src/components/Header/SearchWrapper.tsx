import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import type { GetProps } from 'antd';
import { handleSearch } from '../../services/API.ts';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/slices/ProductSlice';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const SearchWrapper: React.FC = () => {
  const dispatch = useDispatch();

  const handleProductSearch = async (value: { value: any }) => {
    try {
      const response = await handleSearch(value);
      if (response?.products && response.products.length) {
        dispatch(setProducts(response.products));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onSearch: SearchProps['onSearch'] = (value: any, _e, info: any) => {
    handleProductSearch(value);
  };
  return (
    <>
      <Search
        placeholder="What are you looking for?"
        allowClear
        onSearch={onSearch}
        style={{ width: 230 }}
      />
    </>
  );
};

export default SearchWrapper;
