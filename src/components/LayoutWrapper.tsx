import { Layout } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import HeaderWrapper from './Header/HeaderWrapper';
import Sidebar from './Sidebar';
import ContentWrapper from './Content';
import FooterWrapper from './FooterWrapper';

const layoutStyle: React.CSSProperties = {
  overflow: 'hidden',
  minHeight: '100vh',
};

interface IProps {
  children?: React.ReactNode;
}

const LayoutWrapper: React.FC<IProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Layout style={layoutStyle}>
      <HeaderWrapper />
      <Layout>
        {isHome && <Sidebar />}
        <ContentWrapper>{children}</ContentWrapper>
      </Layout>
      <FooterWrapper />
    </Layout>
  );
};

export default LayoutWrapper;
