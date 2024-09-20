import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Routing from './routing/Routing';
import { handleAllProducts } from './services/API.ts';
import Products from './components/Products';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Products />
    </div>
  );
};

export default App;
