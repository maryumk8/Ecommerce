import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Routing from './routing/Routing';
import { handleAllProducts } from './services/API.ts';
import LayoutWrapper from './components/LayoutWrapper';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <LayoutWrapper />
    </div>
  );
};

export default App;
