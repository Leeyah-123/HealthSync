import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import AuthLayout from './components/layout/auth/auth.layout';
import './index.css';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';
import DashboardPage from "./pages/dashboard/DashboardPage";
import Home from "./pages/dashboard/Home";
import Forum from "./pages/dashboard/Forum";
import Settings from "./pages/dashboard/Settings";
import Calendar from "./pages/dashboard/Calendar";
import {ChakraProvider} from "@chakra-ui/react"



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Landing Page should go here
      // {
      //   index: true,
      //   element: <Home />,
      // },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'signup', element: <Signup /> },
      { path: 'login', element: <Signin /> },
    ],
  },

  {
    path: '/dashboard',
    element: <DashboardPage />,
    children: [
      {index: true, element: <Navigate to="/dashboard/home" replace />},
      {path: "/dashboard/home", element: <Home />},
      {path: "/dashboard/forum", element: <Forum />},
      {path: "/dashboard/calendar", element: <Calendar />},
      {path: "/dashboard/settings", element: <Settings />},

    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider >
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
