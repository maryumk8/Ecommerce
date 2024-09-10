import React from 'react';
import { Flex, Layout } from 'antd';
import Logo from '../../assets/images/Logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import SearchWrapper from './SearchWrapper';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

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
      </Header>
    </div>
  );
};

export default HeaderWrapper;
