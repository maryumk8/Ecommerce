import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { getRoutes } from './Routes';
import LayoutWrapper from '../components/LayoutWrapper';

const NotFound: React.FC = () => <div>Page Not Found</div>; // More descriptive component for 404

const Routing: React.FC = () => {
  const routes = getRoutes();

  return (
    <Routes>
      {Object.values(routes).map((item) => {
        if (!item) {
          console.error('Route item is undefined');
          return null;
        }
        return (
          <Route
            key={item.name}
            path={item.path}
            element={<LayoutWrapper>{item.element}</LayoutWrapper>}
          />
        );
      })}
      <Route path="*" element={<NotFound />} /> // Wrap NotFound with
      LayoutWrapper
    </Routes>
  );
};

export default Routing;
