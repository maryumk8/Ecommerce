import React from 'react';
import { Col, Layout, Row } from 'antd';

const FooterWrapper = () => {
  const { Footer } = Layout;

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'black',
    marginTop: '30px',
    padding: '24px 110px',
  };
  return (
    <Footer style={footerStyle}>
      <Row>
        <Col span={10}>
          <div className="text-left">
            <h3>Exclusive</h3>
            <h4>Subscribe</h4>
            <p>Get 10% your first order!!</p>
          </div>
        </Col>
        <Col span={10}>
          {' '}
          <div className="text-left">
            <h4>Support</h4>
            <p>fashion@gmail.com</p>
            <p>+23123 1234 9483</p>
            <p>IG1 3H9</p>
          </div>
        </Col>
        <Col span={4}>
          {' '}
          <div className="text-left">
            <h4>Account</h4>
            <p>My Account</p>
            <p>Login/Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterWrapper;
