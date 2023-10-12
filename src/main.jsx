import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthLayout from './components/layout/auth/auth.layout';
import App from './App.jsx';
import './index.css';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';


import DashboardPage from './pages/dashboard/DashboardPage';
import DashboardHome from './pages/dashboard/Home';
import Forum from './pages/dashboard/Forum';
import Settings from './pages/dashboard/Settings';
import Schedule from './pages/dashboard/Schedule';

import Login from './routes/auth/login.routes.jsx';
import Signup from './routes/auth/signup.routes.jsx';
import Contact from './routes/contact.routes.jsx';


const router = createBrowserRouter([
  {
    index: true,
    path: '/',
    element: <App />,
    // children: [
    //   // Landing Page should go here
    //   {
    //     index: true,
    //     element: <Home />,
    //   },
    // ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'signup', element: <Signup /> },
      { path: 'login', element: <Signin /> },


  {
    path: '/dashboard',
    element: <DashboardPage />,
    children: [
      { index: true, element: <Navigate to="/dashboard/home" replace /> },
      { path: '/dashboard/home', element: <DashboardHome /> },
      { path: '/dashboard/forum', element: <Forum /> },
      { path: '/dashboard/calendar', element: <Schedule /> },
      { path: '/dashboard/settings', element: <Settings /> },

      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'auth',
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'signup',
            element: <Signup />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
