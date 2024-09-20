import {
  DownOutlined,
  HeartOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Badge, Dropdown, Layout, Space } from 'antd';
import React from 'react';
import type { MenuProps } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/Logo.jpg';
import SearchWrapper from './SearchWrapper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: 'black',
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#fff',
  display: 'flex',
};

const HeaderWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cart = useSelector((state: RootState) => state.cartSlice);

  const handleCart = () => {
    navigate('/cart');
  };

  const home = location.pathname === '/';

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
          <HeartOutlined />
          Favourites
        </>
      ),
      key: '1',
    },
    {
      label: (
        <>
          <ShoppingCartOutlined />
          Cart
        </>
      ),
      key: '3',
      onClick: handleCart, // Now this reference is valid
    },
  ];

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
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
        <div className="header-btns">
          {home && <SearchWrapper />}
          <HeartOutlined />

          <Badge count={cart?.cart?.length} showZero>
            {' '}
            <ShoppingCartOutlined
              onClick={handleCart}
              style={{ cursor: 'pointer' }}
            />
          </Badge>
        </div>
        <div className="header-dropdown">
          <Dropdown menu={{ items }}>
            <a
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                e.preventDefault()
              }
            >
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
