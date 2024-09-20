import React from 'react';
import About from '../components/About';
import App from '../App';
import Contact from '../components/Contact';
import Signup from '../components/Signup';
import Cart from '../components/Cart';

export const getRoutes = () => {
  return {
    home: {
      name: 'Home',
      path: '/',
      element: <App />,
    },
    about: {
      name: 'About',
      path: '/about',
      element: <About />,
    },
    contact: {
      name: 'Contact',
      path: '/contact',
      element: <Contact />,
    },
    signup: {
      name: 'Signup',
      path: '/signup',
      element: <Signup />,
    },
    cart: {
      name: 'Cart',
      path: '/cart',
      element: <Cart />,
    },
  };
};
