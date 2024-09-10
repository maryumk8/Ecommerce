import React from 'react';
import { Flex, Layout } from 'antd';
import HeaderWrapper from './Header/HeaderWrapper';

const { Header, Footer, Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  //   minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
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
  height: '100vh',
};

const LayoutWrapper: React.FC = () => (
  <Layout style={layoutStyle}>
    <HeaderWrapper />
    <Layout>
      <Sider width="20%" style={siderStyle}>
        Sider
      </Sider>
      <Content style={contentStyle}>Content</Content>
    </Layout>
    <Footer style={footerStyle}>Footer</Footer>
  </Layout>
);

export default LayoutWrapper;
