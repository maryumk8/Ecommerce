import {
  DownOutlined,
  HeartOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Dropdown, Layout, Space } from 'antd';
import React from 'react';
import type { MenuProps } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/Logo.jpg';
import SearchWrapper from './SearchWrapper';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: 'black',
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#fff',
  display: 'flex',
};

const items: MenuProps['items'] = [
  {
    label: <SearchWrapper />,
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <>
        {' '}
        <HeartOutlined />
        Favourites
      </>
    ),
    key: '1',
  },

  {
    label: (
      <>
        {' '}
        <ShoppingCartOutlined />
        Cart
      </>
    ),
    key: '3',
  },
];

const HeaderWrapper = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <Header style={headerStyle}>
        <div className="header-logo">
          <img
            src={Logo}
            alt="Logo"
            height={55}
            onClick={() => navigate('/')}
          />
        </div>
        <div className="header-links">
          <Link to="/"> Home </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/about"> About </Link>
          <Link to="/signup"> Sign Up </Link>
        </div>
        <div className="header-btns">
          <SearchWrapper />
          <HeartOutlined />
          <ShoppingCartOutlined />
        </div>

        <div className="header-dropdown">
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <MenuOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </Header>
    </div>
  );
};

export default HeaderWrapper;
