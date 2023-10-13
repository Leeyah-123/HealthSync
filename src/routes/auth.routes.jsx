import AuthLayout from '../components/layout/auth/auth.layout';
import Contact from '../pages/Contact';
import Signin from '../pages/auth/signin';
import Signup from '../pages/auth/signup';

const AuthRoutes = {
  path: 'auth',
  element: <AuthLayout />,
  children: [
    {
      path: 'login',
      element: <Signin />,
    },
    {
      path: 'signup',
      element: <Signup />,
    },
    {
      path: 'contact',
      element: <Contact />,
    },
  ],
};

export default AuthRoutes;
