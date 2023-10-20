import { Outlet } from 'react-router-dom';
import DashboardNavbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { useEffect } from 'react';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (!authContext.isLoggedIn) navigate('/auth/login');
  }, [navigate, authContext]);

  return (
    <div className="bg-lightGray1 min-h-screen flex gap-0 lg:gap-8 lg:pr-8 relative">
      <DashboardNavbar />

      <main className="w-full mt-20 lg:mt-10">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
