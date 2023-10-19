import { Outlet } from 'react-router-dom';
import DashboardNavbar from './Navbar';

const DashboardLayout = () => {
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
