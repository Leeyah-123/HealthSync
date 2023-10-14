import { Outlet } from 'react-router-dom';
import DashboardNavbar from './Navbar';

const DashboardLayout = () => {
  return (
    <div className="bg-lightGray1 min-h-screen flex gap-0 lg:gap-8 lg:pr-8 relative">
      <DashboardNavbar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
