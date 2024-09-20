import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Card, Space } from 'antd';

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cartSlice);
  const cartItems = cart?.cart;
  let totl = 0;
  const total = () => {
    totl = cartItems.reduce((acc: number, item: any) => {
      return acc + item.price * item.qty;
    }, 0);
  };
  total();
  return (
    <div>
      {cartItems?.length ? (
        <div>
          <Card className="card-flex">
            <b className="grid-width center">Product</b>
            <b className="grid-width center">Price</b>
            <b className="grid-width center">Quantity</b>
            <b className="grid-width center">Subtotal</b>
          </Card>

          {cartItems.map((item: any, index: number) => (
            <Card hoverable className="card-flex mt" key={index}>
              <div className="grid-width center">
                <img src={item?.thumbnail} alt="img" height={40} />
                {item?.title}
              </div>
              <p className="grid-width center">${item?.price}</p>
              <p className="grid-width center">{item?.qty}</p>
              <p className="grid-width center">${item?.price * item?.qty}</p>
            </Card>
          ))}
          <div className="flex-end mt">
            <Space direction="vertical" size={16}>
              <Card
                size="small"
                className="cart-total"
                title="Cart Total"
                style={{ width: 300 }}
              >
                <h4>Total:</h4>
                <h4>${totl}</h4>
              </Card>
            </Space>{' '}
          </div>
        </div>
      ) : (
        <p>EMPTY CART</p>
      )}
    </div>
  );
};

export default Cart;
