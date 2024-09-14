import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/slices/ProductSlice';
import { RootState } from '../../redux/store';
import { handleAllProducts } from '../../services/API.ts';
import { Product } from '../../types/Products';
import CardWrapper from './CardWrapper';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.productSlice.products
  );

  const handleProducts = async () => {
    try {
      const data = await handleAllProducts();
      dispatch(setProducts(data?.products));
      setProducts(data?.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <div>
      <h1> All Products</h1>
      <div className="card-wrapper">
        <Row gutter={[16, 16]}>
          {products?.length
            ? products.map((item: Product, i: any) => (
                <Col xs={24} lg={12} xl={8}>
                  <CardWrapper data={item} />
                </Col>
              ))
            : 'Loading'}
        </Row>
      </div>
    </div>
  );
};

export default Products;
