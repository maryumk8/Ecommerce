import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import type { GetProps } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
  console.log(info?.source, value);

const SearchWrapper: React.FC = () => (
  <>
    <Search
      placeholder="What are you looking for?"
      allowClear
      onSearch={onSearch}
      style={{ width: 230 }}
    />
  </>
);

export default SearchWrapper;
