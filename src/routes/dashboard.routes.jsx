import { DumbbellIcon, HomeIcon, UsersIcon } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '../components/layout/dashboard/dashboard.layout';
import Forum from '../pages/dashboard/Forum';
import DashboardHome from '../pages/dashboard/Home';
import WorkoutPlanner from '../pages/dashboard/Schedule';

const DashboardRoutes = {
  path: '/dashboard',
  element: <DashboardLayout />,
  children: [
    { index: true, element: <Navigate to="home" replace /> },
    {
      path: 'home',
      element: <DashboardHome />,
      icon: <HomeIcon color="white" />,
    },
    { path: 'forum', element: <Forum />, icon: <UsersIcon color="white" /> },
    {
      path: 'workout-plan',
      element: <WorkoutPlanner color="white" />,
      icon: <DumbbellIcon color="white" />,
    },
  ],
};

export default DashboardRoutes;
