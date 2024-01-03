// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from '../views/Dashboard';
import Purchase from '../views/Purchase';
import MainLayout from '../layouts/MainLayout';
import Products from '../views/Products';

const AppRouter: React.FC = () => {
  return (
    <Router>
        <Routes >
            <Route path="/" Component={ MainLayout }>
                <Route path="/tablero" Component={Dashboard} />
                <Route path="/compras" Component={Purchase} />
                <Route path="/productos" Component={Products} />
            </Route>
        </Routes>
    </Router>
  );
};

export default AppRouter;
