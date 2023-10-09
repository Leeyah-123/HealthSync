import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import App from './App';
import AuthLayout from './components/layout/auth/auth.layout';
import './index.css';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';
=======
import App from './App.jsx';
import './index.css';
import Home from './routes/home.routes.jsx';
import Contact from './routes/contact.routes.jsx';
import Login from './routes/auth/login.routes.jsx';
import Signup from './routes/auth/signup.routes.jsx';
>>>>>>> landingpage

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
<<<<<<< HEAD
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
=======
      {
        index: true,
        element: <Home />,
      },
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
>>>>>>> landingpage
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
