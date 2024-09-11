import React from 'react';
import { Flex, Layout } from 'antd';
import HeaderWrapper from './Header/HeaderWrapper';
import Sidebar from './Sidebar';

const { Footer, Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
  width: '50px',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
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
      <Content style={contentStyle}>Content</Content>
    </Layout>
    <Footer style={footerStyle}>Footer</Footer>
  </Layout>
);

export default LayoutWrapper;
