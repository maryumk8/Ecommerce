import { Carousel, Layout } from 'antd';
import React from 'react';
import Products from '../Products';

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  width: '100%',
  marginLeft: '288px',
  marginTop: '75px',
};

const ContentWrapper = () => {
  return (
    <Content style={contentStyle}>
      <Products />{' '}
    </Content>
  );
};

export default ContentWrapper;
