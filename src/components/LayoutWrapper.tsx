import { Layout } from 'antd';
import React from 'react';
import HeaderWrapper from './Header/HeaderWrapper';
import Sidebar from './Sidebar';
import ContentWrapper from './Content';
import FooterWrapper from './FooterWrapper';

const layoutStyle = {
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
    <FooterWrapper />
  </Layout>
);

export default LayoutWrapper;
