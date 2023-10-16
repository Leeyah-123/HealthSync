import {
  BellDot,
  Calendar,
  Droplet,
  Footprints,
  Moon,
  UserCircle2,
} from 'lucide-react';
import Card from '../../components/simple/dashboard/Card';
import { todayDate } from '../../utils/helper';
import { NavLink } from 'react-router-dom';

const DashboardHome = () => {
  const activity = [
    { name: 'Sleep', progress: '6.3 Hours', icon: <Moon /> },
    { name: 'Water', progress: '5 Litres', icon: <Droplet /> },
    { name: 'Walking', progress: '1590 Steps', icon: <Footprints /> },
  ];

  return (
    <main className="px-5 sm:px-10 md:px-20 lg:px-0 mt-20 lg:mx-0 lg:mt-10 w-full">
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="text-2xl lg:text-[30px] font-bold">Hello, Gilbert</h2>
          <p className=" mt-2">Keep Moving & Stay Healthy</p>
        </div>
        <div className="text-green flex gap-3 mt-2 lg:mt-0">
          <div className="hidden border-green border-2 py-2 lg:py-4 px-4 lg:px-6 rounded-[15px] lg:rounded-[20px] sm:flex items-center gap-6">
            <p>{todayDate()}</p>
            <Calendar />
          </div>
          <button
            title="View Notifications"
            className="bg-lightGreen rounded-[15px] lg:rounded-[20px] w-[60px] flex justify-center items-center"
          >
            <BellDot />
          </button>
          <NavLink
            to="/dashboard/profile"
            title="View Profile"
            className="bg-lightGreen rounded-[15px] lg:rounded-[20px] w-[60px] flex justify-center items-center"
          >
            <UserCircle2 />
          </NavLink>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] w-full gap-5 justify-between my-16">
        {activity.map((act, index) => (
          <Card
            key={index}
            activityName={act.name}
            activityProgress={act.progress}
            icon={act.icon}
          />
        ))}
      </div>
    </main>
  );
};

export default DashboardHome;
