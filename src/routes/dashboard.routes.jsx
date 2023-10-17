import { DumbbellIcon, HomeIcon, UsersIcon } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '../components/layout/dashboard/dashboard.layout';
import Forum from '../pages/dashboard/Forum';
import DashboardHome from '../pages/dashboard/Home';
import WorkoutPlan from '../pages/dashboard/WorkoutPlanPreview';
import WorkoutPlanner from '../pages/dashboard/WorkoutPlanner';

const DashboardRoutes = {
  path: '/dashboard',
  element: <DashboardLayout />,
  children: [
    { index: true, element: <Navigate to="home" replace />, display: false },
    {
      path: 'home',
      element: <DashboardHome />,
      icon: <HomeIcon color="white" />,
      display: true,
    },
    {
      path: 'forum',
      element: <Forum />,
      icon: <UsersIcon color="white" />,
      display: true,
    },
    {
      path: 'workout-plan',
      element: <WorkoutPlanner />,
      icon: <DumbbellIcon color="white" />,
      display: true,
    },
    { path: 'workout/:id/preview', element: <WorkoutPlan /> },
  ],
};

export default DashboardRoutes;
