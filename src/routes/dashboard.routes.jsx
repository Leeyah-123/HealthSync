import { Navigate } from 'react-router-dom';
import DashboardPage from '../pages/dashboard/DashboardPage';
import Forum from '../pages/dashboard/Forum';
import DashboardHome from '../pages/dashboard/Home';
import Schedule from '../pages/dashboard/Schedule';
import Settings from '../pages/dashboard/Settings';


const DashboardRoutes = {
  path: '/dashboard',
  element: <DashboardPage />,
  children: [
    { index: true, element: <Navigate to="home" replace /> },
    { path: 'home', element: <DashboardHome /> },
    { path: 'forum', element: <Forum /> },
    { path: 'calendar', element: <Schedule /> },
    { path: 'settings', element: <Settings /> },
  ],
};

export default DashboardRoutes;
