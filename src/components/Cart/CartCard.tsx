import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CartCard = () => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};

export default CartCard;
