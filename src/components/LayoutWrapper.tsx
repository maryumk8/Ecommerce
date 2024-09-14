import { Layout } from 'antd';
import React from 'react';
import HeaderWrapper from './Header/HeaderWrapper';
import Sidebar from './Sidebar';
import ContentWrapper from './Content';

const { Footer } = Layout;

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
  marginTop: '10px',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  minHeight: '100vh',
};

const LayoutWrapper: React.FC = () => (
  <Layout style={layoutStyle}>
    <HeaderWrapper />
    <Layout>
      <Sidebar />
      <ContentWrapper />
    </Layout>
    <Footer style={footerStyle}>Footer</Footer>
  </Layout>
);

export default LayoutWrapper;
