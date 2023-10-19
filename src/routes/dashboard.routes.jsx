import { DumbbellIcon, HomeIcon, UsersIcon } from "lucide-react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "../components/layout/dashboard/dashboard.layout";
import Forum from "../pages/dashboard/Forum";
import DashboardHome from "../pages/dashboard/Home";
import WorkoutPlan from "../pages/dashboard/WorkoutPlanPreview";
import WorkoutPlanner from "../pages/dashboard/WorkoutPlanner";
import Posts from "../components/complex/dashboard/Posts";
import PostDetail from "../components/complex/dashboard/PostDetail";
import CreatePost from "../pages/dashboard/CreatePost";
import { PenLine } from "lucide-react";

const DashboardRoutes = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    { index: true, element: <Navigate to="home" replace />, display: false },
    {
      path: "home",
      element: <DashboardHome />,
      icon: <HomeIcon color="white" />,
      display: true,
    },
    {
      path: "posts",
      element: <Forum />,
      icon: <UsersIcon color="white" />,
      display: true,
      children: [
        { index: true, element: <Posts /> },
        { path: ":id", element: <PostDetail /> },
      ],
    },
    {
      path: "create",
      element: <CreatePost />,
      icon: <PenLine color="white" />,
      display: true,
    },
    {
      path: "workout-plan",
      element: <WorkoutPlanner color="white" />,
      icon: <DumbbellIcon color="white" />,
      display: true,
    },
    { path: 'workout/:id/preview', element: <WorkoutPlan /> },
  ],
};

export default DashboardRoutes;
