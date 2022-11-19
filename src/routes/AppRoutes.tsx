import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefautLeyout from '../config/layout/DefautLeyout';
import Home from '../pages/Home';
import About from '../pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefautLeyout pages={<Home />} />
  },
  {
    path: '/about',
    element: <DefautLeyout pages={<About />} />
  }
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
