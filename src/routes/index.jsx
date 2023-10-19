import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import '../index.css';

import AuthRoutes from './auth.routes.jsx';
import DashboardRoutes from './dashboard.routes.jsx';
import Contactroute from './contactroute.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  AuthRoutes,
  DashboardRoutes,
  Contactroute,
]);

export default router;
