import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import '../index.css';

import NotFound from '../pages/404.jsx';
import AuthRoutes from './auth.routes.jsx';
import DashboardRoutes from './dashboard.routes.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  AuthRoutes,
  DashboardRoutes,
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
