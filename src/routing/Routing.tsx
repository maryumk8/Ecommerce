import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { getRoutes } from './Routes';

const Routing: React.FC = () => {
  const routes = getRoutes();

  return (
    <Routes>
      {Object.values(routes).map((item) => {
        if (!item) {
          console.error('Route item is undefined');
          return null; // Handle undefined case
        }
        return (
          <Route key={item.name} path={item.path} element={item.element} />
        );
      })}
    </Routes>
  );
};

export default Routing;
