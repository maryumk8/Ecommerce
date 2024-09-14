import { Card } from 'antd';
import React, { useState } from 'react';
import { Product } from '../../types/Products';

interface CardWrapperProps {
  data: Product;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ data }) => {
  const [display, setDisplay] = useState<boolean>(false);
  const { Meta } = Card;

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="Image" src={data?.thumbnail} />}
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <Meta title={data?.title} description={`$ ${data?.price}`} />
      {display && <p className="cart-banner">Add To Cart</p>}{' '}
    </Card>
  );
};

export default CardWrapper;
