import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import AuthLayout from "./components/layout/auth/auth.layout";
import App from "./App.jsx";
import "./index.css";
import Signin from "./pages/auth/signin";
import Signup from "./pages/auth/signup";

import DashboardPage from "./pages/dashboard/DashboardPage";
import DashboardHome from "./pages/dashboard/Home";
import Forum from "./pages/dashboard/Forum";
import Settings from "./pages/dashboard/Settings";
import Schedule from "./pages/dashboard/Schedule";

import Contact from "./routes/contact.routes.jsx";

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
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
    path: "auth",
    children: [
      {
        path: "login",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      { index: true, element: <Navigate to="/dashboard/home" replace /> },
      { path: "/dashboard/home", element: <DashboardHome /> },
      { path: "/dashboard/forum", element: <Forum /> },
      { path: "/dashboard/calendar", element: <Schedule /> },
      { path: "/dashboard/settings", element: <Settings /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
