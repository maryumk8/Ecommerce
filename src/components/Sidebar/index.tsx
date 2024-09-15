import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  handleAllCategories,
  handleAllProducts,
  handleProductsByCategory,
} from '../../services/API.ts';
import { Category } from '../../types/Sidebar';
import { setProducts } from '../../redux/slices/ProductSlice';
import { useDispatch } from 'react-redux';

const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: 'black',
  backgroundColor: '#fff',
  borderRight: '1px solid rgb(225, 219, 219)',
};

const Sidebar = () => {
  const [categories, setCategories] = useState<Category[]>();
  const dispatch = useDispatch();

  const handleCategories = async () => {
    try {
      const res = await handleAllCategories();
      setCategories(res);
    } catch (err) {
      console.log({ err });
    }
  };

  const handleProductsByCat = async (item: any) => {
    try {
      const res = await handleProductsByCategory(item);
      dispatch(setProducts(res?.products));
      console.log({ res });
    } catch (err) {
      console.log({ err });
    }
  };

  const handleProducts = async () => {
    try {
      const data = await handleAllProducts();
      dispatch(setProducts(data?.products));
      setProducts(data?.products);
    } catch (err) {
      console.log(err);
    }
  };

  const topCat = categories?.slice(0, 18);
  useEffect(() => {
    handleCategories();
  }, []);
  return (
    <Sider width="20%" style={siderStyle}>
      <p className="category ellipsis" onClick={() => handleProducts()}>
        All Products{' '}
      </p>
      {topCat?.length
        ? topCat?.map((item, i) => (
            <p
              className="category ellipsis"
              key={i}
              title={item?.name}
              onClick={() => handleProductsByCat(item)}
            >
              {item.name}
            </p>
          ))
        : 'Loading'}
    </Sider>
  );
};

export default Sidebar;
