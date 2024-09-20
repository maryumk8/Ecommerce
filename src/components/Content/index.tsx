import { Carousel, Layout } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Products from '../Products';

const { Content } = Layout;

const getMarginLeft = (isHome: boolean): string => (isHome ? '288px' : '110px');
const getMarginRight = (isHome: boolean): string => (isHome ? '0px' : '200px');

interface IProps {
  children?: React.ReactNode; // Correct typing and syntax
}

const ContentWrapper: React.FC<IProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    width: '100%',
    marginLeft: getMarginLeft(isHome),
    paddingRight: getMarginRight(isHome),
    marginTop: '75px',
  };

  return <Content style={contentStyle}>{children}</Content>;
};

export default ContentWrapper;
