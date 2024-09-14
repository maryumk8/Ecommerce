import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { handleAllCategories } from '../../services/API.ts';
import { Category } from '../../types/Sidebar';

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

  const handleCategories = async () => {
    try {
      const res = await handleAllCategories();
      setCategories(res);
    } catch (err) {
      console.log({ err });
    }
  };

  const topCat = categories?.slice(0, 19);
  useEffect(() => {
    handleCategories();
  }, []);
  return (
    <Sider width="20%" style={siderStyle}>
      {topCat?.length
        ? topCat?.map((item, i) => (
            <p className="category ellipsis" key={i} title={item?.name}>
              {item.name}
            </p>
          ))
        : 'Loading'}
    </Sider>
  );
};

export default Sidebar;
